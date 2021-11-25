import React from "react";
import './header.css';
import logoNav from '../../assets/logo-llm.png';
// import logo from '../../assets/logo-llm2.png';



const Header = () => {

    return (
        <div className="header" >
            <img className="logoNavbar" src={logoNav} alt="" />
        
        </div>
    )
};

export default Header;