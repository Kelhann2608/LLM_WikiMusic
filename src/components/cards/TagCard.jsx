import React from "react";
import { Link } from "react-router-dom";
import "./tagCard.css";

const TagCard = ({ name }) => {
  return (
    <Link to={`/genre/${name}`}>
      <div className="card">
        <h4>{name}</h4>
      </div>
    </Link>
  );
};

export default TagCard;
