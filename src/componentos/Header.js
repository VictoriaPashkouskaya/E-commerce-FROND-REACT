import React, { useState} from 'react';
import { Link } from 'react-router-dom';

// Dummy data for categories, prices, and brands. Replace with actual data from API.
const categories = ['Electronics', 'Clothing', 'Books'];
const prices = ['Under $50', '$50 - $100', 'Over $100'];
const brands = ['Brand A', 'Brand B', 'Brand C'];

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle price change
  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  // Handle brand change
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  // Perform the filtering and redirect to the filtered products page
  const handleFilterSubmit = () => {
    // Construct the query parameters
    const query = new URLSearchParams({
      search: searchTerm,
      category: selectedCategory,
      price: selectedPrice,
      brand: selectedBrand,
    }).toString();
    
    // Redirect to products page with filters
    window.location.href = `/products?${query}`;
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select value={selectedPrice} onChange={handlePriceChange}>
          <option value="">Select Price Range</option>
          {prices.map((price) => (
            <option key={price} value={price}>{price}</option>
          ))}
        </select>
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">Select Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <button onClick={handleFilterSubmit}>Filter</button>
      </div>
    </header>
  );
}

export default Header;
