import React from "react";
import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

const Home = () => {
  const Categories = [
    {
      name: "Makeup products",
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/Make-up-CC_desktop_1x._SY304_CB466075850_.jpg",
    },
    {
      name: "New looks for the new season ",
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Events/2018/JupiterFallBack/Jupiter_bau_PC_top_card_fashion_1x._SY304_CB484150077_.jpg",
    },
    {
      name: "Do up your home",
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Events/2018/JupiterFallBack/Jupiter_bau_PC_top_card_home_1x._SY304_CB484150079_.jpg",
    },
    {
      name: "Smart gadgets by Amazon",
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/neel/March/1X._SY304_CB469330167_.jpg",
    },
  ];

  return (
    <div className="Home">
      <Header />
      <Slider />
      <div className="Categories__container">
        {Categories.map((category) => (
          <Category name={category.name} image={category.img} />
        ))}
      </div>
    </div>
  );
};

export default Home;
