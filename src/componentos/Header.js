import React from 'react';
import { Link } from 'react-router-dom';
import '../Styled/Header.scss'; // Import the SCSS file for styling

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>goShop</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/Products">Prod</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
