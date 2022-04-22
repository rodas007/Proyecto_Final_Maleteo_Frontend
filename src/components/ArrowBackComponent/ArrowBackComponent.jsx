import React from "react";
import './ArrowBackComponent.scss'
import {Link} from "react-router-dom";

export  function ArrowBackComponent() {

 

    return(
        <div className="arrow-icon">
 <div className="arrow-icon__link"><i className="fas fa-chevron-left"></i></div>
        </div>
    );
}