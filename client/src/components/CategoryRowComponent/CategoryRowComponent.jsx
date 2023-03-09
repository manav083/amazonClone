import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryRowComponent.css";

const CategoryRowComponent = ({ data }) => {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [category, setCategory] = useState(data.category);
  const [products, setProducts] = useState(data.products);

  
  return (
    <div className="CategoryRowComponent">
      <h2>{category}</h2>
      <div className="CategoryRowComponent__imgContainer">
        {products.map((elem) =>
          elem.images.map((e) => (
            <img src={e} onClick={() => navigate(`/ProductPage/${elem._id}`)} />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryRowComponent;
