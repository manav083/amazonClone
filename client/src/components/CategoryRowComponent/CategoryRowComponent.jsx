import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROOT_URL from "../../config";
import "./CategoryRowComponent.css";

const CategoryRowComponent = ({ category }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchDataByCategory = async () => {
    const res = await axios.get(
      `${ROOT_URL}/getProdutsByCategories/${category}`
    );
    if (res) {
      setData(res.data);
    }
    console.log("Row Component", res.data, category);
  };

  useEffect(() => {
    fetchDataByCategory();
  }, []);
  return (
    <div className="CategoryRowComponent">
      <h2>{category}</h2>
      <div className="CategoryRowComponent__imgContainer">
        {data.map((elem) =>
          elem.images.map((e) => (
            <img src={e} onClick={() => navigate(`/ProductPage/${elem._id}`)} />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryRowComponent;
