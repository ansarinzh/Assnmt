import "./ProductGrid.css";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom";
import { listItems, deleteItemAction } from "../Action/Action";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ProductGrid() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const productList = useSelector((state) => state.productList.products.result);
  // const removeitem= useSelector((state)=>)

  const deleteItem=useSelector((state)=>state?.deleteItem);
  // console.log("Redux data", deleteItem);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(listItems(productList));
    setLoading(false);
  }, []);

  const handleDelete=(item)=>{
    console.log("item id", item.itemId)
    // if(window.confirm("Are you sure wanted to delete?")){
      dispatch(deleteItemAction(item.itemId))
      dispatch(listItems(productList));
    // }
  }


  if (loading) {
    return <p>Data is loading...</p>;
  }
  return (
    <div classNameName="grid-container">
      {console.log("data inside return", productList)}
      <div className="row" style={{backgroundColor:"#aaa"}}>
        <div className="column" >
          <h2>Item Id</h2>
        </div>
        <div className="column" >
          <h2>Item Name</h2>
        </div>
        <div className="column">
          <h2>Item Price</h2>
        </div>
        <div className="column" >
          <h2>Action</h2>
        </div>
      </div>
      { productList ? productList.map((item, key) => {
          return (
           <div className="row">
        <div className="column"  style={{backgroundColor:"white"}}>
          <h2>{item.itemId}</h2>
        </div>
        <div className="column"  style={{backgroundColor:"white"}}>
          <h2>{item.item}</h2>
        </div>
        <div className="column"  style={{backgroundColor:"white"}}>
          <h2>{item.price}</h2>
        </div>
        <div className="column"  style={{backgroundColor:"white", display:'flex', justifyContent:"space-around"}}>
          <div className="ic-edit">
            <Link to={{
              pathname:`/item/${item.itemId}`
            }}>
                <BiEdit  />
            </Link>
            
          </div>
          <div className="">
          <button className="ic-delete" onClick={()=>handleDelete(item)}><AiFillDelete/></button>
          </div>
        </div>
      </div>
          );
        }):""}
    </div>
  );
}
