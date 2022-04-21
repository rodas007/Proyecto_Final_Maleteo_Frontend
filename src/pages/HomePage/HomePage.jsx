import React from "react";
import { Calendar } from "primereact/calendar";
import "./Homepage.scss";

export default function HomePage() {
  const moment = new Date();

  return (
    <section className="b-visualizacion">
      <div className="Buscador-de-pega">
        <input type="search" placeholder="buscar.." />
      </div>
      <form>
        <div className="b-form_reserva">
        <div className="userHome__details">
            <div className="userHome__calendarOne">
          <h3 className="userHome__h3">Depósito</h3>
            <Calendar
              minDate={moment}
              className="userHome__input"
              dateFormat="dd/mm/yy"
              showTime
            />
            </div>
            </div>

            <label>
            Retirada
            <input type="date" />
            Nº de piezas
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
          </label>
          <button className="btn-form">Buscar</button>
        </div>
      </form>

      <div className="b-novedades">
        <h1>Novedades</h1>
        <img
          src="https://st2.depositphotos.com/3591429/12459/i/600/depositphotos_124598104-stock-photo-man-jogging-in-mountains.jpg"
          alt="image"
        ></img>
      </div>
      <div className="b-experiencias">
        <h1>Experiencias</h1>
        <img
          src="https://www.destinosinteligentes.es/wp-content/uploads/2020/06/Gijon-para-RedDTI-775x470.jpg"
          alt="image"
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
          width="400px"
        ></img>
        <h3>Sumérgete en Barcelona</h3>
        <p>
          Si estás dispuesto a aventurarte en el mundo del submarinismo y venir
          a sentir una vivencia insólita en L'Aquárium. 4.96 ⭐⭐⭐⭐(120)
        </p>
      </div>

      <button className="b-button">Mostrar más</button>
    </section>
  );
}
