// src/components/Cart.js

import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <img src={item.imageUrl} alt={item.title} width="50" />
                                <span>{item.title}</span> - ${item.price.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                    <h2>Total: ${calculateTotal()}</h2>
                </div>
            )}
            <Link to="/" className="home-button">Products</Link>
        </div>
    );
};

export default Cart;
