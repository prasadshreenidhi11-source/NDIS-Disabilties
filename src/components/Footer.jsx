import React, { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    alert("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer className="premium-footer">

      {/* Mouse glow */}
      <div className="footer-mouse-glow"></div>

      {/* Decorative particles */}
      <div className="footer-particle particle-1"></div>
      <div className="footer-particle particle-2"></div>
      <div className="footer-particle particle-3"></div>
      <div className="footer-particle particle-4"></div>


      <div className="footer-container">

        {/* =========================
            TOP CONTENT
        ========================== */}

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo">

              <div className="footer-logo-ring">
                <span></span>
              </div>

              <strong>
                Brightside Support
              </strong>

            </div>


            <h3>
              Support that fits around
              <br />
              your life, not the other way round.
            </h3>


            <p>
              We’re a Melbourne NDIS provider
              delivering support that’s personal,
              reliable and built around you.
            </p>


            {/* SOCIALS */}

            <div className="footer-socials">

              <a href="#contact" aria-label="Facebook">
                f
              </a>

              <a href="#contact" aria-label="Instagram">
                ◎
              </a>

              <a href="#contact" aria-label="LinkedIn">
                in
              </a>

              <a href="#contact" aria-label="Email">
                ✉
              </a>

            </div>

          </div>


          {/* EXPLORE */}

          <div className="footer-column">

            <div className="footer-column-icon">
              ⠿
            </div>

            <h4>
              Explore
            </h4>

            <a href="#services">
              Services
            </a>

            <a href="#how-it-works">
              How it works
            </a>

            <a href="#stories">
              Stories
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          {/* SUPPORT */}

          <div className="footer-column">

            <div className="footer-column-icon gold">
              ♡
            </div>

            <h4>
              Support
            </h4>

            <a href="#services">
              NDIS Support
            </a>

            <a href="#services">
              Plan management
            </a>

            <a href="#contact">
              Referrals
            </a>

            <a href="#contact">
              FAQs
            </a>

          </div>


          {/* COMPANY */}

          <div className="footer-column">

            <div className="footer-column-icon">
              ♙
            </div>

            <h4>
              Company
            </h4>

            <a href="#about">
              About us
            </a>

            <a href="#contact">
              Our team
            </a>

            <a href="#contact">
              Careers
            </a>

            <a href="#contact">
              Privacy
            </a>

          </div>


          {/* NEWSLETTER */}

          <div className="footer-newsletter">

            <div className="newsletter-icon">
              ✉
            </div>

            <h3>
              Stay in the loop
            </h3>

            <p>
              Tips, stories and updates
              <br />
              that actually help.
            </p>


            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
            >

              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

              <button type="submit">
                →
              </button>

            </form>


            <label className="newsletter-check">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to receive emails from
                Brightside Support.
              </span>

            </label>

          </div>

        </div>


        {/* =========================
            ANIMATED WAVE
        ========================== */}

        <div className="footer-wave">

          <svg
            viewBox="0 0 1200 180"
            preserveAspectRatio="none"
          >

            <path
              d="
                M0,100
                C150,20 250,160
                400,80
                C550,0 650,150
                800,70
                C950,0 1050,150
                1200,60
              "
            />

            <path
              className="wave-second"
              d="
                M0,120
                C150,40 250,180
                400,100
                C550,20 650,170
                800,90
                C950,20 1050,170
                1200,80
              "
            />

          </svg>

        </div>


        {/* =========================
            ACKNOWLEDGEMENT
        ========================== */}

        <div className="footer-info">

          <div className="acknowledgement">

            <div className="info-icon">
              ♧
            </div>

            <p>
              Brightside Support acknowledges
              the Traditional Owners of the lands
              on which we work and pays respect
              to Elders past and present.
            </p>

          </div>


          <div className="ndis-info">

            <div className="ndis-circle">
              ✦
            </div>

            <div>
              <strong>
                Proudly a registered
              </strong>

              <span>
                NDIS provider
              </span>
            </div>

          </div>


          <div className="copyright">

            <p>
              © 2026 Brightside Support Pty Ltd.
            </p>

            <p>
              All rights reserved.
            </p>

          </div>


          <button
            className="back-top"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            ↑
          </button>

        </div>


        {/* =========================
            TRUST STRIP
        ========================== */}

        <div className="trust-strip">

          <div className="trust-item">

            <span>
              ◇
            </span>

            <div>
              <strong>
                Trusted NDIS provider
              </strong>

              <small>
                Quality. Safety. You.
              </small>
            </div>

          </div>


          <div className="trust-item">

            <span className="gold-text">
              ♧
            </span>

            <div>
              <strong>
                Local and reliable
              </strong>

              <small>
                Support that shows up.
              </small>
            </div>

          </div>


          <div className="trust-item">

            <span>
              ◌
            </span>

            <div>
              <strong>
                Real people, real care
              </strong>

              <small>
                We listen. We get it.
              </small>
            </div>

          </div>


          <div className="trust-item">

            <span className="gold-text">
              ♡
            </span>

            <div>
              <strong>
                You’re in control
              </strong>

              <small>
                Your choice, your way.
              </small>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}