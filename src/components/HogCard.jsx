import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleCardClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div
      aria-label="hog card"
      className="ui card"
    >
      <div className="image">
        <img
          src={hog.image}
          alt={`Photo of ${hog.name}`}
          onClick={handleCardClick}
        />
      </div>

      <div
        className="content"
        onClick={handleCardClick}
      >
        <h3>{hog.name}</h3>

        {showDetails && (
          <div>
            <p>
              Specialty: {hog.specialty}
            </p>

            <p>{hog.weight}</p>

            <p>
              {hog.greased
                ? "Greased"
                : "Nongreased"}
            </p>

            <p>
              {hog["highest medal achieved"]}
            </p>
          </div>
        )}
      </div>

      <div className="extra content">
        <button
          onClick={() =>
            onHideHog(hog.name)
          }
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;