import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

// Import Cart Context
import { CartProvider } from "./contexts/CartContext";

// Import components
import Homepage from "./components/HomePage";
import PetiteFruit from "./components/PetiteFruit";
import TeaSet from "./components/TeaSet";
import Vases from "./components/Vases";
import CoffeeMugs from "./components/CoffeeMugs";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart"; // New Cart component

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Navbar */}
        <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
          <Container>
            <Navbar.Brand as={Link} to="/">Cherry Bomb Ceramics</Navbar.Brand>
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
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link> {/* Cart Link */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/petite-fruit" element={<PetiteFruit />} />
          <Route path="/tea-set" element={<TeaSet />} />
          <Route path="/vases" element={<Vases />} />
          <Route path="/coffee-mugs" element={<CoffeeMugs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart Route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;


