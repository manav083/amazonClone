import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartProducts.css";
import { Delete } from "../../helper.js";
import { getCartDetails } from "../../Actions/cartActions";
import { decreaseCartCount } from "../../Reducers/cartReducer";

const CartProducts = () => {
  const products = useSelector((state) => state.cart.products);
  const [subTotal, setSubTotal] = useState();
  const dispatch = useDispatch();
  //   console.log("products:::::::;", products);

  const calculateSubTotal = () => {
    let subTotal = 0;
    for (let i = 0; i < products.length; i++) {
      subTotal +=
        products[i].productId.price -
        (products[i].productId.price *
          products[i].productId.discountPercentage) /
          100;
    }

    // console.log(subTotal);
    setSubTotal(parseFloat(subTotal).toFixed(2));
    // return parseFloat(subTotal).toFixed(2);
  };

  useEffect(() => {
    calculateSubTotal();
  }, [products]);

  const deleteFromCart = async (id) => {
    try {
      const res = await Delete(`deleteProduct/${id}`);
      // console.log(res);
      if (res) {
        dispatch(decreaseCartCount());
        dispatch(getCartDetails());
      }
    } catch (e) {
      console.log(e);
    }
  };

  const sliceDescription = (description) => {
    if (description && description.length > 75) {
      return description.slice(0, 75) + "...";
    } else {
      return description;
    }
  };

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

  const calculatePrice = (discount, price) => {
    // console.log(discount, price);
    let calculatedPrice;
    calculatedPrice = price - (price * discount) / 100;
    return parseFloat(calculatedPrice).toFixed(2);
  };

  return (
    <>
      {products &&
        products.map((ele, index) => (
          <div className="productContainer">
            <img src={ele.productId.thumbnail} />
            <div className="productDetails">
              <h3>
                {ele.productId.title} -{" "}
                <span>{sliceDescription(ele.productId.description)}</span>
              </h3>
              <h4 className="price">
                Price:
                <span>
                  $
                  {calculatePrice(
                    ele.productId.discountPercentage,
                    ele.productId.price
                  )}
                </span>
                <del>{parseFloat(ele.productId.price).toFixed(2)}</del>
                <span className="discount">{`(${ele.productId.discountPercentage}%off)`}</span>
              </h4>
              <h4 className="ratings">
                ratings:
                <span>
                  {returnStars(ele.productId.rating).map((star, index) =>
                    star == "Full" ? (
                      <i key={index} className="fa-solid fa-star"></i>
                    ) : (
                      <i key={index} className="fa-solid fa-star-half"></i>
                    )
                  )}{" "}
                </span>
                | {ele.productId.rating}
              </h4>
            </div>
            <div className="delete" onClick={() => deleteFromCart(ele._id)}>
              <i
                class="fa-solid fa-trash"
                style={{ fontSize: 25, cursor: "pointer" }}
              ></i>
            </div>
          </div>
        ))}
      <div className="subTotal">
        <p>Sub Total: ${subTotal}</p>
      </div>
    </>
  );
};

export default CartProducts;
