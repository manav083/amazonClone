import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./CategoriesHeader.css";
import { Categories } from "../../pages/Home/Home";
import { useNavigate } from "react-router-dom";

const CategoriesHeader = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const navigate = useNavigate();

  const toCategoryPage = () => {
    navigate("/categoryPage");
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
          <p onClick={() => toCategoryPage()}>{e}</p>
        ))}
      </div>
    </div>
  );
};

export default CategoriesHeader;
