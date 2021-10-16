const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mockData = require('./mockData')
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient
var cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const loadServer = async () => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true })
    const db = client.db('myshop')
    console.log('Connected to Database')
    const itemsCollection = db.collection('items')

    // Load mock data
    const items = await itemsCollection.find().toArray()
    if (items.length === 0) {
      await itemsCollection.insertMany(mockData.items)
      console.log('Mock data loaded')
    }
    

    app.get('/item/listall', async (req, res) => {
      try {
        const items = await itemsCollection.find().toArray()
        console.log('items: ', items)
        return res.json({ status: 'success', result: items })
        return res.json(items)
      } catch (error) {
        console.log('error in fetching items: ', error)
      }
    })

    app.get('/item/:itemId', async (req, res) => {
      try {
        if (!req.params.itemId) return res.json({ status: 'failed', message: 'No itemId given'})
        const item = await itemsCollection.findOne({ itemId: parseInt(req.params.itemId) })
        if (!item) return res.json({ status: 'failed', message: 'Item not found' })
        else return res.json({ status: 'success', result: item })
      } catch (error) {
        console.log('error in fetching items: ', error)
      }
    })
    
    app.post('/item/add', async (req, res) => {
      try {
        if (!req.body.itemId) return res.json({ status: 'failed', message: 'No itemId given'})
        if (!req.body.item) return res.json({ status: 'failed', message: 'Item name is missing'})
        if (!req.body.price) return res.json({ status: 'failed', message: 'price is missing'})
        const item = await itemsCollection.findOne({ itemId: req.body.itemId })
        if (!item) {
          const result = await itemsCollection.insertOne(req.body)
          console.log('result: ', result)
          return res.json({ status: 'success', result: result.ops })
        } else {
          return res.json({ status: 'failed', message: 'item already exists'})
        }
      } catch (error) {
        console.log('error in inserting an item: ', error)
      }
    })

    app.put('/item/update', async (req, res) => {
      try {
        if (!req.body.itemId) return res.json({ status: 'failed', message: 'No itemId given'})
        if (!req.body.item) return res.json({ status: 'failed', message: 'Item name is missing'})
        if (!req.body.price) return res.json({ status: 'failed', message: 'price is missing'})
        const result = await itemsCollection.findOneAndUpdate(
          { itemId: req.body.itemId },
          {
            $set: {
              item: req.body.item,
              price: req.body.price
            }
          },
          {
            upsert: true
          }
        )
        return res.json({ status: 'success', result })
      } catch (error) {
        console.log('error in updating', error)
      }
    })
    
    app.delete('/item/delete/', async (req, res) => {
      try {
        if (!req.body.itemId) return res.json({ status: 'failed', message: 'No itemId given'})
        const result = await itemsCollection.deleteOne(
          { itemId: req.body.itemId }
        )
        if (result.deletedCount === 0) {
          return res.json('No items to delete')
        }
        return res.json({ status: 'success', result })
      } catch (error) {
        console.log('error: ', error)
      }
    })

    app.listen(3333,() => {
      console.log('Started on PORT 3333')
    })
  } catch (error) {
    console.log('error: ', error)
  }
}

loadServer()