import React from "react";
import "./header.css";
// import logoNav from "../../assets/logo-llm.png";
import logo from '../../assets/logo-llm2.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logoNavbar" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
