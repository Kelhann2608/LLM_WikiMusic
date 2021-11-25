import "./artist.css";
import React, { useState, useEffect } from "react";
import TrackCard from "../cards/TrackCard";
import axios from "axios";

const Artist = () => {
  const artistName = "Coldplay";
  const [trackList, setTrackList] = useState();
  console.log(trackList);

  useEffect(() => {
    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=edabdc8efa6ff44658d08a93a343cf21&format=json`
      )
      .then((res) => setTrackList(res.data.toptracks.track));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=edabdc8efa6ff44658d08a93a343cf21&format=json"
  //     )
  //     .then((res) => console.log(res))
  //     .then((data) => console.log(data));
  // });
  return (
    <div>
      <ul>
        {trackList && trackList.map((track) => <TrackCard name={track.name} />)}
      </ul>
    </div>
  );
};

export default Artist;
