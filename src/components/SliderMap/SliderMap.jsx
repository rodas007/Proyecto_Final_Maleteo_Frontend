/*import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";



import "./SliderHome.scss";

const SliderMap = () => {


  return (
    <div className="c-slider">
    <h1 className="c-slider__text">Cerca de ti</h1>
      <div className="c-guardian_swiper" >
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >

{novedades?.map((espacios)=>
            <div key={espacios.alias} className="c-guardian__item">

          <SwiperSlide>
            <img className="c-guardian__item-img" alt={espacios.alias}  
              src={espacios.imagen}
              
            />
          </SwiperSlide>
          </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderMap;*/