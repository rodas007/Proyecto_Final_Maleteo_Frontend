import React from "react";
import "./TusAnuncios.scss"
const TusAnuncios = () =>{

return(<div className="b-contenedor">
    <div className="b-cabecera">
    <h1 className="tusanuncios">Tus anuncios</h1>
    <h4 className="hall">El hall de Marta</h4>
    <p className="completo">Anuncio completado al 100%</p>
    </div>
    

    <div className="Fotoprincipal">
        <img className="primeraFoto" src="https://www.espaciosadaptados.com/images/rustic-dining-room-PH8RJ27.jpg" alt="foto"></img>

    </div>
    <div className="añade-espacio">
        <button className="btn-espacio">Añade otro espacio</button>
    </div>
    
    </div>
)
} 
export default TusAnuncios;