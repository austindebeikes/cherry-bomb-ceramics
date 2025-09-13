import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";

const PetiteFruit = () => {
    const { addToCart } = useCart();

    const products = [
        { id: 4, name: "Apple Dish", description: "Handcrafted ceramic apple-shaped dish.", price: 20, image: "https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg" },
        { id: 5, name: "Pear Bowl", description: "Charming bowl shaped like a pear.", price: 25, image: "https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg" },
        { id: 6, name: "Berry Cup", description: "Small cup inspired by berries.", price: 15, image: "https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg" },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Petite Fruit Collection</h2>
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

export default PetiteFruit;
