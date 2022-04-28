import React from 'react'
import { Calendar } from 'primereact/calendar'
import '../../assets/images/icons8Calendar100Copy@3x.jpg'
import './Homepage.scss'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import travel1 from '../../assets/images/travel1.jpg'
import buscar from '../../assets/images/buscar@3x.png'
import calendario from '../../assets/images/icons8Calendar100Copy@3x.jpg'
import maletita from '../../assets/images/maletita@3x.jpg'

const HomePage = ()=> {
  const moment = new Date()

    
   

  return (
    <section className="b-visualizacion">
      <h1 className="titulo1">Encuentra tu guardíán</h1>
      <div className="Buscador-de-pega">
        <img className="lupa" src={buscar} alt="buscar"></img>
        <input type="search" placeholder="buscar.." />
      </div>
      <section className="Formulario">
        <div className="b-Globalform">
          <form>
            <div className="form-wrap">
              <div className="userHome__calendarOne">
                <h3 className="userHome__h3"></h3>
                <img src={calendario} alt="iconcalendar"></img>
                <Calendar
                  minDate={moment}
                  className="userHome__input"
                  dateFormat="dd/mm/yy"
                  showTime
                  placeholder="Depósito"
                />
              </div>
              <div className="userHome__calendarTwo">
                <h3 className="userHome__h3"></h3>
                <img src={calendario} alt="iconcalendar"></img>
                <Calendar
                  minDate={moment}
                  className="userHome__input"
                  dateFormat="dd/mm/yy"
                  showTime
                  placeholder="Retirada"
                />
              </div>

              <div className="userHome__calendarPieces">
                <label>
                  <img src={maletita} alt="iconcalendar"></img>
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
                  </select>
                </label>
              </div>

              <button className="btn-form">Buscar</button>
            </div>
          </form>
        </div>{' '}

        

        

      </section>

      <div className="b-novedades">
        <h1>Novedades</h1>
        <Swiper
        modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination ={{clickable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
      <SwiperSlide><img className='fotoslider' src={travel1} alt="travel1"></img></SwiperSlide>

      <SwiperSlide><img className='fotoslider'
                src="https://www.foodieandtraveler.com/wp-content/uploads/2020/10/foodieandtraveler-viajero-mochilero-turismo-tourism-viajando-despues-del-coronavirus-traveling-instagram-.jpg"
                alt="photo1"></img></SwiperSlide>

      <SwiperSlide><img className='fotoslider'
                src="https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2019/09/30/5fa52ff369941.r_d.328-221.jpeg"
                alt="photo2"></img></SwiperSlide>
                
      <SwiperSlide><img className='fotoslider'
                src="https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg_1014274486.jpg"
                alt="photo3"></img></SwiperSlide>
                           
      <SwiperSlide><img className='fotoslider'
                src="https://photo980x880.mnstatic.com/37f93c7924cb320de906a1f1b9f4e12a/la-gran-via-de-madrid-1072541.jpg"
                alt="photo4"></img></SwiperSlide>
      
    </Swiper>
          
     

        <div className="b-experiencias">
          <h1>Experiencias</h1>
          <img
            className="exp-img-1"
            src="https://www.destinosinteligentes.es/wp-content/uploads/2020/06/Gijon-para-RedDTI-775x470.jpg"
            alt="image"
            width="400px"
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
            Si estás dispuesto a aventurarte en el mundo del submarinismo y
            venir a sentir una vivencia insólita en L'Aquárium. 4.96
            ⭐⭐⭐⭐(120)
          </p>
          <button className="b-button">Mostrar más</button>
        </div>
      </div>
    </section>
  )
}
export default HomePage ;