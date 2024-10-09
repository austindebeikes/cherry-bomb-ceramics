import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {

  return (
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

      {/* Render product list */}
      <ProductList/>
      <footer className="footer">
        <p>Dina DeBeikes | Ceramics Artist</p>
        <p>Creating beautiful pieces since high school.</p>
        <p>Based in beautiful San Diego, sharing life with her cat Dobby.</p>
      </footer>
    </div>
  );
}

export default App;
