import './GuardianSlider.scss'
import "swiper/css";
import "swiper/css/pagination";
import Swiper, { Pagination } from "swiper";
import { useEffect } from 'react';

const GuardianSlider = () => {
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
          slidesPerView: 1.3,
          loop: true,
          centerInsufficientSlides: true,
          modules: [Pagination],
          pagination: {
            el: ".swiper-pagination",
          },
        });
      }, []);


  return (
      <div className="c-guardian swiper">
    <section className="c-guardian__section swiper-wrapper">
        
    <div className="c-guardian__ficha  swiper-slide">
      <div className="c-guardian__fotobox">
        <img
          className="c-guardian__img"
          src="https://www.comercionista.com/wp-content/uploads/2009/09/artem-gavrysh-698535-unsplash-800x445.jpg"
          alt="foto1"
        ></img>
      </div>
      <div className="c-guardian__info">
        <h1 className="c-guardian__nombre">Victor</h1>
        <img
          className="c-guardian__avatar"
          src="https://static.vecteezy.com/system/resources/previews/005/228/601/non_2x/avatar-man-face-silhouette-user-sign-person-profile-picture-male-contour-outline-icon-black-color-illustration-flat-style-image-vector.jpg"
          alt="fotouser"
        ></img>
        <p className="c-guardian__distancia">⭐⭐⭐⭐ A menos de 1 km de ti</p>
      </div>
    </div> 
    </section>
    </div>
  )
}

export default GuardianSlider
