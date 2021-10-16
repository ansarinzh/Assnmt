# List all items

Used to list all the items available in database

**URL** : `/item/listall`

**Method** : `GET`

## Success Response

```json
{
  "status": "success",
  "result": [
    {
      "itemId": 12,
      "item": "Unibic",
      "price": 10
    }
  ]
}
```

# Get one item

Used to get one item

**URL** : `/item/:id`

**Method** : `GET`

## Success Response

```json
{
  "status": "success",
  "result": {
    "itemId": 12,
    "item": "Unibic",
    "price": 10
  }
}
```


# Add item

Used to add one item

**URL** : `/item/add`

**Method** : `POST`

**Data constraints**

```json
{
    "itemId": "[id of the item in integer]",
    "item": "[name of the item]",
    "price": "[price of the item in integer]"
}
```

**Data example**

```json
{
    "itemId": 12,
    "item": "Unibic",
    "price": 10
}
```

## Success Response

**Content example**

```json
{
  "status": "success",
  "result": {
    "itemId": 2,
    "item": "hi",
    "price": 12,
    "_id": "5f48adeab637394dc7d673e6"
  }
}
```


# Update item

Used to update one item

**URL** : `/item/update`

**Method** : `PUT`

**Data constraints**

```json
{
    "itemId": "[id of the item in integer]",
    "item": "[name of the item]",
    "price": "[price of the item in integer]"
}
```

**Data example**

```json
{
    "itemId": 12,
    "item": "Unibic",
    "price": 10
}
```

## Success Response

```json
{
  "status": "success",
  "result": {}
}
```


# Delete item

Used to delete one item

**URL** : `/item/delete`

**Method** : `DELETE`

**Data constraints**

```json
{
    "itemId": "[id of the item in integer]"
}
```

**Data example**

```json
{
    "itemId": 12
}
```

## Success Response


```json
{
  "status": "success",
  "result": {}
}
```
