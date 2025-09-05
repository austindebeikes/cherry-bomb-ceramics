import React from "react";
import { Link } from "react-router-dom";


function Pill({ children }) {
    return (
        <span
            className="badge rounded-pill"
            style={{ background: "#ff7aa8", color: "#fff" }}
        >
            {children}
        </span>
    );
}

function CTAButton({ label, to = "#", variant = "primary" }) {
    return (
        <Link
            className={`btn btn-${variant} btn-lg px-4 rounded-4`}
            to={to}
            style={{
                backgroundColor: variant === "primary" ? "#d21c49" : undefined,
                borderColor: variant === "primary" ? "#d21c49" : undefined,
            }}
        >
            {label}
        </Link>
    );
}

export default function Hero() {
    return (
        <header className="py-5" style={{ background: "#fff8fb" }}>
            <div className="container py-4">
                <div className="row align-items-center g-4">
                    <div className="col-12 col-lg-6">
                        <Pill>Cherry Bomb</Pill>
                        <h1 className="display-5 fw-bold mt-3" style={{ color: "#1e1e1e" }}>
                            Ceramics that spark joy
                        </h1>
                        <p className="lead text-muted">
                            This is prime space! Use it to elaborate on your attention‑grabbing
                            section title. Explain what this section is about, share some
                            details, and give just the right amount of information to get the
                            audience hooked.
                        </p>
                        <div className="d-flex gap-2">
                            <CTAButton label="Shop New Arrivals" to="#new-arrivals" />
                            <CTAButton
                                label="Learn more"
                                to="#about"
                                variant="outline-dark"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div
                            className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm"
                            style={{ background: "#f3f3f3" }}
                        >
                            <img
                                src="https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg"
                                alt="Ceramics hero"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}