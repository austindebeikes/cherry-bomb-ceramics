// src/components/Checkout.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        creditCard: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit} className="checkout-form">
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email Address:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Credit Card Number:
                    <input
                        type="text"
                        name="creditCard"
                        value={formData.creditCard}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <div className="checkout-buttons-container">
                <Link to="/" className="home-button">Home</Link>
                <Link to="/cart" className="cart-button">Go to Cart</Link> {/* Changed to button styling */}
            </div>
        </div>
    );
};

export default Checkout;
