import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

// Import components
import Homepage from "./components/HomePage";
import PetiteFruit from "./components/PetiteFruit";
import TeaSet from "./components/TeaSet";
import Vases from "./components/Vases";
import CoffeeMugs from "./components/CoffeeMugs";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  // Smooth scroll to homepage section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Cherry Bomb Ceramics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Scroll to sections on homepage */}
              <Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("featured")}>Petite Fruit</Nav.Link>
              <Nav.Link as={Link} to="/tea-set">Tea Set</Nav.Link>
              <Nav.Link as={Link} to="/vases">Vases</Nav.Link>
              <Nav.Link as={Link} to="/coffee-mugs">Coffee Mugs</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("welcome")}>About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
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
      </Routes>
    </Router>
  );
}

export default App;

