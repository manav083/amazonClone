import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import "./CategoryPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { category } = useParams();

  const fetchDataByCategory = async () => {
    const res = await axios.get(
      `http://localhost:5000/getProdutsByCategories/${category}`
    );
    // if (res) {
    //   setData(res.data);
    // }
    console.log(res.data, category);
  };  

  useEffect(() => {
    fetchDataByCategory();
  }, []);

  return (
    <div className="CategoryPage">
      <Header />
    </div>
  );
};

export default CategoryPage;
