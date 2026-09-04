import React from "react";
import "./Stories.css";

const STORIES = [
  {
    quote:
      "I have had four providers. Brightside is the first one where I chose my worker instead of being handed one.",
    name: "Priya",
    role: "Participant, Footscray",
  },
  {
    quote:
      "Mum finally sleeps through the night. Knowing who is coming, and that they will come, changed everything.",
    name: "Daniel",
    role: "Carer, Preston",
  },
  {
    quote:
      "My coordinator answers texts. That sounds small. After three years of voicemail it is not small.",
    name: "Jordan",
    role: "Participant, Dandenong",
  },
];

export default function Stories() {
  return (
    <section className="stories-section">

      {/* HEADER */}

      <div className="stories-header">
        <span>REAL STORIES</span>

        <h2>
          What people
          <br />
          say about us.
        </h2>
      </div>


      {/* MAIN VISUAL */}

      <div className="stories-stage">

        {/* BACKGROUND IMAGE */}

        <div className="stories-image">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=85"
            alt="People supporting each other"
          />

          <div className="stories-image-overlay"></div>
        </div>


        {/* REVIEW CARDS */}

        <div className="stories-reviews">

          {STORIES.map((story, index) => (
            <div
              className="story-card"
              key={story.name}
              style={{
                "--delay": `${index * 4}s`,
              }}
            >

              <div className="quote-mark">
                “
              </div>

              <p className="story-quote">
                {story.quote}
              </p>

              <div className="story-person">

                <div className="story-line"></div>

                <div>
                  <strong>
                    {story.name}
                  </strong>

                  <span>
                    {story.role}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>


        {/* DECORATIVE ORB */}

        <div className="stories-orb"></div>

      </div>


      {/* BOTTOM INDICATOR */}

      <div className="stories-footer">

        <span>01</span>

        <div className="stories-progress">
          <div></div>
        </div>

        <span>03</span>

        <p>
          Real people. Real experiences.
        </p>

      </div>

    </section>
  );
}