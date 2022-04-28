import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarGuardian.scss"
import user from '../../assets/images/usuario@3x.png';
import home from '../../assets/images/inicio@3x.png';
import calendar from '../../assets/images/calendarnav.svg';
import anuncio from '../../assets/images/anuncio.svg';


export const NavbarGuardian = () => {
  return (
      <nav>
      <ul>
          <Link to="/" className="navGuardian_home">
          <img src={home} alt="Home" />
          </Link>
          <Link to="/" className="navGuardian_anuncio">
          <img src={anuncio} alt="Anuncio" />
          </Link>
          <Link to="/" className="navGuardian_calendar">
          <img src={calendar} alt="Calendar" />
          </Link>
          <Link to="/" className="navGuardian_user">
          <img src={user} alt="User" />
          </Link>
      </ul>

      </nav>
    
  )
}
