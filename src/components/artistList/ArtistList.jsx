import React from "react";
import "./artistList.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ArtistCard from "../cards/ArtistCard";

const ArtistList = () => {
  const apiKey = "api_key=edabdc8efa6ff44658d08a93a343cf21";
  const [topArtist, setTopArtist] = useState();
  const { tag } = useParams();
  console.log(tag);
  useEffect(() => {
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${tag}&${apiKey}&format=json`
      )
      .then((res) => setTopArtist(res.data.topartists.artist))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {topArtist &&
        topArtist.map((el, idx) => (
          <ArtistCard
            key={idx}
            tag={tag}
            name={el.name}
            img={el.image[1]["#text"]}
          />
        ))}
    </div>
  );
};

export default ArtistList;
