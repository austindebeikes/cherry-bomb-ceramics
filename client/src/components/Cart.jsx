// src/components/Cart.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    // calculate total price
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <>
                    <Row>
                        {cartItems.map((item) => (
                            <Col key={item.id} md={4} className="mb-4">
                                <Card className="h-100 shadow-sm">
                                    <Card.Img
                                        variant="top"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>Price: ${item.price.toFixed(2)}</Card.Text>
                                        <Card.Text>Quantity: {item.quantity}</Card.Text>
                                        <Button
                                            variant="danger"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <h4 className="text-end mt-4">Total: ${total.toFixed(2)}</h4>
                    <div className="text-end">
                        <Button variant="secondary" onClick={clearCart}>
                            Clear Cart
                        </Button>
                    </div>
                </>
            )}
        </Container>
    );
};

export default Cart;
