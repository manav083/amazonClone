import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./CategoriesHeader.css";
import { useNavigate } from "react-router-dom";

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

const CategoriesHeader = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const navigate = useNavigate();

  const toCategoryPage = (category) => {
    navigate(`/categoryPage/${category}`);
  };

  return (
    <div className="CategoriesHeader">
      <div className="CategoriesHeader__SideBar">
        <i
          className="fa-solid fa-2x fa-bars"
          style={{ cursor: "pointer" }}
          onClick={() => setSideBarStatus(!sideBarStatus)}
        ></i>
        <SideBar
          sideBarStatus={sideBarStatus}
          setSideBarStatus={() => setSideBarStatus(!sideBarStatus)}
        />
      </div>
      <div className="CategoriesHeader__categories">
        {Categories.map((e) => (
          <p key={e} onClick={() => toCategoryPage(e)}>
            {e}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategoriesHeader;
