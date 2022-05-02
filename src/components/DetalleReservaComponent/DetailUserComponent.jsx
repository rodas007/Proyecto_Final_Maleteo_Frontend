import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./DetailUserComponent.scss";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowBackComponent } from '../../components/ArrowBackComponent/ArrowBackComponent';
import { Link } from "react-router-dom";

const DetalleReservaComponent = () => {
  return (
    <>
    <Link to="/config"><ArrowBackComponent/></Link>
    <div className="c-box">
    
        <Swiper
        
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
          
            <img
              src="https://i.blogs.es/e1feab/google-fotos/450_1000.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/Consejos-para-hacer-ima%CC%81genes-increi%CC%81bles-1024x538.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/Consejos-para-hacer-ima%CC%81genes-increi%CC%81bles-1024x538.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="c-reserva-cont">
          <div className='c-reserva-cont-1'>
          <h1>El hall de Marta</h1>
          <p>Tetuan, Madrid</p>
          <p>Calle San German 26, Madrid</p>
          <p>Guardiana: Marta</p>
         </div>
         <div className='c-reserva-cont-2'>
           <img className='c-reserva-cont-2-img' src="https://cdn.zeplin.io/5d4d342a87666d9bb5130c1e/assets/9DE23EA4-2551-43A0-8CAC-6CE572BCFFFA.png" alt="" />

         </div>
        </div>
        <div className='ubicacion'>
          <h3>Ubicacion</h3>
          <img src="https://developers.google.com/maps/images/landing/hero_geocoding_api.png" alt="" />
          <div className='ubicacion-cont'>
          <div>
            <p className='ubicacion-cont-text'>Llegada</p>
            <p>30 de Julio</p>
          </div>
          <div>
            <p className='ubicacion-cont-text'>Recogida</p>
            <p>30 de Julio</p>
          </div>
          <div>
            <p className='ubicacion-cont-text'>Equipaje</p>
            <p>2 Equipajes</p>
          </div>
          </div>
          <div className='normas'>
            <div>
              <p>
                Cormas de Marta
              </p>
            </div>
            <div className='normas-cont'>
              <p>
                Cómo debe ser tu maleta
              </p>
            </div>
            <div className='normas-cont'>
              <p>
                Código de reserva
              </p>
              <p className='normas-cont-text'>
              h3u5de8xg
              </p>
            </div>
            <div className='normas-cont'>
              <p>
                Coste total
              </p>
              <p className='normas-cont-text'>12€</p>
              <a className='normas-cont-a' href="Desglose">Desglose</a>
            </div>
            <div className='normas-cont'>
              <p>
                ¿Necesitas ayuda?
              </p>
            </div>

          </div>
        </div>
    </>
  )
}

export default DetalleReservaComponent