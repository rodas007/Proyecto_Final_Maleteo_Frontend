import React from "react";
import fotoMarta from "../../assets/images/fotoMarta.png";
import {Link} from "react-router-dom";
import "./ConfiguracionUsuario.scss";

const ConfiguracionUsuario = () =>{
    return( 
    <div className="b-General">

        <Link className="linkto"to="./ficha">
        <div className="b-div1">    
            <div className="b-divuser">       
            <h1 className="b-nombre">Marta</h1>
            <p className="b-text">Puedes ver y editar tu perfil</p>
            </div>
            <div className="foto-usurario">
                <img className="fotoMarta" src={fotoMarta}></img>
            </div>

            <div className="b-subtitle">
            <h3>Conviértete en guardian</h3>
            <p className="b-text">Puedes ganar desde 400e de media al mes</p>
            <p className="b-line"></p>
        </div>

        </div> </Link>
        
        <div className="b-subtitle">
            <h3>Invita a tus amigos</h3>
            <p className="b-text">Y podrás ganar descuentos para ti</p>
            <p className="b-line"></p>
        </div> 
        <div className="b-subtitle">
            <h3>Créditos y descuentos</h3>
            <p className="b-line"></p>
        </div>
        <Link className="linkto"  to="./tusAnuncios">
        <div className="b-subtitle">
            <h3>Publica tu anuncio o experiencia</h3>
            <p className="b-line"></p>
        </div></Link>
        <div className="b-subtitle">
            <h3>Configuración</h3>
            <p className="b-line"></p>
        </div>
        <div className="b-subtitle">
            <h3>Ayuda</h3>
            <p className="b-line"></p>
        </div>





    </div>
    )
}

export default ConfiguracionUsuario;