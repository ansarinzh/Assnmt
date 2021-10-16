import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getSingleItem, itemUpdate } from "../Action/Action";
import { useParams } from "react-router-dom";

function EditItem() {
  const product = useSelector((state)=>state?.singleItem?.product?.result)
    const[name, setName]=useState(product?.item);
    const[price, setPrice]=useState(product?.price);
    const productList = useSelector((state) => state.productList.products.result);


    const dispatch = useDispatch();
    let {id} = useParams();
    

    console.log("product single ", product?.itemId)

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(
        itemUpdate({
          itemId: product?.itemId,
          item:name,
          price: price
        })
      );
    };

    useEffect(()=>{
     const singleproduct= productList.filter((dd)=>dd.itemId == id)
     setName(singleproduct[0]?.item)
     setPrice(singleproduct[0]?.price)
     console.log(singleproduct,"singelproduct");
      dispatch(getSingleItem(id))
    }, [])

    
    
  return (
    <form method="post" action="">
      <h3 id="logo">Edit Item</h3>

      <label htmlFor="item-name">Item Name</label>
      <input
        type="text"
        id="item-name"
        name="item-name"
        placeholder="Enter Item name.."
        autocomplete="off"
        required
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        placeholder="Enter Price"
        autocomplete="off"
        required
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
      />
      
      <input type="submit" name="submit" value="Update" onClick={submitHandler}/>
    </form>
  );
}
export default EditItem;
