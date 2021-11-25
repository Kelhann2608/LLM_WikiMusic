import React from "react";
import { Link } from "react-router-dom";
import './tagCard.css';

const TagCard = ({name, setChosenTag}) => {

    // link ver "/genre/:tag />

    return (
        <Link to={`/genre/${name}`}>
            <div className="card" onClick={() => {setChosenTag(name)}}>
                <h4>{name}</h4>
            </div>
        </Link>

    )
};

export default TagCard;