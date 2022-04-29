import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import './DetalleEspacio.scss'
import iconoflecha from '../../assets/images/botonContinuar@2x.png';

const DetalleEspacio = () => {
  const [propiedad, setPropiedad] = useState([])
  const [habitaculo, setHabitaculo] = useState([])

  const propiedadSelectItems = [
    { label: 'Casa', value: 'Casa' },
    { label: 'Hotel', value: 'Hotel' },
    { label: 'Establecimiento', value: 'Establecimiento' },
  ]

  const habitaculoSelectItems = [
    { label: 'Habitación', value: 'Habitación' },
    { label: 'Trastero', value: 'Trastero' },
    { label: 'Buhardilla', value: 'Buhardilla' },
    { label: 'Hall', value: 'Hall' },
    { label: 'Garaje', value: 'Garaje' },
  ]

  return (
    <div className="contenedor-espacio">
      <h1 className="b-describe">Descríbenos tu espacio</h1>

      <h5 className="b-especifica">Especifíca tu propiedad</h5>

      <Dropdown
        className="p-dropdown"
        value={propiedad}
        options={propiedadSelectItems}
        onChange={(e) => setPropiedad(e.value)}
        placeholder="Casa"
      />
      <h5 className="b-tipoespacio">¿Qué tipo de espacio?</h5>
      <Dropdown
        value={habitaculo}
        options={habitaculoSelectItems}
        onChange={(e) => setHabitaculo(e.value)}
        placeholder="Selecciona una opción"
      />

      <button className='btn-flecha'><img src={iconoflecha}></img></button>
    </div>
  )
}
export default DetalleEspacio
