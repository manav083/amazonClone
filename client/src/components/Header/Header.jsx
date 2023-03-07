import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import axios from "axios";
import ROOT_URL from "../../config";
import { getCartDetails } from "../../Actions/cartActions";

const Header = () => {
  const navigate = useNavigate();
  const [modalStatus, setModalStatus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  const [searchDropDown, setSearchDropDown] = useState(false);
  const cartCount = useSelector((state) => state.cart.count);
  const products = useSelector((state) => state.cart.products);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  console.log("products:::::::::::::",products);

  const getSearchParams = async () => {
    const res = await axios.get(`${ROOT_URL}/getSearchOptions/${searchValue}`);
    console.log(res);
    setSearchOptions(res.data);
  };

  window.addEventListener("click", () => setSearchDropDown(false));


  useEffect(() => {
    dispatch(getCartDetails());
  }, []);

  return (
    <div className="Header">
      <div className="Header__Logo" onClick={() => navigate("/")}>
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
      <div
        className="Header__SearchBar"
        onClick={() => setSearchDropDown(true)}
      >
        <input
          className="searchInput"
          type="text"
          placeholder="search here..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setSearchDropDown(true);
            getSearchParams();
          }}
        />
        <div
          className="Header__SearchBar__options"
          style={{ display: `${searchDropDown ? "flex" : "none"}` }}
        >
          {searchOptions.length !== 0 ? (
            searchOptions.map((opt) => (
              <p
                key={opt._id}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/ProductPage/${opt._id}`);
                }}
              >
                {opt.title}
              </p>
            ))
          ) : (
            <p style={{ color: "#555", fontSize: "14px" }}>
              options will appear here...
            </p>
          )}
        </div>
        <button>
          <i className="fa-solid fa-2x fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="Header__Username">
        {user ? <span>Welcome! {user.name}</span> : <span>Sign In</span>}
      </div>
      <div className="Header__Account">
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
      </div>
      <div className="Header__Cart">
        <button>
          <div className="cart__count">{cartCount}</div>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
