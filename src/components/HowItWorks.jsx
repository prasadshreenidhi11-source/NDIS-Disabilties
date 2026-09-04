import React from "react";
import "./HowItWorks.css";

const STEPS = [
  {
    number: "1",
    title: "Step 1: A free 30-minute chat",
    description:
      "Phone, video or a cuppa at your place. We listen first and only talk about services if you want us to.",
  },
  {
    number: "2",
    title: "Step 2: Meet your shortlist",
    description:
      "Within a week you meet two or three workers matched on skills, personality and location. You choose.",
  },
  {
    number: "3",
    title: "Step 3: Support starts, and stays flexible",
    description:
      "Rosters, goals and budgets live in one place you can see. Change anything with a text to your coordinator.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">

      <div className="how-header">
        <h2>
          From first call to first shift in
          <br />
          about a week
        </h2>

        <p>
          Three steps. No forms until you have
          decided we are the right fit.
        </p>
      </div>


      <div className="steps-container">

        {STEPS.map((step) => (
          <div
            className="step-card"
            key={step.number}
          >

            <div className="step-card-inner">

              {/* FRONT */}
              <div className="step-front">

                <span className="step-number">
                  {step.number}
                </span>

              </div>


              {/* BACK */}
              <div className="step-back">

                <span className="step-number-small">
                  {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}