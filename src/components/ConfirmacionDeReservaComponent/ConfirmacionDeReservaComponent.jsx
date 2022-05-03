import React from 'react'
import "./ConfirmacionDeReservaComponent.scss"
import { ArrowBackComponent } from '../../components/ArrowBackComponent/ArrowBackComponent';
import { Link } from 'react-router-dom';

const ConfirmacionDeReservaComponent = () => {
  return (
      <>
    <div className='conf'>
    <Link to="/messages" ><ArrowBackComponent/> </Link>
    <div className='head'> <div className='head-text'>Carlos</div> </div>
    <div className='cont-1'>
        <div className='cont-1-res'>
        <h3 className='cont-1-res-t'>Reserva confirmada</h3>
        <a className='cont-1-res-a' href="Detalles">Detalles</a>
        </div>
        <div className='cont-1-det'>
            <p className='cont-1-det-text'>Acabas de confirmar a Carlos, ponte en contacto con él y ultima los detalles para su llegada.</p>
        
        </div>
    </div>
    <div className='cont-2'>
        <div className='cont-2-img'> <img className='cont-2-img-im' src="https://cdn.zeplin.io/5d4d342a87666d9bb5130c1e/assets/78C94FB1-7C6F-4958-936C-5DC64E88065C.png" alt="" /> </div>
        <div className='cont-2-text'> <p className='cont-2-text-p'>Hola, muchas gracias por escoger
mi hall para guardar tu maleta. 
Estaré encantada de cuidar de tu equipaje. Mi teléfono es 634723485.</p> </div>

    </div>
    
    </div>
    <div className='cont-3'>
      <input placeholder='Escribe un mensaje' className='cont-3-i' type="text" name="Escribe un mensaje" id="" />
    {/* <p className='cont-3-i'>Escribe un mensaje</p> */}
    <p className='cont-3-d'>Enviar</p>
</div>
</>
  )
}

export default ConfirmacionDeReservaComponent