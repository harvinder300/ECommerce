import React from 'react';
import './Home.css'; // Import the CSS file for styling
import EcommercePoster from './EcommercePoster.png'; // Import the image file

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our World</h1>
        <p>Explore our amazing collection of products!</p>
        <div className="cta-buttons">
          <button className="explore-button">Explore Now</button>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
      <div className="home-image">
        <img src={EcommercePoster} alt="Product Showcase" />
      </div>
    </div>
  );
}

export default Home;
