import "./FichaComponent.scss";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const FichaComponent = () => {
  return (
    <>
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
      <div className="c-gallery">
        <div className="c-gallery__text">
          <h1 className="c-gallery__title">El hall de Marta</h1>
          <p>Tetuan, Madrid</p>
          <p>Guardiana: Marta</p>
          <p>⭐⭐⭐⭐ (60)</p>
         
        </div>
        <div className="c-gallery__img">
          <img className="c-gallery__img-im"
            src="https://cdn.zeplin.io/5d4d342a87666d9bb5130c1e/assets/78C94FB1-7C6F-4958-936C-5DC64E88065C.png"
            alt=""
          />
        </div>
      </div>
      <div className="c-gallery__esp">
          <a
            className="c-gallery__title-a"
            href="¡Rápido no le queda mucho espacio!"
          >
            ¡Rápido no le queda mucho espacio!
             <p className="c-gallery__title-p">🧳3/7</p></a>
         </div>


            <div className="descripcion">
              <div className="descripcion-container-1">
                <div className="descripcion-container-1-img">
              <img
              className="descripcion-container-1-img-im"
              src="https://cdn.zeplin.io/5d4d342a87666d9bb5130c1e/assets/DA5DF360-11F6-4EB4-8FC6-E797EC5381C1.png"
              alt=""
               />
               </div>
               <div className="descripcion-container-1-19">
            <p className="descripcion-container-1-19-l">19</p>
            <p className="descripcion-container-1-19-s">usuarios</p>
          </div>
          <div className="descripcion-container-1-95">
            <p className="descripcion-container-1-95-xl">95%</p>
          </div>

                </div>
                <div className="descripcion-container-2">
                <div className="descripcion__cont-text">
            <h3>Tipo de locker</h3>
            <p className="descripcion__cont-text-s">
              El salón de su casa será el lugar idóneo para alojar tus maletas y
              cuidar de ellos.
            </p>

          </div>
          <div className="descripcion__cont-text">
            <h3>Como la patena</h3>
            <p className="descripcion__cont-text-s">
              19 usuarios recientes han catalogado su espacio como muy limpio.
            </p>
          </div>
          <div className="descripcion__cont-text">
            <h3>Un </h3>
            <p className="descripcion__cont-text-s">
              el 95% de los usuarios han valorado su experiéncia como muy
              segura.
            </p>
          </div>

                
              </div>
            </div>
          
      <div>
        <p className="ubicacion">
          Habitación espaciada a 15 minutos del centro de madrid y a 5 minutos
          del la Linea 1. Además ofrezco información turística personalizada.
        </p>
      </div>
      <div className="ubicacion-map">
        <h3>Ubicacion</h3>
        <img
          className="ubicacion-img"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt=""
        />
      </div>
      <>
        <h2>Reseñas</h2>
        <div className="reseñas">
          <div className="reseñas-cont1">
            <img
              className="reseñas-cont1-img"
              src="https://psicociencias-cyl.com/wp-content/uploads/2019/03/ANA-MARIA-PINTO-LLORENTE.jpg"
              alt=""
            />
          </div>
          <div className="reseñas-cont2">
            <div className="reseñas-cont2-text">
              <p className="reseñas-cont2-text-l">Maria </p>{" "}
              <p className="reseñas-cont2-text-s"> En Julio de 2019</p>
            </div>
            <div>
              <p>
                El hall es acogedor y super chulo, muy limpio, Marta nos ayudó a
                subir las maletas y nos transmitió muchísima seguridad.
              </p>
            </div>
          </div>
        </div>
        <div className="reseñas">
          <div className="reseñas-cont1">
            <img
              className="reseñas-cont1-img"
              src="https://img.welt.de/img/newsticker/dpa_nt/infoline_nt/boulevard_nt/mobile207392625/8362508937-ci102l-w1024/urn-newsml-dpa-com-20090101-200421-99-772243-large-4-3-jpg.jpg"
              alt=""
            />
          </div>
          <div className="reseñas-cont2">
            <div className="reseñas-cont2-text">
              <p className="reseñas-cont2-text-l">Robert </p>{" "}
              <p className="reseñas-cont2-text-s"> En Julio de 2019</p>
            </div>
            <div>
              <p>
                Marta is very nice and her space is so cozy, she also showed us
                the best places to go for tapas in Madrid. Thank you so much.
              </p>
            </div>
          </div>
        </div>
        <div className="reseñas">
          <div className="reseñas-cont1">
            <img
              className="reseñas-cont1-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SNf9jW1kdAViCp05b1wlZ9hdw8S-ViQXXw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="reseñas-cont2">
            <div className="reseñas-cont2-text">
              <p className="reseñas-cont2-text-l">Carla </p>{" "}
              <p className="reseñas-cont2-text-s"> En Junio de 2019</p>
            </div>
            <div>
              <p>
                Marta responde rápido y estuvo muy atenta. Nos dió muchos
                consejos sobre Madrid y pudimos hacer turismo tranquilamente. Su
                ubicación nos vino genial para el transporte de vuelta.
              </p>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="normas">
          <h2 className="normas-t">Normas de Marta</h2>
          <div className="normas-a">
            <a className="normas-a-t " href="Cómo debe ser tu maleta">
              Cómo debe ser tu maleta
            </a>
          </div>
          <div className="normas-a">
            <a className="normas-a-t " href="Tipo de cancelación de reserva">
              Tipo de cancelación de reserva
            </a>
          </div>
          <div className="normas-a">
            <a className="normas-a-t " href="Contactar con tu guardián">
              Contactar con tu guardián
            </a>
          </div>
          <div className="normas-a">
            <a className="normas-a-t " href="Denunciar anuncio">
              Denunciar anuncio
            </a>
          </div>
        </div>
      </>
      <>
        <div className="otros">
          <h2>Otros lockers cerca de ti</h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img className="otros-img"
                src="https://cdn.locktec.com/locktec/images/locksafe/Locksafe_Schliessfaecher_Freizeitpark.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="otros-img"
                src="https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="otros-img"
                src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/Consejos-para-hacer-ima%CC%81genes-increi%CC%81bles-1024x538.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="otros-img"
                src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/Consejos-para-hacer-ima%CC%81genes-increi%CC%81bles-1024x538.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <footer>
          <div className="footer">
            <div className="footer-cont1">
              <p className="footer-cont1-text">Total 12€</p>
              <a className="footer-cont1-a" href="Desglose del precio">Desglose del precio</a>
            </div>
            <div className="footer-cont2">
              <button className="footer-cont2-btn">Reservar Ahora</button>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};

export default FichaComponent;
