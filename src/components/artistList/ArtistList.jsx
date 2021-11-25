import React from "react";
import "./artistList.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ArtistCard from "../cards/ArtistCard";

const ArtistList = () => {
    const apiKey = "api_key=edabdc8efa6ff44658d08a93a343cf21"
    const [topArtist, setTopArtist] = useState();
    const { tag } = useParams();
    
    // 
    useEffect(() => {

        axios
        .get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${tag}&${apiKey}&format=json`)
        .then((res) => setTopArtist(res.data.topartists.artist) )
        .catch((err)=> console.log(err))
    },[tag, setTopArtist]);

    



    return (
        <div>
            {topArtist && topArtist.map((el, idx) => <ArtistCard key={idx} name={el.name} tag={tag}/>) }
        </div>
    )
};

export default ArtistList;
