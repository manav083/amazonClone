import React, { useState } from "react";
import Modal from "../Modal/Modal";
import SideBar from "../SideBar/SideBar";
import "./Header.css";

const Header = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="Header">
      <div className="Header__Logo">
        <h2>Deepak</h2>
      </div>
      <div className="Header__Location">
        <button onClick={() => setModalStatus(!modalStatus)}>
          <i
            className="fa-solid fa-location-dot"
            style={{ marginRight: "10px", fontSize: "20px" }}
          ></i>
          Select Location
        </button>
        <Modal
          component={<h1>Working!!!!</h1>}
          modalStatus={modalStatus}
          closeModal={() => setModalStatus(!modalStatus)}
        />
      </div>
      <div className="Header__SearchBar">
        <input
          type="text"
          placeholder="search here..."
          value={searchValue}
          onInput={(e) => setSearchValue(e.target.value)}
        />
        <button>
          <i className="fa-solid fa-2x fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="Header__Username">
        <span>Welcome! Jayant</span>
      </div>
      <div className="Header__Account">
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
      </div>
      <div className="Header__Cart">
        <button>
          <div className="cart__count">0</div>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
