import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import  axios from 'axios';
import { addProduct, listItems } from '../Action/Action';


function AddItem() {
    const[name, setName]=useState("");
    const[price, setPrice]=useState("");

    const ItemList = useSelector(state =>state?.itemList);
    const productSave = useSelector((state) => state?.itemSave);
    const dispatch = useDispatch();
    // const {
    //     success: successSave,
    //   } = productSave;

    // useEffect(() => {
    //     // if (successSave) {
    //     //   setModalVisible(false);
    //     // }
    //     dispatch(addProduct());
    //     return () => {
    //       //
    //     };
    //   }, [successSave]);


      const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
          addProduct({
            itemId: Math.floor(Math.random() * 1000) + 1,
            item:name,
            price: price
          })
        );
      };
      
  return (
    <form method="post" action="">
      <h3 id="logo">Add New Item</h3>

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
      
      <input type="submit" name="submit" value="Create" onClick={submitHandler} />
    </form>
  );
}
export default AddItem;
