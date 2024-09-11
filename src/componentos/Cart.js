// src/componentos/Cart.js
import React from 'react';
import '../Styled/Cart.scss';

const Cart = ({ cart = [], removeFromCart }) => {
  const calculateTotal = () => {
    const total = cart.reduce((total, item) => total + (Number(item.price) || 0), 0);
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={`http://localhost:3001${item.image_url}`} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>${Number(item.price).toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-from-cart-button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total: ${calculateTotal()}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

