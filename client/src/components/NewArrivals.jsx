import React from "react";
import Section from "./Section";
import CollectionCard from "./CollectionCard";

export default function NewArrivals() {
    return (
        <Section
            id="new-arrivals"
            title="New Arrivals"
            subtitle="This is prime space! Use it to elaborate on your attention-grabbing section title. Explain what this section is about, share some details, and give just the right amount of information to get the audience hooked."
            bg="bg-white"
        >
            <div className="row g-4">
                <CollectionCard
                    title="Teapots"
                    blurb="Small-batch, hand-thrown forms with glossy glazes."
                    img="https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg"
                />
                <CollectionCard
                    title="Teacups"
                    blurb="Everyday elegance for your ritual."
                    img="https://images.pexels.com/photos/241886/pexels-photo-241886.jpeg"
                />
                <CollectionCard
                    title="Vases"
                    blurb="Organic silhouettes for any space."
                    img="https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg"
                />
            </div>
        </Section>
    );
}