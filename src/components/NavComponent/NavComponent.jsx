import React from "react";
import './NavComponent.scss'
import home from '../../assets/images/inicio@3x.png';
import search from '../../assets/images/buscar@3x.png';
import chat from '../../assets/images/mensaje@3x.png';
import user from '../../assets/images/usuario@3x.png'
import {Link} from "react-router-dom";

export function NavComponent() {

  

    return(
        <div className="c-nav">
           <Link to="#"><img src={home} alt="/" className="c-nav__home"/></Link>
          <Link to="#"><img src={search} alt="/" className="c-nav__search"/></Link>
            <img src={chat} alt="/" className="c-nav__chat"/>
          <Link to="#"><img src={user} alt="/" className="c-nav__user"/></Link>
        </div>
    )
}