import React from "react";
import { useNavigate } from "react-router-dom";

const sections = [
    { id: "home", title: "Home", image: "https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg", route: "/" },
    { id: "petite-fruit", title: "Petite Fruit", image: "https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg", route: "/petite-fruit" },
    { id: "tea-set", title: "Tea Set", image: "https://images.pexels.com/photos/2133982/pexels-photo-2133982.jpeg", route: "/tea-set" },
    { id: "vases", title: "Vases", image: "https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg", route: "/vases" },
    { id: "coffee-mugs", title: "Coffee Mugs", image: "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg", route: "/coffee-mugs" },
    { id: "about", title: "About", image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg", route: "/about" },
    { id: "contact", title: "Contact", image: "https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg", route: "/contact" },
];

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Header */}
            <div className="header">
                <h1>Cherry Bomb Ceramics</h1>
            </div>

            {/* Cards */}
            <div className="cards-container">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className="section-card"
                        onClick={() => navigate(section.route)} // ✅ this triggers React Router navigation
                    >
                        <img src={section.image} alt={section.title} className="section-img" />
                        <div className="section-overlay"></div>
                        <div className="section-content">
                            <h2>{section.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
