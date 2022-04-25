import React from 'react'
import { Calendar } from "primereact/calendar";
import '../../assets/images/icons8Calendar100Copy@3x.jpg'
import "./Homepage.scss";
import Swiper, {  Pagination } from 'swiper';
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
import travel1 from "../../assets/images/travel1.jpg";
import buscar from "../../assets/images/buscar@3x.png";
import calendario from "../../assets/images/icons8Calendar100Copy@3x.jpg";
import maletita from "../../assets/images/maletita@3x.jpg";


export default function HomePage() {
  const moment = new Date();

  const swiper = new Swiper('.swiper', {
    
    modules: [ Pagination],

    pagination: {
      el: '.swiper-pagination',
    },
  
   /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  */
   
  });
 
  return (

    <section className="b-visualizacion">
     <h1 className='titulo1'>Encuentra tu guardíán</h1>
    <div className="Buscador-de-pega">
      <img className='lupa' src={buscar} alt="buscar" width="15px"></img>
      <input type="search"  placeholder="buscar.." />
    </div>
    <section className='Formulario'>
    <div className="b-Globalform">
    <form>
      <div className='form-wrap'>
      <div className="userHome__calendarOne">
        <h3 className="userHome__h3"></h3>
        <img src={calendario} alt="iconcalendar" width="15px"></img>
          <Calendar
            minDate={moment}
            className="userHome__input"
            dateFormat="dd/mm/yy"
            showTime
            placeholder='Depósito'
          /></div>
          <div className="userHome__calendarTwo">
          <h3 className="userHome__h3"></h3>
          <img src={calendario} alt="iconcalendar" width="15px"></img>
          <Calendar
            minDate={moment}
           className="userHome__input"
            dateFormat="dd/mm/yy"
            showTime
            placeholder='Retirada'
          />
     </div>
      
    
    <div className="userHome__calendarPieces">
           <label>
           <img src={maletita} alt="iconcalendar" width="25px"></img>
          <select number>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
        </label></div>

    <button className="btn-form">Buscar</button></div>      
          
      
   
  </form></div> </section>

    <div className="b-novedades">
    <h1>Novedades</h1>

    <div class="swiper">
  
  <div class="swiper-wrapper">

  <div className="swiper-slide">
    <img src={travel1} alt="travel1" width="300px"></img>
    </div>
   
    <div className="swiper-slide">
    <img src="https://www.foodieandtraveler.com/wp-content/uploads/2020/10/foodieandtraveler-viajero-mochilero-turismo-tourism-viajando-despues-del-coronavirus-traveling-instagram-.jpg"alt="photo1" width="300px"></img>
    </div>
    <div className="swiper-slide">
    <img src="https://cdn1.matadornetwork.com/blogs/2/2018/09/Cliffs-at-Cantabric-coast-of-Spain-in-Galicia.jpg"alt="photo1" width="300px"></img>
    </div>
    <div className="swiper-slide">
    <img src="https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2019/09/30/5fa52ff369941.r_d.328-221.jpeg"alt="photo1" width="300px"></img>
    </div>
    <div className="swiper-slide">
    <img src="https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg_1014274486.jpg"alt="photo1" width="300px"></img>
    </div>
    <div className="swiper-slide">
    <img src="https://photo980x880.mnstatic.com/37f93c7924cb320de906a1f1b9f4e12a/la-gran-via-de-madrid-1072541.jpg"alt="photo1" width="300px"></img>
    </div>
  
  
  </div>
 
  <div className="swiper-pagination"></div>


      
    </div>
    
    <div className="b-experiencias">
      <h1>Experiencias</h1>
      <img className='exp-img-1'
        src="https://www.destinosinteligentes.es/wp-content/uploads/2020/06/Gijon-para-RedDTI-775x470.jpg"
        alt="image" width="400px"
      ></img>
      <h3>Un pedacito de Italia en Gijón</h3>
      <p>
        Sin lugar a duda es uno de los destinos Gastronómicos por excelencia
        de esta gran ciudad situada en el norte de España. 4.96
        ⭐⭐⭐⭐⭐(120)
      </p>
      <img
        src="https://c.stocksy.com/a/fQ9000/z9/36249.jpg"
        alt="image"
        width="350px" 
      ></img>
      <h3>Sumérgete en Barcelona</h3>
      <p>
        Si estás dispuesto a aventurarte en el mundo del submarinismo y venir
        a sentir una vivencia insólita en L'Aquárium. 4.96 ⭐⭐⭐⭐(120)
      </p>
      <button className="b-button">Mostrar más</button>
    </div></div> 
  

   
    
  </section>





  )
}
