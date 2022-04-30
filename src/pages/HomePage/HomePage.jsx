import React, { useEffect, useState } from "react";
import { environment } from "../../environments/environment";
import axios from "axios";
import "./Homepage.scss";
import { Link } from "react-router-dom";
import calendario from "../../assets/images/icons8Calendar100Copy@3x.jpg";
import maleta from "../../assets/images/maletita@3x.jpg";
import { NewsComponent } from "../../components/NewsComponent/NewsComponent";
import { ExperienceComponent } from "../../components/ExprienceComponent/ExperienceComponent";
import { NavComponent } from "../../components/NavComponent/NavComponent";
import SliderHome from "../../components/SliderHome/SliderHome";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { Calendar } from 'primereact/calendar';



export default function HomePage() {
  const [experiences, setExperiences] = useState();
  const [novedades, setNovedades] = useState();
  const [expLimit, setExpLimit] = useState(1);
  const moment = new Date();
  const [dateDeposit, setDateDeposit] = useState(new Date());

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get(`${environment.url}novedades`);
      setNovedades(res.data);
      console.log(res.data);
    };

    getNews();
  }, []);


    const getExp = async (limit = 2) => {
      const res = await axios.get(
        `${environment.url}experiencias?limit=${limit}`
      );
      setExperiences(res.data.docs);
      console.log(res.data);
    };


    useEffect(() => {
    getExp();
  }, []);


  const changePage = (newPage) => {
    setExpLimit(newPage);
    getExp(newPage +1);
  }

  return (
    <div className="home">
      <p className="b-title home__title">Encuentra tu guardian</p>
      <form>
        <div className="c-form">
        <InputComponent />
          <div className="c-prueba">
            <Link to="#">
              <img src={calendario} className="img" alt="/" />
            </Link>
            <input placeholder="Deposito" className="retirada" />
          </div>
          <div className="c-prueba2">
            <Link to="#">
              <img src={calendario} className="img" alt="/" />
            </Link>
            <input placeholder="Retirada" className="retirada" />
          </div>
        </div>
        <div className="c-form2">
          <div className="c-prueba">
            <Link to="#">
              <img src={maleta} className="img2" alt="/" />
            </Link>
            <input placeholder="Nº de piezas" value="" className="retirada" />
          </div>
          <div className="c-prueba3">
            <Link to="#">
              <button className="b-btn">Buscar</button>
            </Link>
          </div>
        </div>
      </form>

       <SliderHome novedades={novedades} />
      {/* <NewsComponent novedades={novedades} /> */}
      <ExperienceComponent experiences={experiences} />
      <button className="b-btn home__button"onClick={() => changePage(expLimit + 2)}  >Mostrar más</button>
      <NavComponent />
    </div>
  );
}
