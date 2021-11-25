import React from "react";
import { Link } from "react-router-dom";
import './artistCard.css';

const ArtistCard = ({name, setChosenTag}) => {

    // link ver "/genre/:tag />

    return (
        <Link to={`/genre/${name}`}>
            <div className="artist-card" onClick={() => {setChosenTag(name)}}>
                <h4>{name}</h4>
            </div>
        </Link>

    )
};

export default ArtistCard;