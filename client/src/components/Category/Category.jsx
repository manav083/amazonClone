import React, { useEffect, useState } from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Category = ({ data, single }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(data.category);
  const [product, setProduct] = useState(data.products);
  // const [data, setData] = useState([]);

  // const fetchDataByCategory = async () => {
  //   const res = await axios.get(
  //     `http://localhost:5000/getProdutsByCategories/${category}`
  //   );
  //   if (res) {
  //     console.log("res.data", res.data);
  //     setData(res.data);
  //   }
  // };

  const returnArray = () => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(product[i]);
    }
    return arr;
  };

  // const toCategoryPage = async () => {
  //   navigate("/categoryPage");
  // };

  //  useEffect(() => {
  // }, [data]);
  
  // console.log(data)


  return (
    <>
      <div
        className="Category"
        onClick={() => navigate(`/categoryPage/${data.category}`)}
      >
        <h2>{category}</h2>
        <div className="Category__imageContainer">
          {product.length !== 0 && single ? (
            <img
              key={category}
              className={"Category__single"}
              src={product[0].thumbnail}
              alt={category}
            />
          ) : (
            product.length !== 0 &&
            returnArray().map((elem, index) => (
              <img
                key={`${category + elem + index}`}
                className={"Category__multiple"}
                src={elem.thumbnail}
                alt={category}
              />
            ))
          )}
        </div>
        <p>See more</p>
      </div>
    </>
  );
};

export default Category;
