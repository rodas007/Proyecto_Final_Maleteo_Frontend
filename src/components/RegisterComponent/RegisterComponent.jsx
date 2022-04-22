import React from "react";
import { useForm } from "react-hook-form";
import "./RegisterComponent.scss";

export function RegisterComponent() {
 

  return (
    <div className="c-register">
      <form  className="c-register__form">
        <label className="c-register__label" htmlFor="email">
          <span className="b-subtitle">Direccion de correo electronico</span>

          <input
            className="c-register__input"
            name="email"
            id="email"
            
          />
          
        </label>
        <label className="c-register__label" htmlFor="name">
          <span className="b-subtitle">Nombre</span>

          <input
            className="c-register__input"
            name="name"
            id="name"
           
          />
          
        </label>
        <label className="c-register__label" htmlFor="LastName">
          <span className="b-subtitle">Apellido</span>

          <input
            className="c-register__input"
            name="surname"
            id="lastName"
            
          />
          
        </label>
        <label className="c-register__label" htmlFor="password">
          <span className="b-subtitle">Contraseña</span>

          <input
            className="c-register__input"
            name="password"
            id="password"
            type="password"
            
          />
          
        </label>
        <label className="c-register__label" htmlFor="date">
          <span className="b-subtitle">Fecha de nacimiento</span>

          <input
            className="c-register__input"
            name="date"
            id="date"
            type="date"
           
          />
          
        </label>
        <button className="b-btn c-register__btn">Resgistrarse</button>
      </form>
    </div>
  );
}
