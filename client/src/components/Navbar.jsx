import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav
            className="navbar navbar-expand-lg sticky-top"
            style={{
                background: "#ffffffd9",
                backdropFilter: "saturate(180%) blur(14px)",
                boxShadow: "0 1px 10px rgba(0,0,0,.06)",
            }}
        >
            <div className="container">
                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                    style={{ color: "#d21c49" }}
                >
                    Cherry Bomb<span className="text-dark"> Ceramics</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#cbNav"
                    aria-controls="cbNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="cbNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
                        <li className="nav-item">
                            <a className="nav-link" href="#new-arrivals">New Arrivals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#matcha">Matcha</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cou-cou">Cou Cou</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#petite-fruit">Petite Fruit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#custom">Custom</a>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-sm btn-outline-dark rounded-4" to="/products">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-sm btn-dark rounded-4" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


