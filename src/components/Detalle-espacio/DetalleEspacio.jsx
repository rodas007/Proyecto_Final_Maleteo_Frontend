import React, { useState } from "react"; 
import { Dropdown } from 'primereact/dropdown';
import "./DetalleEspacio.scss";




const DetalleEspacio = () =>{
  
  const [propiedad, setPropiedad]= useState([]);
  const [habitaculo, setHabitaculo]= useState([]);


  const propiedadSelectItems = [
    {label: 'Casa', value: 'Casa'},
    {label: 'Hotel', value: 'Hotel'},
    {label: 'Establecimiento', value: 'Establecimiento'},];
    
    const habitaculoSelectItems = [
        {label: 'Habitación', value: 'Habitación'},
        {label: 'Trastero', value: 'Trastero'},
        {label: 'Buhardilla', value: 'Buhardilla'},
        {label: 'Garaje', value: 'Garaje'}, ];
    



    return(
        <div className="contenedor-espacio">
        <h1>Descríbenos tu espacio</h1>
        <h5>Especifica tu propiedad</h5>
        
    <Dropdown className="p-dropdown" value={propiedad} options={propiedadSelectItems} onChange={(e) => setPropiedad(e.value)} placeholder="Selecciona una opción"/>
    
    <h5>Especifica tu propiedad</h5>
    <Dropdown value={habitaculo} options={habitaculoSelectItems} onChange={(e) => setHabitaculo(e.value)} placeholder="Selecciona una opción"/>
    

      </div>
    )
    
    }
export default DetalleEspacio;