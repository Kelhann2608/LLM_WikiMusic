import React from "react";
import { Link } from "react-router-dom";
import "./artistCard.css";

import { useEffect, useState } from "react";
import axios from "axios";

const ArtistCard = ({ name, tag }) => {
  const [picture, setPicture] = useState();

  useEffect(() => {
    name &&
      axios
        .get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${name}`)
        .then((res) => {
          setPicture(res.data.artists[0].strArtistBanner);
        })
        .catch((err) => console.log(err));
  }, [name]);
  if (picture) {
    return (
      <Link to={`/genre/${tag}/artist/${name}`}>
        <div className="artist-card">
          <img src={picture} alt="" />
          <h4>{name}</h4>
        </div>
      </Link>
    );
  }

  else return null
  
};

export default ArtistCard;
