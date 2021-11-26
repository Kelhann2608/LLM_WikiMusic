import {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import Lottie from "react-lottie";
import animationAudioPlaying from "./animationAudioPlaying.json";
import './track.css';

const Track = ({albumSelected, artistName}) => {
    const [tracksList, setTracksList] = useState();
    const [videoList, setVideoList] = useState();
    const [videoUrl, setVideoUrl] = useState();
    const [videoPlaying, setVideoPlaying] = useState();
    const [selectedTrack, setSelectedTrack] = useState();
    const [audioPlay, setAudioPlay] = useState(false);
    const [audio, setAudio] = useState();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationAudioPlaying,
      };
    

  useEffect(() => {
    selectedTrack &&
      axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:'${artistName}'%20track:'${selectedTrack}'`        )
        .then((res) => {
          setAudio(res.data.data[0].preview);
        })
        .catch((err) => console.log(err));
  }, [selectedTrack, artistName]);

        
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

    return (
        <div className="tracks-div">
           <div className="video-div">
               <div className={audioPlay ? "audio-play" : "title-video-playing"}>
               {videoUrl && !audioPlay ? (<ReactPlayer
                        className="track-video"
                        url={videoUrl && videoUrl/*  : "https://youtu.be/nh7J0GdmM1M" */}
                        volume={1}
                        playing
                        loop
                        width="25vw"
                        height="28vh"
                    />) 
                    : audioPlay && audio ? (<><Lottie options={defaultOptions} width="14vw" height="14vw" />
                    <ReactPlayer
                        className="track-video"
                        url={videoUrl && videoUrl/*  : "https://youtu.be/nh7J0GdmM1M" */}
                        volume={1}
                        playing
                        loop
                        width="25vw"
                        height="28vh"
                    /></>)
                    : (<h1 className="video-clip-title">Video Clips</h1>)
                    }
                <h3>{videoPlaying && !audioPlay && videoPlaying}</h3>
                </div>
                <div className="video-list-div">
                    <ul className="video-list">
                        {videoList && videoList.map((video, index) => <li key={index} onClick={() => {setVideoUrl(video.strMusicVid); setVideoPlaying(video.strTrack); setAudioPlay(false)}}>{video.strTrack}</li>)}
                    </ul>
                </div>
            
            </div>
            <div className="album-details">
                <h1>{tracksList && tracksList[0].strAlbum}</h1>
                <ul className="tracks-list">
                {tracksList && tracksList.map((track, index) =>
                    <li
                        className='tracks'
                        key={index}
                        id={track.idTrack}
                        onClick={() =>
                            {setSelectedTrack(
                              track.strTrack.toLowerCase().split(" ").join("%20")
                            ); setTimeout(()=> audio && setVideoUrl(audio), 500); setAudioPlay(true);}}
                    >
                        {track.strTrack}
                    </li>)}
                </ul>
            </div>
        {/*     {audio && (
        <ReactPlayer
          url={audio}
          volume={1}
          playing
          loop
          width="25vw"
          height="25vh"
        />
      )} */}
        </div>
    )
}

export default Track;