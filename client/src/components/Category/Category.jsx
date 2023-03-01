import React from "react";
import "./Category.css";

const Category = ({ name, image, id }) => {
  return (
    <div className="Category" key={id}>
      <h2>{name}</h2>
      <div className="Category__imageContainer">
        {image.map((img) => (
          <img
            key={`${name + img}`}
            className={
              image.length == 1 ? "Category__single" : "Category__multiple"
            }
            src={img}
            alt={name}
          />
        ))}
      </div>
      <p>See more</p>
    </div>
  );
};

export default Category;
