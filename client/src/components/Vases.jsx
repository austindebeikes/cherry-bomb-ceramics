import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";

const Vases = () => {
    const { addToCart } = useCart();

    const products = [
        { id: 7, name: "Tall Clay Vase", description: "Elegant tall vase for flowers.", price: 35, image: "https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg" },
        { id: 8, name: "Rustic Jar", description: "Rustic handmade ceramic jar.", price: 40, image: "https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg" },
        { id: 9, name: "Modern Vase", description: "Minimalist modern design vase.", price: 38, image: "https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg" },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Vase Collection</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text className="fw-bold">${product.price.toFixed(2)}</Card.Text>
                                <Button variant="danger" onClick={() => addToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Vases;
