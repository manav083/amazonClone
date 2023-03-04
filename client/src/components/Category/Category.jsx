import React, { useEffect, useState } from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Category = ({ single, category }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchDataByCategory = async () => {
    const res = await axios.get(
      `http://localhost:5000/getProdutsByCategories/${category}`
    );
    if (res) {
      setData(res.data);
    }
  };

  const returnArray = () => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(data[i]);
    }
    return arr;
  };

  // const toCategoryPage = async () => {
  //   navigate("/categoryPage");
  // };

  useEffect(() => {
    fetchDataByCategory();
  }, [category]);

  return (
    <div
      className="Category"
      onClick={() => navigate(`/categoryPage/${category}`)}
    >
      <h2>{category}</h2>
      <div className="Category__imageContainer">
        {data.length !== 0 && single ? (
          <img
            key={category}
            className={"Category__single"}
            src={data[0].thumbnail}
            alt={category}
          />
        ) : (
          data.length !== 0 &&
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
  );
};

export default Category;
