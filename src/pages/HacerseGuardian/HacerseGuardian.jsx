import React from "react";
import "./HacerseGuardian.scss";
import { useState } from "react";
import { ArrowBackComponent } from "../../components/ArrowBackComponent/ArrowBackComponent";
import { Link } from "react-router-dom";
const HacerseGuardian = () => {
  return (
    <>
      <div className="b-encabezado">
      <Link to="/config"><ArrowBackComponent/></Link>
        <div className="texto">
          <p>Configura tu espacio en muy pocos pasos</p>
        </div>
      </div>
      <div className="b-global">
        <div className="b-describe">
       
          <p className="text-describe">
          <Link to="/detalleespacio">
            Describe tu espacio{" "}
            <button className="btn-continuar"         >Continuar</button>
            </Link>
          </p>
          <form>
            <h6 className="Ubi">Ubicación</h6>
            <input type="text" />

            <h6 className="fotos">Fotos</h6>
            <div className="mb-3">
              <input className="form-control" type="file" id="formFile"></input>
            </div>

            <h6 className="titulo">Titulo</h6>
            <input type="text" name="titulo" id="title" />

            <h6 className="Disponibilidad">Disponibilidad y horarios</h6>
            <input type="text" />

            <h6 className="Servicios">Servicios</h6>

            <textarea name="description" />
          </form>{" "}
        </div>
      </div>
    </>
  );
};
export default HacerseGuardian;
