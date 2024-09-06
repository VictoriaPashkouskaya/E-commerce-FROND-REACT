import React from 'react';
import Register from './Register'; 
import '../Styled/Home.scss';

function Home() {
  return (
    <div className="home-container">

      <section className="register-section">
        <h2>Create Your Account</h2>
        <Register /> 
      </section>

      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories">
          <div className="category-card">
            <img  src={require('../images/images.jpg')}alt="Electronics" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src={require('../images/images (1).jpg')} alt="Fashion" />
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <img src={require('../images/cones-plant-home-decors-white-background-set-metal-color-home-decor-psd-format-3d_584012-364.jpg')} alt="Home Appliances" />
            <h3>Home Appliances</h3>
          </div>
          <div className="category-card">
          <img src={require('../images/books-stack-books-isolated-white-background-three-books-knowledge-day-paper-product_653217-44.avif')} alt="Books" />
            <h3>Books</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
