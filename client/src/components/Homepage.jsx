import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import PetiteFruit from "./PetiteFruit";

const Homepage = () => {
    const featuredProducts = [
        { id: 1, name: "Mini Strawberry Vase", price: "$18" },
        { id: 2, name: "Floral Tea Set", price: "$45" },
        { id: 3, name: "Clay Vase", price: "$35" },
    ];

    return (
        <div>
            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textShadow: "2px 2px 6px #000",
                }}
            >
                <h1 style={{ fontSize: "4rem", fontFamily: "'Great Vibes', cursive" }}>
                    Cherry Bomb Ceramics
                </h1>
            </div>

            {/* Welcome Section */}
            <Container className="mt-5 text-center">
                <h2>Welcome!</h2>
                <p className="mb-4">
                    Discover our playful and elegant ceramic pieces. Handcrafted with love, perfect for gifts or your home!
                </p>

                {/* Featured Products */}
                <h2>Featured Collection</h2>
                <Row className="mt-4">
                    {featuredProducts.map((product) => (
                        <Col key={product.id} md={4} className="mb-4">
                            <Card className="h-100 shadow-sm text-center" style={{ backgroundColor: "#fff0f5" }}>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text className="fw-bold">{product.price}</Card.Text>
                                    <Button
                                        variant="danger"
                                        onClick={() => alert(`${product.name} added to cart!`)}
                                    >
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Homepage;
