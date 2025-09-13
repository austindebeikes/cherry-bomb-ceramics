import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";

const CoffeeMugs = () => {
    const { addToCart } = useCart();

    const products = [
        { id: 10, name: "Classic Coffee Mug", description: "Sturdy ceramic coffee mug.", price: 18, image: "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg" },
        { id: 11, name: "Designer Mug", description: "Stylish ceramic mug with design.", price: 22, image: "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg" },
        { id: 12, name: "Rustic Mug", description: "Rustic handmade ceramic mug.", price: 20, image: "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg" },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Coffee Mugs Collection</h2>
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

export default CoffeeMugs;
