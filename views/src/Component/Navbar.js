import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <Link to="/" >All Products</Link>
          <Link to="/item/add" >Add Item</Link>
        </div>
      </div>
    )
}