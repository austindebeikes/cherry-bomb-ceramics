import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CoffeeMugs = () => {
    const products = [
        { id: 1, name: "Assorted Ceramic Mug", description: "Colorful handmade mugs for your coffee.", price: "$15" },
        { id: 2, name: "Minimalist Mug", description: "Simple and elegant ceramic mug.", price: "$12" },
        { id: 3, name: "Decorative Mug Set", description: "Set of 3 mugs with unique designs.", price: "$35" },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Coffee Mugs Collection</h2>
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

export default CoffeeMugs;
