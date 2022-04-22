import React from 'react'
import './ReserveCompletePage.scss';
import fenix from '../../assets/images/fenix@3x.png';



export default function ReserveCompletePage() {


  // Funcion necesaria para hacer uso de queryParams


  
  return (
    <div className=" p-4 complete">
      <p className="b-title">Reserva Completada</p>
      <img src={fenix} alt="fenix" className="complete__fenix"/>
      <p>Codigo de reserva: </p>
      <h3>BE FREE!</h3>
      <p>Contacta ya con tu guardian y espera a que acepte tu reserva</p>
      <p>Guardian email: </p>
    </div>
  );
}