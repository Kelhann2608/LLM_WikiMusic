import './track.css';
import {useEffect} from 'react';
import axios from 'axios';
import TrackCard from '../cards/TrackCard';

const Track = ({albumSelected}) => {
    
    useEffect(() => {
        albumSelected && axios
            .get(`theaudiodb.com/api/v1/json/{APIKEY}/track.php?m=${albumSelected}`)
            .then((res) => console.log(res.data))
    }, [albumSelected]);

    return (
        <div>
            <h1>Tracks list below</h1>
            <TrackCard />
        </div>
    )
}

export default Track;