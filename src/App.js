import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { commerce } from "./lib/commerce";

import { Products, Navbar, Cart } from "./components";



const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId, qunatity) => {
    const item = await commerce.cart.add(productId, qunatity);
    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <CssBaseline />
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart} />
    </>
  );
};

export default App;
