import './welcome.css';
import logoBig from '../../assets/logo-llm.png';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome-div">
            <img className="logo-big" src={logoBig} alt="" />
            <Link className="links" to="/genres">
                <div className="home-button">
                    Disover our encyclopedia
                </div>
            </Link>
        </div>
    )
}

export default Welcome;
