import React from "react";
import { Link } from "react-router-dom";
import "./artistCard.css";

const ArtistCard = ({ name, tag }) => {
  return (
    <Link to={`/genre/${tag}/artist/${name}`}>
      <div className="artist-card">
        <h4>{name}</h4>
      </div>
    </Link>
  );
};

export default ArtistCard;
