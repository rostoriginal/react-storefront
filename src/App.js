import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { commerce } from "./lib/commerce";

import { Products, Navbar } from "./components";

import "./style.css";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <>
      <CssBaseline />
      <Navbar />
      <Products products={products} />
    </>
  );
};

export default App;
