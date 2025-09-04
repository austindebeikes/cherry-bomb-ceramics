// src/components/Cart.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../App.css';

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.location.reload(); // Reload the page to reflect changes
    };

    return (
        <div className="cart-container">
            <div className="cart-buttons-container">
                <Link to="/" className="home-button">Home</Link>
                <Link to="/checkout" className="checkout-button">Checkout</Link>
            </div>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <span className="cart-item-title">{item.title}</span>
                                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                                </div>
                                <button onClick={() => handleRemoveItem(index)} className="remove-button">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h2>Total: ${calculateTotal()}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
