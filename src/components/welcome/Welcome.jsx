import './welcome.css';
import logoBig from '../../assets/logo-llm.png';
import { HashLink } from 'react-router-hash-link';
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
            <HashLink className="links" to="/genres">
                <div className="home-button">
                    Discover our encyclopedia
                </div>
            </HashLink>
            <div className="music-notes">
            <Lottie width="30vw" options={defaultOptions}/>
            </div>
        </div>
    )
}

export default Welcome;
