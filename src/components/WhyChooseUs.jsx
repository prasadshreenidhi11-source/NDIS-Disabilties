import React, { useRef } from "react";
import "./WhyChooseUs.css";

const FEATURES = [
  {
    title: "Workers you pick, not workers you get",
    text: "Meet two or three people first. If it is not the right fit, we change it without fuss.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
    number: "01",
  },
  {
    title: "Plain-language plans",
    text: "Every plan and invoice is written so you can read it in five minutes, not fifty.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    number: "02",
  },
  {
    title: "One coordinator, one number",
    text: "You will always know who to call, and they will already know your story.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    number: "03",
  },
];

function FeatureCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -7;
    const rotateY = ((x - rect.width / 2) / rect.width) * 7;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;

    card.style.setProperty(
      "--mouse-x",
      `${x}px`
    );

    card.style.setProperty(
      "--mouse-y",
      `${y}px`
    );
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <article
      ref={cardRef}
      className="feature-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor glow */}
      <div className="cursor-glow"></div>

      {/* Image */}
      <div className="feature-image">
        <img
          src={item.image}
          alt={item.title}
        />

        <div className="image-overlay"></div>

        <span className="feature-number">
          {item.number}
        </span>
      </div>

      {/* Content */}
      <div className="feature-content">
        <h3>{item.title}</h3>

        <p>{item.text}</p>

        <div className="feature-arrow">
          →
        </div>
      </div>
    </article>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="features-section">

      <div className="features-heading">
        <span>WHY BRIGHTSIDE</span>

        <h2>
          Support built
          <br />
          around you.
        </h2>
      </div>

      <div className="features-grid">
        {FEATURES.map((item) => (
          <FeatureCard
            key={item.number}
            item={item}
          />
        ))}
      </div>

    </section>
  );
}