import React, { useEffect, useRef } from "react";
import "./ContactCTA.css";

const ContactCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const move = (e) => {
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      section.style.setProperty("--mouse-x", `${x}px`);
      section.style.setProperty("--mouse-y", `${y}px`);
    };

    section.addEventListener("mousemove", move);

    return () => {
      section.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section className="premium-cta" id="contact" ref={sectionRef}>

      {/* Background glow */}
      <div className="cta-glow"></div>

      {/* Decorative circles */}
      <div className="cta-orbit orbit-one"></div>
      <div className="cta-orbit orbit-two"></div>
      <div className="cta-orbit orbit-three"></div>

      <div className="cta-container">

        {/* LEFT SIDE */}
        <div className="cta-content">

          <div className="cta-eyebrow">
            <span></span>
            LET'S TALK
          </div>

          <h2>
            Tell us what a good
            <br />
            <span>week looks like for you.</span>
          </h2>

          <p>
            That is where every plan starts.
            No forms, no pressure, and you can
            bring anyone you like to the conversation.
          </p>

          <div className="cta-buttons">

            <a
              href="tel:1300000000"
              className="cta-primary"
            >
              <span>Call 1300 000 000</span>
              <b>↗</b>
            </a>

            <a
              href="mailto:hello@brightside.example"
              className="cta-secondary"
            >
              Email us instead
              <span>→</span>
            </a>

          </div>

          <div className="cta-note">
            <span className="pulse-dot"></span>
            No pressure. Just a conversation.
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-cards">

          {/* PHONE */}
          <div className="contact-card">

            <div className="contact-icon phone-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2
                  19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  A19.79 19.79 0 0 1 2.12 4.18
                  2 2 0 0 1 4.11 2h3
                  a2 2 0 0 1 2 1.72
                  12.84 12.84 0 0 0 .7 2.81
                  2 2 0 0 1-.45 2.11L8.09 9.91
                  a16 16 0 0 0 6 6l1.27-1.27
                  a2 2 0 0 1 2.11-.45
                  12.84 12.84 0 0 0 2.81.7
                  A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </div>

            <div>
              <span className="card-label">
                CALL US
              </span>

              <h3>1300 000 000</h3>

              <p>
                Monday to Friday · 8am to 6pm
              </p>
            </div>

            <span className="card-arrow">↗</span>

          </div>


          {/* EMAIL */}
          <div className="contact-card">

            <div className="contact-icon email-icon">
              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />

                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <div>
              <span className="card-label">
                EMAIL
              </span>

              <h3>
                hello@brightside.example
              </h3>

              <p>
                We reply within one business day
              </p>
            </div>

            <span className="card-arrow">↗</span>

          </div>


          {/* LOCATION */}
          <div className="contact-card">

            <div className="contact-icon location-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M20 10c0 5-8 12-8 12S4 15 4 10
                  a8 8 0 1 1 16 0z"
                />

                <circle
                  cx="12"
                  cy="10"
                  r="2.5"
                />
              </svg>
            </div>

            <div>
              <span className="card-label">
                FIND US
              </span>

              <h3>
                Level 2, 120 Example St.
              </h3>

              <p>
                Melbourne · Wheelchair accessible
              </p>
            </div>

            <span className="card-arrow">↗</span>

          </div>

        </div>

      </div>


      {/* Bottom trust line */}
      <div className="cta-bottom">

        <span>PERSONAL</span>
        <i></i>
        <span>RELIABLE</span>
        <i></i>
        <span>HUMAN</span>

      </div>

    </section>
  );
};

export default ContactCTA;