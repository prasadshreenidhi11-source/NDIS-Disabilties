import React from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Daily living support",
    short: "Everyday support, your way.",
    description:
      "Help at home with personal care, cooking, cleaning and getting ready for the day, on your schedule.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Community access",
    short: "Get out and enjoy life.",
    description:
      "Get to work, uni, the footy, the beach or the shops with a worker who shares your interests.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Supported independent living",
    short: "A home built around you.",
    description:
      "Shared or solo homes with 24-hour support, set up around the way you want to live.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    title: "Plan management",
    short: "Your plan, made simple.",
    description:
      "We pay your providers, track your budget and send you a clear monthly summary.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "05",
    title: "Allied health",
    short: "Specialist care that comes to you.",
    description:
      "Occupational therapy, physio and speech pathology that come to you, at home or in the community.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "06",
    title: "Respite and short stays",
    short: "A proper break for everyone.",
    description:
      "A planned break for you and your family, in a home that feels like a holiday rather than a ward.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">

      {/* Heading */}
      <div className="services-heading">

        <div>
          <span className="services-eyebrow">
            WHAT WE OFFER
          </span>

          <h2>
            Support that fits
            <br />
            <span>your life.</span>
          </h2>
        </div>

        <p>
          Practical support, built around how you
          actually want to live. Move your cursor
          over a service to explore.
        </p>

      </div>


      {/* Services */}
      <div className="services-wrapper">

        {services.map((service) => (

          <article
            className="service-card"
            key={service.number}
          >

            {/* Background image */}
            <div
              className="service-image"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            />

            {/* Dark overlay */}
            <div className="service-overlay"></div>


            {/* Number */}
            <div className="service-number">
              {service.number}
            </div>


            {/* Normal state */}
            <div className="closed-content">

              <div className="closed-icon">
                ↗
              </div>

              <h3>
                {service.title}
              </h3>

            </div>


            {/* Hover state */}
            <div className="open-content">

              <div className="open-top">

                <span>
                  SERVICE {service.number}
                </span>

                <div className="open-arrow">
                  ↗
                </div>

              </div>


              <div className="open-bottom">

                <span className="open-label">
                  {service.short}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <a href="#contact">
                  Ask about this service
                  <span>→</span>
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}