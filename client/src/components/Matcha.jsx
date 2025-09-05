import React from "react";
import Section from "./Section";
import CollectionCard from "./CollectionCard";

export default function Matcha() {
    return (
        <Section
            id="matcha"
            title="Matcha Collection"
            subtitle="This is prime space! Use it to elaborate on your attention-grabbing section title. Explain what this section is about, share some details, and give just the right amount of information to get the audience hooked."
            bg="bg-light"
        >
            <div className="row g-4">
                <CollectionCard
                    title="Chawan Bowls"
                    blurb="Textured rims, earthy tones."
                    img="https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg"
                />
                <CollectionCard
                    title="Tea Sets"
                    blurb="Complete sets for mindful moments."
                    img="https://images.pexels.com/photos/2133982/pexels-photo-2133982.jpeg"
                />
                <CollectionCard
                    title="Whisk Rests"
                    blurb="Form meets function on your counter."
                    img="https://images.pexels.com/photos/3692053/pexels-photo-3692053.jpeg"
                />
            </div>
        </Section>
    );
}