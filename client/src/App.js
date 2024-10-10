// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart'; // Import the Cart component
import Checkout from './components/Checkout'; // Import Checkout


function App() {
  return (
    <Router>
      <div className="App">
        {/* Welcome section */}
        <div className="welcome-section">
          <img
            src="https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cherry"
            className="cherry-image"
          />
          <h1 className="welcome-text">Welcome to Cherry Bomb Ceramics</h1>
          <img
            src="https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cherry"
            className="cherry-image"
          />
        </div>

        {/* Render product list and cart */}
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<ProductList />} /> {/* Home route */}
          <Route path="/cart" element={<Cart />} /> {/* Cart route */}
          <Route path="/checkout" element={<Checkout />} /> {/* Add Checkout route */}
        </Routes>

        <footer className="footer">
          <p>Dina DeBeikes | Ceramics Artist</p>
          <p>Creating beautiful pieces since high school.</p>
          <p>Based in beautiful San Diego, sharing life with her cat Dobby.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
