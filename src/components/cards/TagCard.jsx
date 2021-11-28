import React from "react";
import { HashLink } from 'react-router-hash-link';
import "./tagCard.css";

const TagCard = ({ name }) => {
  return (
    <HashLink className="links" to={`/genre/${name}`}>
      <div className="card">
        <h4>{name}</h4>
      </div>
    </HashLink>
  );
};

export default TagCard;
