// src/components/Cart.jsx
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Container, Table, Button, Badge } from "react-bootstrap";
import "../Cart.css"; // CSS handles fonts, animations, hover effects, cherry burst

const Cart = () => {
    const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();
    const [animateId, setAnimateId] = useState(null);
    const [burstId, setBurstId] = useState(null);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleAnimate = (id, action) => {
        setAnimateId(id + "-" + action);
        setTimeout(() => setAnimateId(null), 300);
    };

    const handleBurst = (id) => {
        setBurstId(id);
        setTimeout(() => setBurstId(null), 600); // duration of burst
    };

    const handleAdd = (item) => {
        addToCart(item);
        handleAnimate(item.id, "plus");
        handleBurst(item.id);
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center site-font-heading">
                🍒 Your Cart 🍒
            </h2>

            {cartItems.length === 0 ? (
                <p className="text-center site-font-text pastel-text">
                    Your cart is empty. Go grab some cherries!
                </p>
            ) : (
                <Table
                    striped
                    bordered
                    hover
                    responsive
                    className="align-middle shadow-sm"
                    style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#fff5f8" }}
                >
                    <thead style={{ backgroundColor: "#ffe6f2", color: "#d6336c" }}>
                        <tr>
                            <th>Product</th>
                            <th style={{ width: "120px" }}>Image</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th style={{ width: "180px" }}>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} style={{ backgroundColor: "#fff0f6" }}>
                                <td style={{ fontWeight: "bold", color: "#d6336c" }}>{item.name}</td>
                                <td>
                                    {item.image ? (
                                        <div className="image-wrapper">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="cart-image"
                                            />
                                            {burstId === item.id && (
                                                <div className="cherry-burst">
                                                    {Array.from({ length: 6 }).map((_, i) => (
                                                        <span key={i} className="cherry">🍒</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </td>
                                <td className="site-font-text">{item.description}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            style={{ borderRadius: "50%", fontSize: "1.2rem" }}
                                            onClick={() => {
                                                decreaseQuantity(item.id);
                                                handleAnimate(item.id, "minus");
                                            }}
                                            className={animateId === item.id + "-minus" ? "pop" : ""}
                                        >
                                            🍒
                                        </Button>
                                        <Badge
                                            bg="danger"
                                            pill
                                            style={{ fontSize: "1rem" }}
                                        >
                                            {item.quantity}
                                        </Badge>
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            style={{ borderRadius: "50%", fontSize: "1.2rem" }}
                                            onClick={() => handleAdd(item)}
                                            className={animateId === item.id + "-plus" ? "pop" : ""}
                                        >
                                            🍒
                                        </Button>
                                    </div>
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            {cartItems.length > 0 && (
                <h4 className="text-end site-font-heading mt-3">
                    Total: <span className="text-danger">${total.toFixed(2)}</span> 🍒
                </h4>
            )}
        </Container>
    );
};

export default Cart;
