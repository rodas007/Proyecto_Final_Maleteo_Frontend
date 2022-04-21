import React from "react";
//import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import './PricesPage.scss'
// import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
//import {useLocation} from "react-router-dom";

export function PricesPage() {

    

  

    return(
      <div>
        <div className="p-prices">
           {/*  <ArrowBackComponent navigation={navigation}/> */}
            <div className="p-prices__container">
            <p className="b-title">Selecciona</p>
            <select className="b-select">
                <option value="europa">Europa</option>
                <option value="america">America</option>
            </select>
                <p className="b-title">Nuestras tarifas fijas</p>

                <div className="p-prices__item">
                    <p>24 Horas</p>
                    <p className="p-prices__price">6€</p>
                    <p>Por equipaje</p>
                </div>

                <div className="p-prices__adicional">
                    <p>Día adicional</p>
                    <p className="p-prices__price">4€</p>
                    <p>Por equipaje</p>
                </div>
            </div>
        </div>
        {/* <NavComponent navigation={navigation}/> */}
      </div>
    )
}