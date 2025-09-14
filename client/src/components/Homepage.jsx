// src/components/HomePage.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Homepage.css";

const HomePage = () => {
    // Featured Product
    const featuredProduct = {
        id: 1,
        name: "Handmade Teapot",
        description: "Elegant handmade ceramic teapot perfect for tea lovers.",
        price: 45.0,
        image: "https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg",
    };

    // Categories and products
    const categories = [
        {
            title: "Petite Fruit",
            description: "Charming ceramic fruit miniatures for your home.",
            link: "/petite-fruit",
            image: "https://images.pexels.com/photos/241886/pexels-photo-241886.jpeg",
        },
        {
            title: "Tea Set",
            description: "Beautiful ceramic tea sets for afternoon tea.",
            link: "/tea-set",
            image: "https://images.pexels.com/photos/2133982/pexels-photo-2133982.jpeg",
        },
        {
            title: "Vases",
            description: "Handcrafted ceramic vases for flowers or decor.",
            link: "/vases",
            image: "https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg",
        },
        {
            title: "Coffee Mugs",
            description: "Unique handmade ceramic mugs for your coffee rituals.",
            link: "/coffee-mugs",
            image: "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg",
        },
        {
            title: "About",
            description: "Learn about Cherry Bomb Ceramics and our story.",
            link: "/about",
            image: "https://images.pexels.com/photos/18267464/pexels-photo-18267464.jpeg",
        },
        {
            title: "Contact",
            description: "Reach out for questions, orders, or collaborations.",
            link: "/contact",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        },
    ];

    return (
        <Container className="mt-5">
            <h2 className="cursive-heading text-center mb-4"> Featured Product </h2>
            <Row className="mb-5 justify-content-center">
                <Col xs={12} md={6}>
                    <Card className="info-card shadow-sm">
                        <Card.Img
                            variant="top"
                            src={featuredProduct.image}
                            alt={featuredProduct.name}
                            className="info-image"
                        />
                        <Card.Body className="text-center">
                            <Card.Title className="cursive-heading">{featuredProduct.name}</Card.Title>
                            <Card.Text className="montserrat-text">{featuredProduct.description}</Card.Text>
                            <h5 className="text-muted montserrat-text">${featuredProduct.price.toFixed(2)}</h5>
                            <Link to={`/product/${featuredProduct.id}`}>
                                <Button className="custom-btn mt-2">View Details 🍒</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                {categories.map((cat) => (
                    <Col key={cat.title} xs={12} md={6} lg={4} className="mb-4">
                        <Link to={cat.link} className="info-link">
                            <Card className="info-card shadow-sm">
                                <Card.Img src={cat.image} alt={cat.title} className="info-image" />
                                <Card.Body>
                                    <Card.Title className="cursive-heading">{cat.title}</Card.Title>
                                    <Card.Text className="montserrat-text">{cat.description}</Card.Text>

                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>

            {/* Footer */}
            <footer className="footer mt-5 py-4 text-center">
                <p className="mb-2 montserrat-text">Follow us on social media!</p>
                <div className="social-icons">
                    <a href="#" className="text-muted mx-2"><FaTwitter size={24} /></a>
                    <a href="#" className="text-muted mx-2"><FaInstagram size={24} /></a>
                    <a href="#" className="text-muted mx-2"><FaFacebook size={24} /></a>
                </div>
                <p className="mt-2 text-muted montserrat-text">© 2025 Cherry Bomb Ceramics</p>
            </footer>
        </Container>
    );
};

export default HomePage;
