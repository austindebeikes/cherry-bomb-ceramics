// src/components/ProductList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./ProductList.css";

const ProductList = ({ products }) => {
    return (
        <Container className="mt-5">
            <Row className="g-4">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="product-card h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={product.image}
                                alt={product.name}
                                className="product-card-image"
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="site-font-heading">
                                    {product.name}
                                </Card.Title>
                                <Card.Text className="site-font-text">
                                    ${product.price.toFixed(2)}
                                </Card.Text>
                                <Link to={`/product/${product.id}`} className="mt-auto">
                                    <Button variant="danger" className="w-100">
                                        View Details 🍒
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
