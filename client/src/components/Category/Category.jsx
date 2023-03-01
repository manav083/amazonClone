import React from "react";
import "./Category.css";

const Category = ({ name, image }) => {
  return (
    <div className="Category">
      <b>{name}</b>
      <img src={image} alt={name} />
      <p>See more</p>
    </div>
  );
};

export default Category;
