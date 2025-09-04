// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const handleAddToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        alert('Item has been added to cart');
    };

    return (
        <div>
            <div className="header-container">
                <h1 className="centered-header">Explore</h1>
                <Link to="/cart" className="go-to-cart-button">Go to Cart</Link>
            </div>
            <div className="gallery">
                {products.map(product => (
                    <div className="gallery-item" key={product._id}>
                        <img src={product.imageUrl} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
