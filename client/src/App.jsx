// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Cart Context
import { CartProvider, useCart } from "./contexts/CartContext";

// Import components
import HomePage from "./components/HomePage";
import PetiteFruit from "./components/PetiteFruit";
import TeaSet from "./components/TeaSet";
import Vases from "./components/Vases";
import CoffeeMugs from "./components/CoffeeMugs";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

// Navbar with Cart Count
const AppNavbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/CBC Logo.png"
            alt="Cherry Bomb Ceramics Logo"
            style={{ height: "140px", objectFit: "contain" }}
          />
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
              Cart {cartCount > 0 && <Badge className="cart-badge">{cartCount}</Badge>}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function App() {
  // Hardcoded products array
  const products = [
    {
      id: 1,
      name: "Ceramic Teapot",
      description: "Elegant hand-crafted teapot for your tea moments.",
      category: "Tea Sets",
      price: 45.0,
      image: "https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg"
    },
    {
      id: 2,
      name: "Ceramic Teacup",
      description: "Delicate teacup to match your teapot.",
      category: "Tea Sets",
      price: 15.0,
      image: "https://images.pexels.com/photos/241886/pexels-photo-241886.jpeg"
    },
    {
      id: 3,
      name: "Clay Vase",
      description: "Perfect vase to brighten any room.",
      category: "Vases",
      price: 30.0,
      image: "https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg"
    },
    {
      id: 4,
      name: "Coffee Mug",
      description: "Stylish mug for your morning coffee.",
      category: "Coffee Mugs",
      price: 12.0,
      image: "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg"
    },
    {
      id: 5,
      name: "Floral Tea Set",
      description: "Complete tea set with floral design.",
      category: "Tea Sets",
      price: 60.0,
      image: "https://images.pexels.com/photos/2133982/pexels-photo-2133982.jpeg"
    },
    {
      id: 6,
      name: "Petite Fruit Bowl",
      description: "Small and charming fruit bowl.",
      category: "Petite Fruit",
      price: 25.0,
      image: "https://images.pexels.com/photos/3171833/pexels-photo-3171833.jpeg"
    }
  ];

  return (
    <CartProvider>
      <Router>
        <AppNavbar />
        <Routes>
          {/* Homepage separated by categories */}
          <Route path="/" element={<HomePage products={products} />} />

          {/* Individual product details */}
          <Route path="/product/:id" element={<ProductDetails products={products} />} />

          {/* Existing category pages */}
          <Route path="/petite-fruit" element={<PetiteFruit />} />
          <Route path="/tea-set" element={<TeaSet />} />
          <Route path="/vases" element={<Vases />} />
          <Route path="/coffee-mugs" element={<CoffeeMugs />} />

          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={2000} />
      </Router>
    </CartProvider>
  );
}

export default App;
