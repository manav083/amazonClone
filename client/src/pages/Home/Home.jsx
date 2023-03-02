import React from "react";
import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

const Home = () => {
  const Categories = [
    {
      name: "Makeup products",
      img: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/Make-up-CC_desktop_1x._SY304_CB466075850_.jpg",
      ],
    },
    {
      name: "New looks for the new season ",
      img: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Events/2018/JupiterFallBack/Jupiter_bau_PC_top_card_fashion_1x._SY304_CB484150077_.jpg",
      ],
    },
    {
      name: "Do up your home",
      img: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Events/2018/JupiterFallBack/Jupiter_bau_PC_top_card_home_1x._SY304_CB484150079_.jpg",
      ],
    },
    {
      name: "Smart gadgets by Amazon",
      img: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/neel/March/1X._SY304_CB469330167_.jpg",
      ],
    },
    {
      name: "Value bazaar",
      img: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Events/2018/JupiterFallBack/Jupiter_bau_PC_top_card_groceries_1x._SY304_CB484150076_.jpg",
      ],
    },
    {
      name: "Work from home essentials",
      img: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/V195588257_IN_CEPC_Contingency_Covid_GW_April20_rush_dbqc0.5x_3._SY116_CB433895198_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/V195588257_IN_CEPC_Contingency_Covid_GW_April20_rush_dbqc0.5x_4._SY116_CB433895198_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/V195588257_IN_CEPC_Contingency_Covid_GW_April20_rush_dbqc0.5x_1._SY116_CB433895198_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/V195588257_IN_CEPC_Contingency_Covid_GW_April20_rush_dbqc0.5x_2._SY116_CB433889427_.jpg",
      ],
    },
    {
      name: "Revamp your home in style",
      img: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_1_bd034eee_6f06_4e0a_9967_d0e0e5f7f932_jpg_LOWER_QL10_._SY116_CB423376243_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_2_64e793dc_221d_4067_8fca_2f0338879977_jpg_LOWER_QL85_._SY116_CB423376243_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_3_ccc0f761_ea08_4cfb_9562_6f13e80170d8_jpg_LOWER_QL30_._SY116_CB423376243_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_4_bc4e9dc4_a3aa_4aae_93fd_9723dacd805f_jpg_LOWER_QL50_._SY116_CB423376243_.jpg",
      ],
    },
    {
      name: "Innovations from Emerging Indian Brands",
      img: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Gateway/June/dhyana_02_379_304._SY304_CB429464454_.jpg",
      ],
    },
  ];

  return (
    <div className="Home">
      <Header />
      <Slider />
      <div className="Categories__container">
        {Categories.map((category, index) => (
          <Category
            key={`${index}${category.name}`}
            id={`${index}${category.name}`}
            name={category.name}
            image={category.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
