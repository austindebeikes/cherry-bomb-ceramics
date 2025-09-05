import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Vases = () => {
    const products = [
        { id: 1, name: "Clay Vase", description: "Handcrafted clay vase with rustic charm.", price: "$35" },
        { id: 2, name: "Tall Ceramic Vase", description: "Elegant tall vase for flowers or decor.", price: "$40" },
        { id: 3, name: "Mini Vase Set", description: "Set of 3 small vases, perfect for any space.", price: "$28" },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Vases Collection</h2>
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

export default Vases;
