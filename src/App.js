// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './componentos/ProductDetail';
import Cart from './componentos/Cart';
import Footer from './componentos/Footer';
import Header from './componentos/Header';
import Login from './componentos/Login';
import Perfil from './componentos/Perfil';
import Register from './componentos/Register';
import Home from './componentos/Home';
import Products from './componentos/Products';

import './App.scss';

const App = () => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some(item => item.id === product.id);
      if (isProductInCart) {
        alert(`${product.name} is already in the cart!`);
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <Header cart={cart} /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;