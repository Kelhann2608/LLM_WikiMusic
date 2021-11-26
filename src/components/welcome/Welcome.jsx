import './welcome.css';
import logoBig from '../../assets/logo-llm.png';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationMusicNotes from './music_notes.json';


const Welcome = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationMusicNotes,
      };
    return (
        <div className="welcome-div">
            <img className="logo-big" src={logoBig} alt="" />
            <Link className="links" to="/genres">
                <div className="home-button">
                    Discover our encyclopedia
                </div>
            </Link>
            <div  class="music-notes">
            <Lottie width="30vw" options={defaultOptions}/>
            </div>
        </div>
    )
}

export default Welcome;
