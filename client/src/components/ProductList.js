// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Ceramic Products</h1>
            <ul>
                {products.map(product => (
                    <div className="gallery-item" key={product._id}>
                        <img src={product.imageUrl} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <img src={product.imageUrl} alt={product.title} style={{ width: '100px', height: '100px' }} />
                    </li>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
