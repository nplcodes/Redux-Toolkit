import React from "react";

import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch()
  const addTocart= ()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addTocart}>Add to cart</button>
    </div>
  );
};

export default Product;
