import React from "react";
import "./TusAnuncios.scss"
const TusAnuncios = () =>{

return(<>
    <div className="cabecera">
    <h1>Tus anuncios</h1>
    <h4>El hall de Marta</h4>
    <p>Anuncio completado al 100%</p>
    

    <div className="Fotoprincipal">
        <img className="primeraFoto" src="https://www.elmueble.com/medio/2020/08/31/salon-con-estanterias-y-comedor-si-entra-algo-sale-algo-00480696-o-6b28e30f-901x828_77874e2d_600x600.jpg" alt="foto"></img>

    </div>
    <div className="añade-espacio">
        <button className="btn-espacio">Añade otro espacio</button>
    </div>
    
    </div></>
)
} 
export default TusAnuncios;