import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader'
import CartProducts from '../../components/CartProducts.js/CartProducts';
import { useSelector, useDispatch } from 'react-redux';
import "./Cart.css";

const Cart = () => {
    

  return (
    <>
        <Header />
        <CategoriesHeader />
        <div className="cartContainer">
            <CartProducts  />
        </div>
    </>
  )
}

export default Cart