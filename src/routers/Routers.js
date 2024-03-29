import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="home" />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Routers;
