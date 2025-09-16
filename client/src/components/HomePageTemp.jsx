// src/components/HomePage.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Homepage.css";

const HomePage = () => {
  const categories = [
    {
      title: "Petite Fruit",
      description: "Charming ceramic fruit miniatures for your home.",
      link: "/petite-fruit",
      image:
        "https://images.pexels.com/photos/241886/pexels-photo-241886.jpeg",
    },
    {
      title: "Tea Set",
      description: "Beautiful ceramic tea sets for afternoon tea.",
      link: "/tea-set",
      image:
        "https://images.pexels.com/photos/2133982/pexels-photo-2133982.jpeg",
    },
    {
      title: "Vases",
      description: "Handcrafted ceramic vases for flowers or decor.",
      link: "/vases",
      image:
        "https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg",
    },
    {
      title: "Coffee Mugs",
      description: "Unique handmade ceramic mugs for your coffee rituals.",
      link: "/coffee-mugs",
      image:
        "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg",
    },
    {
      title: "About",
      description: "Learn about Cherry Bomb Ceramics and our story.",
      link: "/about",
      image:
        "https://images.pexels.com/photos/18267464/pexels-photo-18267464.jpeg",
    },
    {
      title: "Contact",
      description: "Reach out for questions, orders, or collaborations.",
      link: "/contact",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#fff5f8", minHeight: "100vh" }}>
      <Container className="pt-4 pb-5">
        <Row className="mb-5">
          {categories.map((cat) => (
            <Col
              key={cat.title}
              xs={12}
              sm={6}
              md={4}
              className="d-flex align-items-stretch mb-4"
            >
              <Link to={cat.link} className="info-link w-100">
                <Card className="info-card shadow-sm h-100">
                  <Card.Img
                    src={cat.image}
                    alt={cat.title}
                    className="info-image"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <Card.Body className="text-center d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="cursive-heading">
                        {cat.title}
                      </Card.Title>
                      <Card.Text className="montserrat-text">
                        {cat.description}
                      </Card.Text>
                    </div>
                    <div className="mt-2">
                      {cat.title === "About" ? (
                        <img
                          src="/images/cherub.png"
                          alt="Cherub"
                          className="decor-icon"
                        />
                      ) : (
                        <img
                          src="/images/cherry.png"
                          alt="Cherry"
                          className="decor-icon"
                        />
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "#feebf2" }}
        className="footer py-4 text-center"
      >
        <img
          src="/images/CBC Logo.png"
          alt="Cherry Bomb Ceramics Logo"
          style={{ height: "150px", marginBottom: "-10px" }}
        />
        <p className="mb-2 montserrat-text">Follow us on social media!</p>
        <div className="social-icons">
          <a href="#" className="text-muted mx-2">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-muted mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-muted mx-2">
            <FaFacebook size={24} />
          </a>
        </div>
        <p className="mt-2 text-muted montserrat-text">
          © 2025 Cherry Bomb Ceramics
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
