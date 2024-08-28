import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './componentos/Products/Product';
import Cart from './componentos/Cart';
import Footer from './componentos/Footer';
import Header from './componentos/Header';
import Login from './componentos/Login';
import Perfil from './componentos/Perfil';
import Register from './componentos/Register';
import Home from './componentos/Home';
import './App.scss';

const App = () =>{
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
