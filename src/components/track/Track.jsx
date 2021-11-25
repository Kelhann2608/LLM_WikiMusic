import {useEffect, useState} from 'react';
import axios from 'axios';
import './track.css';

const Track = ({albumSelected}) => {
    const [tracksList, setTracksList] = useState();
    useEffect(() => {
        albumSelected && axios
            .get(`https://theaudiodb.com/api/v1/json/1/track.php?m=${albumSelected}`)
            .then((res) => (res.data))
            .then((data) => setTracksList(data.track))
    }, [albumSelected, setTracksList]);

    return (
        <div className="tracks-div">
            <h1>{tracksList && tracksList[0].strAlbum}</h1>
            <ul className="tracks-list">
            {tracksList && tracksList.map((track, index) => <li className='tracks' key={index}>{track.strTrack}</li>)}
            </ul>
        </div>
    )
}

export default Track;