import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import {
  increaseCartCount,
  decreaseCartCount,
  setProducts
} from "../../Reducers/cartReducer";
import { useDispatch } from "react-redux";
import { Post } from "../../helper";

const Product = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartFlag, setCartFlag] = useState(false);

  const returnStars = (rating) => {
    let stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push("Full");
    }

    if (rating % 1 != 0) {
      stars.push("half");
    }

    // console.log("stars", stars);
    return stars;
  };

  const addCart = async (id) => {
    // console.log("data::::;", data);
    let productId = id;
    try {
      let res = await Post("addToCart", {productId});
      // console.log("res", res.data.result);
      if(res.status === 200){
        dispatch(increaseCartCount());
        dispatch(setProducts(res.data.result));
      }
      // console.log("fcsgvdhbsfjnkm");
      return res;
    } catch (e) {
      // console.log(e);
    }
  };

  const removeFromCart = () => {
    dispatch(decreaseCartCount());
    setCartFlag(!cartFlag);
  };

  const setDescription = (description) => {
    let desc;
    if (description.length > 75) {
      desc = description.slice(0, 75) + "...";
    } else {
      desc = description;
    }
    return desc;
  };

  const calculatePrice = (discount, price) => {
    let discountedPrice;

    discountedPrice = price - (price * discount) / 100;
    return parseFloat(discountedPrice).toFixed(2);
  };

  return (
    <>
      <div className="Product">
        <div
          className="imageContainer"
          onClick={() => navigate(`/ProductPage/${data._id}`)}
        >
          <img src={data.thumbnail} alt={`${data.title}_image`} />
        </div>
        <div className="detailsContainer">
          <h3
            className="title"
            onClick={() => navigate(`/ProductPage/${data._id}`)}
          >
            {data.title}
            <span>{`-${setDescription(data.description)}`}</span>
          </h3>
          <h4
            className="price"
            onClick={() => navigate(`/ProductPage/${data._id}`)}
          >
            Price:
            <span>${calculatePrice(data.discountPercentage, data.price)}</span>
            <del>{parseFloat(data.price).toFixed(2)}</del>
            <span className="discount">{`(${data.discountPercentage}%off)`}</span>
          </h4>
          <h4 className="ratings">
            ratings:{" "}
            <span>
              {returnStars(data.rating).map((star, index) =>
                star == "Full" ? (
                  <i key={index} className="fa-solid fa-star"></i>
                ) : (
                  <i key={index} className="fa-solid fa-star-half"></i>
                )
              )}{" "}
            </span>
            | {data.rating}
          </h4>
          {!cartFlag ? (
            <button className="cartButton" onClick={() => addCart(data._id)}>
              Add To Cart
            </button>
          ) : (
            <>
              <button
                className="cartButton"
                style={{ background: "rgb(255, 187, 0, 0.5)" }}
                disabled
              >
                Added To Cart
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
