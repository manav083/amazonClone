import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriesHeader from "../../components/CategoriesHeader/CategoriesHeader";
import Header from "../../components/Header/Header";
import ROOT_URL from "../../config";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});
  const [selectedImage, setSelectedImage] = useState("");

  const fetchProduct = async () => {
    const res = await axios.get(`${ROOT_URL}/getProductById/${productId}`);
    if (res.data.images !== "undefined") {
      setData(res.data);
      setSelectedImage(res.data.images[0]);
    }
  };

  const returnStars = (num) => {
    let stars = [];
    for (let i = 0; i < Math.floor(num); i++) {
      stars.push("full");
    }
    if (num % 1 != 0) {
      stars.push("half");
    }
    return stars;
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Header />
      <CategoriesHeader />
      <div className="ProductPage">
        <div className="ProductPage__ImageSection">
          <div className="ProductPage__ImageSection__SelectImage">
            {data.images &&
              data.images.map((img, i) => (
                <img
                  key={img + i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
          </div>
          <div className="ProductPage__ImageSection__SelectedImage">
            {data.images && <img src={selectedImage} />}
          </div>
        </div>
        <div className="ProductPage__descriptionSection">
          <p className="ProductPage__descriptionSection__title">
            {data.title} - <nbsp />
            <span className="ProductPage__descriptionSection__description">
              {data.description}
            </span>
          </p>
          <p className="ProductPage__descriptionSection__rating">
            rating:
            <span>
              {returnStars(data.rating).map((star) =>
                star == "full" ? (
                  <i class="fa-solid fa-star"></i>
                ) : (
                  <i class="fa-solid fa-star-half"></i>
                )
              )}
            </span>
            | {data.rating}
          </p>

          <p className="ProductPage__descriptionSection__price">
            Price: <span>${data.price}</span> <nbsp /> $
            {Math.round(
              data.price - data.price * (data.discountPercentage / 100)
            )}
          </p>
          <p className="ProductPage__descriptionSection__stock">
            Stock : <span>{data.stock}</span> Left
          </p>

          <button className="ProductPage__descriptionSection__addToCart">
            Add to Cart
          </button>
          <button className="ProductPage__descriptionSection__buyNow">
            Buy Now
          </button>
          <button className="ProductPage__descriptionSection__addToWishList">
            <span>
              <i class="fa-solid fa-heart"></i>
            </span>
            Add To Wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
