import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Shared/Error";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";
import ProductOverview from "./components/Products/ProductOverview";
import Contact from "./components/Contact.js/Contact";
import About from "./components/About/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Product />} />
        <Route
          path="/products/:category/:product"
          element={<ProductOverview />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
