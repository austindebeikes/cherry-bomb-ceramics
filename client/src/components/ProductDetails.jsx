// src/components/ProductDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find((p) => p.id.toString() === id);

    const [quantity, setQuantity] = useState(1);

    if (!product) return <p>Product not found.</p>;

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="align-items-center">
                <Col md={6} className="text-center mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-detail-image"
                    />
                </Col>
                <Col md={6}>
                    <h2 className="site-font-heading">{product.name}</h2>
                    <p className="site-font-text">{product.description}</p>
                    <p className="site-font-text">
                        <strong>Category:</strong> {product.category}
                    </p>
                    <h4 className="pastel-text">
                        ${product.price.toFixed(2)}
                    </h4>

                    <div className="d-flex align-items-center gap-4 mt-100">
                        <Button
                            variant="outline-secondary"
                            onClick={() =>
                                setQuantity(quantity > 1 ? quantity - 1 : 1)
                            }
                            style={{ borderRadius: "50%" }}
                        >
                            –
                        </Button>
                        <Badge bg="secondary" pill>
                            {quantity}
                        </Badge>
                        <Button
                            variant="outline-secondary
                        "
                            onClick={() => setQuantity(quantity + 1)}
                            style={{ borderRadius: "50%" }}
                        >
                            +
                        </Button>
                    </div>

                    <Button
                        className="custom-btn custom-btn:hover"
                        
                        onClick={handleAddToCart}
                    >
                        Add to Cart             <img
                                            src="/images/cherub.png"
                                            alt="Cherub"
                                            className="decor-icon-cherub"
                                        />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
