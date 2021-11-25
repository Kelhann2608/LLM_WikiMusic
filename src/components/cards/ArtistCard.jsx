import React from "react";
import { Link } from "react-router-dom";
import './artistCard.css';

import { useEffect, useState } from 'react';
import axios from "axios";

const ArtistCard = ({name, img, tag}) => {
   const [picture, setPicture] = useState()
   const [artistID, setArtistID] = useState()
   console.log(name, 'NAMEEEE')
    const apiKey = "api_key=edabdc8efa6ff44658d08a93a343cf21"
    //setPicture(res.data.artist.image[1]['#text'])
    useEffect(() => {
        
       name && axios    
        .get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${name}`)
        .then((res) => {
            setPicture(res.data.artists[0].strArtistBanner)
            setArtistID(res.data.artists[0].idArtist)

        } )
        .catch((err)=> console.log(err))
    },[]);
console.log(img)
    // link ver "/genre/:tag />
   
    return (
        <Link to={`/genre/${tag}/artist/${artistID}`}>
            <div className="artist-card">
                <img src={picture}/>
                <h4>{name}</h4>
            </div>
        </Link>

    )
};

export default ArtistCard;
