import React from "react";

import "./eventCard.css";

const EventCard = ({ town,datetime }) => {
  return (
      <div className="card">
        <h4>{town}</h4>
        <h5>{datetime}</h5>
      </div>
  );
};

export default EventCard;