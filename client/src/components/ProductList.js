import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Corrected path for App.css

const ProductList = () => {
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
            <div className="gallery">
                {products.map(product => (
                    <div className="gallery-item" key={product._id}>
                        <img src={product.imageUrl} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
