import React from "react";
import "./artistList.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ArtistCard from "../cards/ArtistCard";
import vinyl from "../../assets/vinyl.png";
import loupeSearch from "../../assets/search.png";

const ArtistList = () => {
  const apiKey = "api_key=edabdc8efa6ff44658d08a93a343cf21";
  const [topArtist, setTopArtist] = useState();
  const { tag } = useParams();
  const [loading, setLoading] = useState(true);
  const [searchArtist, setSearchArtist] = useState("");

  useEffect(() => {
    setTimeout(
      () =>
        axios
          .get(
            `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${tag}&${apiKey}&format=json`
          )
          .then((res) => {
            setTopArtist(res.data.topartists.artist);
            setLoading(false);
          })
          .catch((err) => console.log(err)),
      500
    );
  }, [tag, setTopArtist]);

  return (
    <div className="artistListContainer">
      <div className="inputSearch">
        {" "}
        <label>
          <img alt="" src={loupeSearch} width="18px" />
        </label>
        <input
          className="searchInput"
          type="text"
          placeholder="rechercher un artiste"
          value={searchArtist}
          onChange={(e) => setSearchArtist(e.target.value.toLowerCase())}
        />
      </div>
      {loading ? (
        <div className="vinylContainer">
          <img className="vinyl" alt="" src={vinyl} height="300" width="300" />
        </div>
      ) : null}
      {topArtist &&
        topArtist
          .filter((artist) => artist.name.toLowerCase().includes(searchArtist))
          .map((el, idx) => <ArtistCard key={idx} name={el.name} tag={tag} />)}
    </div>
  );
};

export default ArtistList;
