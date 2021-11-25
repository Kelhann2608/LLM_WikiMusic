import React from "react";
import './artistList.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import ArtistCard from '../cards/ArtistCard';

const ArtistList = ({chosenTag, apiKey}) => {
    const [topArtist, setTopArtist] = useState();
    const { tag } = useParams();
    console.log(tag, 'taggg');
    // setTopArtist(res.data.topartists.artist)
    useEffect(() => {

        tag && axios
        .get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${tag}&${apiKey}&format=json`)
        .then((res) => console.log(res.data) )
        .catch((err)=> console.log(err))
    },[tag]);

    useEffect(() => {
    console.log(topArtist)
       
    },[topArtist]);

    return (
        <div>
            {topArtist && topArtist.map((el) => <ArtistCard name={el.name} />) }
        </div>
    )
};

export default ArtistList;