import React, { useState, useEffect } from "react";
import AmazonPrimeTrailer from "../../components/AmazonPrimeTrailer/AmazonPrimeTrailer";
import Category from "../../components/Category/Category";
import CategoryRowComponent from "../../components/CategoryRowComponent/CategoryRowComponent";
import Slider from "../../components/Slider/Slider";
import { Post } from "../../helper";
import "./Home.css";

export const Categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

const Home = () => {
  const [data, setData] = useState([]);

  const getEightRandomCategory = () => {
    let arr = [];
    while (arr.length < 8) {
      let category = Categories[Math.floor(Math.random() * Categories.length)];
      if (!arr.includes(category)) arr.push(category);
    }
    // console.log(arr);
    if (arr.length === 8) fetchProductsByCategories(arr);
    // return Categories[Math.floor(Math.random() * Categories.length)];
  };

  const fetchProductsByCategories = async (categories) => {
    try {
      const res = await Post("fetchProdutsByCategories", categories);
      // console.log(res);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getRandomCategory = () => {
    return Categories[Math.floor(Math.random() * Categories.length)];
  };

  useEffect(() => {
    getEightRandomCategory();
  }, []);

  console.log(data[0]);

  return (
    <div className="Home">
      <Slider />
      <div className="Categories__container">
        {data[0] ? <Category data={data[0]} single /> : <></>}
        {data[1] ? <Category data={data[1]} single /> : <></>}
        {data[2] ? <Category data={data[2]} /> : <></>}
        {data[3] ? <Category data={data[3]} single /> : <></>}
        <AmazonPrimeTrailer
          name={"Drishyam 2 (Hindi)"}
          image={
            "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/46cda5d3b9ae2a2a6995b341dc212549364079e8eac037306ac7ae6a6a906576._RI_V_TTW_QL40_AC_SL792_.jpg"
          }
        />
        {data[4] ? <Category data={data[4]} /> : <></>}
        {data[5] ? <Category data={data[5]} /> : <></>}
      </div>
      {data[6] ? <CategoryRowComponent data={data[6]} /> : <></>}
      {data[7] ? <CategoryRowComponent data={data[7]} /> : <></>}
    </div>
  );
};

export default Home;
