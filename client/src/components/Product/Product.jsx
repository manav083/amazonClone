import React from "react";
import "./Product.css";

const Product = ({ data }) => {
  console.log("data::::", data);

  const calculatePrice = (discount, price) => {
    let discountedPrice;

    discountedPrice = price - (price * discount) / 100;
    return parseFloat(discountedPrice).toFixed(2);
  };

  return (
    <>
      <div className="Product">
        <img src={data.thumbnail} alt={`${data.title}_image`} />
        <h4>
          {data.title}
          <h5>{`-${data.description}`}</h5>
        </h4>
        <h4>
          Price:
          {calculatePrice(data.discountPercentage, data.price)}
          <del>{data.price}</del>
          <span>{`(${data.discountPercentage}%off)`}</span>
        </h4>
        <h4>Ratings</h4>
      </div>
    </>
  );
};

export default Product;
