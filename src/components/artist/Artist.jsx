import "./artist.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Track from "../track/Track";

const Artist = () => {
  const { artistName } = useParams();

  const [artist, setArtist] = useState();
  const [albumList, setAlbumList] = useState();
  const [albumSelected, setAlbumSelected] = useState();

  useEffect(() => {
    axios
      .get(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`
      )
      .then((res) => res.data.artists[0])
      .then((data) => setArtist(data));
  }, [setArtist]);

  useEffect(() => {
    artist &&
      axios
        .get(
          `https://theaudiodb.com/api/v1/json/1/album.php?i=${artist.idArtist}`
        )
        .then((res) => res.data)
        .then((data) => setAlbumList(data.album));
  }, [artist, setAlbumList]);

  return (
    <div className="background">
      {artist && 
        <div>
          <div className="artistInfos">
            {artistName}
            <div className="police">
              <div>{artist.strArtist}</div>
              <div>{artist.idArtist}</div>
              <div>{artist.intBornYear}</div>
              <div>{artist.strCountry}</div>
              <div>{artist.strFacebook}</div>
              <div>{artist.strTwitter}</div>
              <div>{artist.strBiographyEN}</div>
              <div>{artist.strWebsite}</div>
              <div>{artist.strGenre}</div>
              <div>
                <img src={artist.strArtistThumb} alt={artist.strArtist} />
              </div>
            </div>
          </div>
          <div className="albums">
            {albumList &&
              albumList.map((album, index) => (
                <div
                  key={index}
                  onClick={() => setAlbumSelected(album.idAlbum)}
                >
                  {album.strAlbum}
                </div>
              ))}
          </div>
        </div>
      }
      {albumSelected && <Track albumSelected={albumSelected} />}
    </div>
  );
};

export default Artist;
