import "./artist.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Track from "../track/Track";
import Event from "../event/Event";
import logoTwitter from "../../assets/twitter.png";
import logoFacebook from "../../assets/logo-facebook.png";
import logoWebsite from "../../assets/logo-website.png";

const Artist = () => {
  const { artistName } = useParams();
  const [artist, setArtist] = useState();
  const [albumList, setAlbumList] = useState();
  const [albumSelected, setAlbumSelected] = useState();
  const [isHidden, setIsHidden] = useState(true);
  const bioParagraph = artist ? artist.strBiographyEN.split("\n\n") : [];
  const [firstNext, setFirstNext] = useState(0);
  const [secondNext, setSecondNext] = useState(10);

  useEffect(() => {
    axios
      .get(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`
      )
      .then((res) => res.data.artists[0])
      .then((data) => setArtist(data));
  }, [artistName, setArtist]);

  useEffect(() => {
    artist &&
      axios
        .get(
          `https://theaudiodb.com/api/v1/json/1/album.php?i=${artist.idArtist}`
        )
        .then((res) => res.data)
        .then((data) => setAlbumList(data.album));
  }, [artist, setAlbumList]);

  // console.log(artist.strFacebook)

  const handlePrevClick = () => {
    if (firstNext > 0)
    {
          setFirstNext(firstNext - 10);
    setSecondNext(secondNext - 10);
    }
  }

  const handleNextClick = () => {
    console.log(albumList.length)
    if (secondNext < albumList.length - 5) {
      setFirstNext(firstNext + 10);
      setSecondNext(secondNext + 10);
    }
  }

  return (
    <div className="artist-container">
      {artist && (
        <div className={isHidden ? "artist-details" : "artist-details-is-hidden"}>
          <div className="artistInfos">
            <div className="artistInfos-all">
              <img
                className="picture-img"
                src={artist.strArtistThumb}
                alt={artist.strArtist}
              />
              <div className="artistInfos-infos">
                <h1 className="name-artist">{artist.strArtist}</h1>
                <div>Year of birth: {artist.intBornYear}</div>
                <div>Country of birth: {artist.strCountry}</div>
                <div>Musical genre: {artist.strGenre}</div>
                <div className="artistInfos-social">
                  {artist.strFacebook !== "" ? (
                    <div>
                      {" "}
                      <a
                        href={
                          artist.strFacebook.includes("https://")
                            ? artist.strFacebook
                            : "https://" + artist.strFacebook
                        }
                        target="_blank"
                      >
                        {" "}
                        <img src={logoFacebook} alt="logo facebook" />
                      </a>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  {artist.strTwitter !== "" ? (
                    <div>
                      <a
                        href={
                          artist.strTwitter.includes("https://")
                            ? artist.strTwitter
                            : "https://" + artist.strTwitter
                        }
                      >
                        {" "}
                        <img src={logoTwitter} alt="logo twitter" />
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {artist.strWebsite !== "" ? (
                    <div>
                      {" "}
                      <a
                        href={
                          artist.strWebsite.includes("https://")
                            ? artist.strWebsite
                            : "https://" + artist.strWebsite
                        }
                      >
                        {" "}
                        <img src={logoWebsite} alt="logo website" />
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="paragraph">
                {bioParagraph &&
                  bioParagraph.slice(0, 3).map((p, index) => (
                    <p className="bioParagraph" key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h2 className="sectionTitle">Discography</h2>
          <div className="albums">
            {albumList &&
              albumList
                .filter((album) => album.strAlbumThumb)
                .slice(firstNext, secondNext)
                .map((album, index) => (
                  <div
                    className="albumContainer"
                    key={index}
                    onClick={() => {
                      setAlbumSelected(album.idAlbum);
                      setIsHidden(false);
                    }}
                  >
                    <h3 className="albumTitle">{album.strAlbum}</h3>
                    <div
                      className="albumBg"
                      style={{ backgroundImage: `url(${album.strAlbumThumb})` }}
                    ></div>
                  </div>
                ))}




                {albumList &&
                 (<button
                    type="button"
                    className="next left"
                    onClick={() => {
                      handlePrevClick()
                    }}
                  >
                    Previous 10
                  </button>
                 
                )}

                 
              {albumList &&  
                  <button
                    type="button"
                    className="next right"
                    onClick={() => {
                      handleNextClick() 
                    }} 
                  >
                    Next 10
                  </button>
                }

        


          </div>
          <Event />
        </div>
      )}
      <div className={isHidden ? "tracks-details" : "tracks-details-is-hidden"}>
        {albumSelected && (
          <Track albumSelected={albumSelected} artistName={artistName} />
        )}
      </div>
    </div>
  );
};

export default Artist;
