import "./artist.css";
import {useState, useEffect} from "react";
import axios from "axios"
import ArtistList from "../artistList/ArtistList";
import { useParams } from 'react-router-dom';


const Artist = () => {
    const {artistName} = useParams();

    const [artist, setArtist] = useState();
    console.log(artist);

      useEffect(() => {
    axios
      .get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`)      
      .then((res) => (res.data.artists[0]))
      .then((data) => setArtist(data))
      .then(axios.get(`https://theaudiodb.com/api/v1/json/1/album.php?i=${artist.idArtist}`)
      .then((res)=> console.log(res.data)))
  },[]);



    return( 
        <div className='background'>
        {artist && 
        <div>
            <div>{artistName}
                <div className='police'> 
                    <div>{artist.strArtist}</div>
                    <div>{artist.idArtist}</div>
                    <div>{artist.intBornYear}</div>
                    <div>{artist.strCountry}</div>
                    <div>{artist.strFacebook}</div>
                    <div>{artist.strTwitter}</div>
                    <div>{artist.strBiographyEN}</div>
                    <div>{artist.strWebsite}</div>
                    <div>{artist.strGenre}</div>
                    <div><img src={artist.strArtistThumb} alt={artist.strArtist} /></div>
             </div>   
                </div>




            
        </div>}
        </div>
    )

  
};

export default Artist;
