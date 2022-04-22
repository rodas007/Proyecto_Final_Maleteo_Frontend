import React from "react";
import "./LoginComponent.scss";

export default function LoginComponent() {
  return (
    <div className="c-login">
      <form className="c-login__form">
        <label className="c-login__label" htmlFor="email">
          <span className="b-subtitle">Direccion de correo electronico</span>

          <input className="c-login__input" name="email" id="email" />
        </label>
        <label className="c-login__label" htmlFor="password">
          <span className="b-subtitle">Contraseña</span>

          <input
            className="c-login__input"
            name="password"
            id="password"
            type="password"
          />
        </label>
        <div className="c-login__btn">
          <button className="b-btn">Inicia sesión</button>
        </div>
      </form>
    </div>
  );
}
