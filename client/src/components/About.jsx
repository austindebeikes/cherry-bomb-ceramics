import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
    return (
        <Container className="mt-5">
            <Row className="align-items-center">
                <Col md={6}>
                    <h2>About Cherry Bomb Ceramics</h2>
                    <p>
                        Cherry Bomb Ceramics creates playful and elegant ceramic pieces that brighten your everyday life.
                        Each piece is handcrafted with love and attention to detail. From vibrant teapots to charming vases,
                        we focus on making functional art that adds a pop of joy to your home.
                    </p>
                    <p>
                        Our Petite Fruit collection is inspired by nature and designed to bring a touch of whimsy to any space.
                        We believe ceramics should be fun, beautiful, and functional—perfect for gifts or your own home.
                    </p>
                </Col>
                <Col md={6}>
                    <Image
                        src="https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg"
                        alt="Ceramic collection"
                        fluid
                        rounded
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
