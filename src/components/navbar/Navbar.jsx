import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import home from '../../assets/images/inicio@3x.png';
import search from '../../assets/images/buscar@3x.png';
import message from '../../assets/images/mensaje@3x.png';
import user from '../../assets/images/usuario@3x.png';



const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <Link to="/" className="nav_home">
          <img src={home} alt="Home" />
        </Link>
        <Link to="/" className="nav_search">
          <img src={search} alt="Search" />
        </Link>
        <Link to="/" className="nav_message">
          <img src={message} alt="Message" />
        </Link>
        <Link to="/" className="nav_user">
          <img src={user} alt="User" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;