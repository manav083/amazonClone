import React from "react";
import "./Product.css";

const Product = ({ data }) => {
  return <div className="Product">{data.title}</div>;
};

export default Product;
