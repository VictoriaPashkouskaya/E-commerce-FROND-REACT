import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories } from '../../api'; // Import API functions

const App = () => {
  const [products, setProducts] = useState([]); // State for storing products
  const [categories, setCategories] = useState([]); // State for storing categories
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    const loadData = async () => {
      try {
        const productsData = await fetchProducts(); // Fetch products data from API
        setProducts(productsData); // Set products state with fetched data

        const categoriesData = await fetchCategories(); // Fetch categories data from API
        setCategories(categoriesData); // Set categories state with fetched data
      } catch (err) {
        setError('Error loading data'); // Set error message if there's an issue
        console.error(err); // Log the error for debugging
      }
    };

    loadData(); // Call loadData to fetch data when component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>Products</h1>
      {error && <p>{error}</p>} {/* Display error message if there's an error */}
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>{product.name}</li> // Render product names
          ))
        ) : (
          <p>Loading products...</p> // Fallback message while products are loading
        )}
      </ul>

      <h2>Categories</h2>
      <ul>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id}>{category.name}</li> // Render category names
          ))
        ) : (
          <p>Loading categories...</p> // Fallback message while categories are loading
        )}
      </ul>
    </div>
  );
};

export default App;
