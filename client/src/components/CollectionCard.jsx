import React from "react";

export default function CollectionCard({ title, blurb, img, cta = "Browse" }) {
    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100 rounded-4">
                <div className="ratio ratio-4x3 rounded-4">
                    <img
                        src={img}
                        alt={title}
                        className="rounded-top-4"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold" style={{ color: "#1e1e1e" }}>
                        {title}
                    </h5>
                    <p className="card-text text-muted">{blurb}</p>
                    <a
                        href="#"
                        className="stretched-link text-decoration-none"
                        style={{ color: "#d21c49" }}
                    >
                        {cta} →
                    </a>
                </div>
            </div>
        </div>
    );
}
