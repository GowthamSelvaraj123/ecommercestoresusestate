import {Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Product from "./page/Product";
import Shop from "./page/Shop"
import Layout from "./page/Layout";
import { useState } from "react";
export default function Router({ addToCart }) {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home addToCart={addToCart} />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}