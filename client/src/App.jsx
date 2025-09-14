// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Cart Context
import { CartProvider, useCart } from "./contexts/CartContext";

// Import components
import Homepage from "./components/HomePage";
import PetiteFruit from "./components/PetiteFruit";
import TeaSet from "./components/TeaSet";
import Vases from "./components/Vases";
import CoffeeMugs from "./components/CoffeeMugs";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

// Navbar with Cart Count
const AppNavbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Cherry Bomb Ceramics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/petite-fruit">Petite Fruit</Nav.Link>
            <Nav.Link as={Link} to="/tea-set">Tea Set</Nav.Link>
            <Nav.Link as={Link} to="/vases">Vases</Nav.Link>
            <Nav.Link as={Link} to="/coffee-mugs">Coffee Mugs</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart {cartCount > 0 && <Badge bg="danger">{cartCount}</Badge>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/petite-fruit" element={<PetiteFruit />} />
          <Route path="/tea-set" element={<TeaSet />} />
          <Route path="/vases" element={<Vases />} />
          <Route path="/coffee-mugs" element={<CoffeeMugs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* Toast notifications */}
        <ToastContainer position="top-center" autoClose={2000} />
      </Router>
    </CartProvider>
  );
}

export default App;
