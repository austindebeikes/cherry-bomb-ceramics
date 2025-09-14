// src/components/Cart.jsx
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Container, Table, Button, Badge } from "react-bootstrap";
import "../Cart.css"; // We'll add some CSS for animations

const Cart = () => {
    const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();
    const [animateId, setAnimateId] = useState(null);

    // Calculate total
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // Handle animation trigger
    const handleAnimate = (id, action) => {
        setAnimateId(id + "-" + action);
        setTimeout(() => setAnimateId(null), 300);
    };

    return (
        <Container className="mt-5">
            <h2
                className="mb-4 text-center elegant-heading"
            >
                🍒 Your Cart 🍒
            </h2>

            {cartItems.length === 0 ? (
                <p className="text-center pastel-text">
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
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{
                                                width: "80px",
                                                borderRadius: "12px",
                                                border: "2px solid #f7c2d9",
                                            }}
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </td>
                                <td>{item.description}</td>
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
                                            onClick={() => {
                                                addToCart(item);
                                                handleAnimate(item.id, "plus");
                                            }}
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
                <h4 className="text-end elegant-heading mt-3">
                    Total: <span className="text-danger">${total.toFixed(2)}</span> 🍒
                </h4>
            )}
        </Container>
    );
};

export default Cart;
