// src/componentos/Products.js
import React, { useEffect, useState } from 'react';
import '../Styled/Product.scss';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products || []); // Убедитесь, что это массив
      } catch (error) {
        setError('Failed to fetch products: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart(product);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="products-container">
      <h1 className="products-header">Products</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id || product.name} className="product-card">
              {product.image_url ? (
                <img
                  src={`http://localhost:3001${product.image_url}`}
                  alt={product.name}
                  className="product-image"
                />
              ) : (
                <div className="no-image">No Image Available</div>
              )}
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description || 'No description available'}</p>
              <p className="product-price">${Number(product.price).toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;


