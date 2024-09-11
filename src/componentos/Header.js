// src/componentos/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styled/Header.scss'; 

function Header({ cart }) {
  const cartItemCount = cart.length;

  return (
    <header>
      <div className="logo">
        <h1>goShop</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/cart">
              Cart {cartItemCount > 0 && <span className="cart-count">({cartItemCount})</span>}
            </Link>
          </li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/perfil">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
