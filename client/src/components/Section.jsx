import React from "react";

export default function Section({ id, title, subtitle, children, bg }) {
    return (
        <section id={id} className={`py-5 ${bg ? bg : "bg-white"}`}>
            <div className="container">
                {title && (
                    <div className="mb-4 text-center">
                        <h2 className="fw-bold" style={{ color: "#1e1e1e" }}>{title}</h2>
                        {subtitle && (
                            <p className="text-muted mx-auto" style={{ maxWidth: 720 }}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}