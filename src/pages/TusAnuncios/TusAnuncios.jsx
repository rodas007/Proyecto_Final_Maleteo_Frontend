import React from 'react'
import './TusAnuncios.scss'
import iconoback from '../../assets/images/iconoback.png'
import iconomas from '../../assets/images/iconomas.png'
import { ArrowBackComponent } from '../../components/ArrowBackComponent/ArrowBackComponent';
import { Link } from "react-router-dom";

const TusAnuncios = () => {
  return (
    <div className="b-contenedor">
    <Link to="/home"><ArrowBackComponent/></Link>
      <div className="b-cabecera">
        <h1 className="tusanuncios">Tus anuncios</h1>
        <h4 className="hall">El hall de Marta</h4>
        <p className="completo">Anuncio completado al 100%</p>
      </div>

      <div className="Fotoprincipal">
        <img
          className="primeraFoto"
          src="https://www.espaciosadaptados.com/images/rustic-dining-room-PH8RJ27.jpg"
          alt="foto"
        ></img>
        <button className="btn-go">
          <img src={iconoback}></img>
        </button>
      </div>
      <div className="añade-espacio">
        <h5 className="b-espacio">Añade otro espacio</h5>

        <button className="btn-mas">
          <img src={iconomas}></img>
        </button>
      </div>
    </div>
  )
}
export default TusAnuncios
