import React, { useState } from "react";
import "./InputComponent.scss";
import lupa from "../../assets/images/lupa@3x.jpg";

export function InputComponent() {
  return (
    <div>
      <div className="container">
        <img className="img3" src={lupa} alt="/" />
        <input className="where" placeholder="¿Dónde te encuentras? Madrid,Barcelona..." />

        <div className="suggestion-box">
          <div className="suggestion-box"></div>
        
        </div>
      </div>
    </div>
  );
}
