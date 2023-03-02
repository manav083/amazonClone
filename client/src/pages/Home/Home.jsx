import React from "react";
import AmazonPrimeTrailer from "../../components/AmazonPrimeTrailer/AmazonPrimeTrailer";
import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

const Home = () => {
  const Categories = [
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

  const getRandomCategory = () => {
    return Categories[Math.ceil(Math.random() * Categories.length)];
  };

  return (
    <div className="Home">
      <Header />
      <Slider />
      <div className="Categories__container">
        <Category category={getRandomCategory()} single />
        <Category category={getRandomCategory()} single />
        <Category category={getRandomCategory()} />
        <Category category={getRandomCategory()} single />
        <AmazonPrimeTrailer
          name={"Drishyam 2 (Hindi)"}
          image={
            "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/46cda5d3b9ae2a2a6995b341dc212549364079e8eac037306ac7ae6a6a906576._RI_V_TTW_QL40_AC_SL792_.jpg"
          }
        />
        <Category category={getRandomCategory()} />
        <Category category={getRandomCategory()} />
      </div>
    </div>
  );
};

export default Home;
