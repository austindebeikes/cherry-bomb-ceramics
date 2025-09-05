import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PetiteFruit = () => {
    const products = [
        { id: 1, name: "Mini Strawberry Vase", description: "A tiny vase shaped like a strawberry.", price: "$18" },
        { id: 2, name: "Mini Citrus Teapot", description: "Bright orange teapot perfect for small servings.", price: "$25" },
        { id: 3, name: "Tiny Fruit Bowls", description: "Set of 3 small fruit-inspired ceramic bowls.", price: "$22" },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Petite Fruit Collection</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text className="fw-bold">{product.price}</Card.Text>
                                <Button variant="danger">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PetiteFruit;
