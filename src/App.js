import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './componentos/Products';
import ProductDetail from './componentos/ProductDetail'
import Cart from './componentos/Cart';
import Footer from './componentos/Footer';
import Header from './componentos/Header';
import Login from './componentos/Login';
import Perfil from './componentos/Perfil';
import Register from './componentos/Register';
import Home from './componentos/Home';
import './App.scss';

const App = () => {
  const [cart, setCart] = useState([]); // Initialize cart as an empty array

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
