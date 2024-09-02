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
            <img src="electronics.jpg" alt="Electronics" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src="fashion.jpg" alt="Fashion" />
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <img src="home.jpg" alt="Home Appliances" />
            <h3>Home Appliances</h3>
          </div>
          <div className="category-card">
            <img src="books.jpg" alt="Books" />
            <h3>Books</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
