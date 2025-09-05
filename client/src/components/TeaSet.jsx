import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TeaSet = () => {
    const products = [
        { id: 1, name: "Floral Tea Set", description: "Elegant tea set with floral designs.", price: "$45" },
        { id: 2, name: "Brown Ceramic Tea Set", description: "Rustic brown set perfect for afternoon tea.", price: "$50" },
        { id: 3, name: "Miniature Tea Set", description: "Small tea set ideal for display or children.", price: "$30" },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Tea Set Collection</h2>
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

export default TeaSet;
