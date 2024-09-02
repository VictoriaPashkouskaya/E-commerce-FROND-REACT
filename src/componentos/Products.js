// src/components/Products.js
import React, { useEffect, useState } from 'react';
import '../Styled/Product.scss'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', data.products); // <-- Логируем массив продуктов
        setProducts(data.products); // <--  data.products
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  

  const addToCart = (product) => {
    // Prevent adding the same product multiple times
    if (cart.some(cartItem => cartItem.id === product.id)) {
      alert(`${product.name} is already in the cart!`);
    } else {
      // Add product to the cart
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    }
  };

  if (loading) {
    // Show a loading message while fetching data
    return <div>Loading...</div>;
  }

  if (error) {
    // Display error message if there's an issue with fetching data
    return <div>Error: {error}</div>;
  }

  return (
    <div className="products-container">
      <h1 className="products-header">Products</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id || product.name} className="product-card">
              
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description || 'No description available'}</p>
              <p className="product-price">${Number(product.price).toFixed(2)}</p>
              <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
            </div>
          ))
        ) : (
          // Show a message if no products are available
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;