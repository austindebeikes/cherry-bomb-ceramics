// src/components/Cart.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";
import { Container, Table, Button } from "react-bootstrap";

const Cart = () => {
    const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

    // Calculate total
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <Table striped bordered hover responsive className="align-middle">
                    <thead>
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
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{ width: "80px", borderRadius: "8px" }}
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
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                        >
                                            –
                                        </Button>
                                        <span>{item.quantity}</span>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => addToCart(item)}
                                        >
                                            +
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
                <h4 className="text-end mt-3">
                    Total: <span className="text-danger">${total.toFixed(2)}</span>
                </h4>
            )}
        </Container>
    );
};

export default Cart;

