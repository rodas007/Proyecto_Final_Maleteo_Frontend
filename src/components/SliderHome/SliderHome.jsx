import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Slide1 from "../../assets/images/slider.jpg";
import Slide2 from "../../assets/images/slider1.jpeg";
import Slide3 from "../../assets/images/slider2.jpg";


import "./SliderHome.scss";

const SliderHome = ({novedades}) => {


  return (
    <div className="c-slider">
    <h1 className="c-slider__text">Novedades</h1>
      <div className="c-news swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >

{novedades?.map((novedad, key)=>
            <div key={key} className="c-news__item">

          <SwiperSlide>
            <img className="c-news__item-img" alt={novedad.title}  
              src={novedad.image}
              
            />
          </SwiperSlide>
          </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderHome;