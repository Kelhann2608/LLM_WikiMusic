import {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './track.css';

const Track = ({albumSelected}) => {
    const [tracksList, setTracksList] = useState();
    const [videoList, setVideoList] = useState();
    const [videoUrl, setVideoUrl] = useState();
        
    useEffect(() => {
        albumSelected && axios
            .get(`https://theaudiodb.com/api/v1/json/1/track.php?m=${albumSelected}`)
            .then((res) => (res.data))
            .then((data) => setTracksList(data.track))
    }, [albumSelected, setTracksList]);
    tracksList && console.log(tracksList);

    useEffect(() => {
        tracksList && axios
            .get(`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${tracksList[0].idArtist}`)
            .then((res) => res.data)
            .then((data) => setVideoList(data.mvids))
    }, [tracksList, setVideoList]);
    videoList && console.log(videoList[0].idTrack)
    videoUrl && console.log(videoUrl);

    return (
        <div className="tracks-div">
            {videoList &&
            <ReactPlayer
                className="home-video"
                url="http://www.youtube.com/watch?v=JDe86ul6RmI"
                volume={1}
                playing
                loop
                width="25vw"
                height="25vh"
            />}
            <h1>{tracksList && tracksList[0].strAlbum}</h1>
            <ul className="tracks-list">
            {tracksList && tracksList.map((track, index) =>
                <li
                    className='tracks'
                    key={index}
                    id={track.idTrack}
                    onClick={() => videoList && setVideoUrl(videoList.filter((video) => video.idTrack === track.idTrack)[0].strMusicVid)}
                >
                     {track.strTrack}
                </li>)}
            </ul>
        </div>
    )
}

export default Track;