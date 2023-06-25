import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    const cart = await commerce.cart.add(productId, qunatity);
    setCart(cart);
  };

  const handleUpdateCartQtv = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const cart = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <CssBaseline />
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onUpdateCartQvt={handleUpdateCartQtv}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
