import React from "react";
import "./header.css";
import logo from '../../assets/logo-llm(2).png';
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="header">
      <HashLink to="/">
        <img className="logoNavbar" src={logo} alt="logo" />
      </HashLink>
    </div>
  );
};

export default Header;
