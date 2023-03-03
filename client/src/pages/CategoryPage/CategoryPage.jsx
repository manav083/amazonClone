import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./CategoryPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Product from "../../components/Product/Product";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const fetchDataByCategory = async () => {
    const res = await axios.get(
      `http://localhost:5000/getProdutsByCategories/${category}`
    );
    if (res.data.length !== 0) {
      setProducts(res.data);
    }
  };

  useEffect(() => {
    fetchDataByCategory();
  }, []);

  return (
    <>
      <Header />
      <div className="CategoryPage">
        <div className="CategoryPage__filterSection"></div>
        <div className="CategoryPage__productContainer">
          {products.length !== 0 &&
            products.map((data) => <Product data={data} />)}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
