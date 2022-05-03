import React, {  useState} from "react";
import fotoMarta from "../../assets/images/fotoMarta.png";
import { Link } from "react-router-dom";
import "./ConfiguracionUsuario.scss";
import { NavComponent } from "../../components/NavComponent/NavComponent";
import UsersComponenet from "../../components/UserComponent/UserComponent";
import AuthButton from "../../components/AuthButton/AuthButton";
import { NavbarGuardian } from "../../components/NavbarGuardian/NavbarGuardian";
import { API } from "../../services/api";

const ConfiguracionUsuario = () => {
  const [show, setShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const onGuardian = () => {
    API.patch(`users/${user._id}`, { role: "admin" }).then((res) => {
        console.log("Register user as Guardian");
    });
};



  return (
    <div>
      <div className="b-General">
        <div className="b-div1">
          <div className="b-divuser">
            <Link className="linkto" to="/detalleusuario">
              <h1 className="b-nombre">Hola, {user.name}</h1>
              <p className="b-text">Puedes ver y editar tu perfil</p>
            </Link>
          </div>
          <div className="foto-usurario">
            <img className="fotoMarta" src={fotoMarta}></img>
          </div>

          <div className="b-subtitle">
            <h3 onClick={() => {
          setShow(!show);onGuardian();
        }} >Conviértete en guardian {show ? '' : ''} </h3>
            <p className="b-text">Puedes ganar desde 400e de media al mes</p>
            <p className="b-line"></p>
          </div>
        </div>

        <div className="b-subtitle">
        <Link className="linkto" to="/invite">
          <h3>Invita a tus amigos</h3>
          </Link>
          <p className="b-text">Y podrás ganar descuentos para ti</p>
          <p className="b-line"></p>
        </div>
        <div className="b-subtitle">
        <Link className="linkto" to="/discounts">
          <h3>Créditos y descuentos</h3>
          </Link>
          <p className="b-line"></p>
        </div>
        {show ? (
        <Link className="linkto" to="/hacerseguardian">
        
          <div className="b-subtitle">
            <h3>Publica tu anuncio o experiencia</h3>
            <p className="b-line"></p>
          </div>
        </Link>
        ) : <></>}
        <div className="b-subtitle">
          <h3>Configuración</h3>
          <p className="b-line"></p>
        </div>
        <div className="b-subtitle">
        <Link className="linkto" to="/help">
          <h3>Ayuda</h3>
          </Link>
          <p className="b-line"></p>
        </div>
      </div>
      <AuthButton/>
      {user.role === "admin" ?  <NavbarGuardian/> : <NavComponent />}
    </div>
  );
};

export default ConfiguracionUsuario;
