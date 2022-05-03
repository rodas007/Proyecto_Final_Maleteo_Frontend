import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { ArrowBackComponent } from "../../components/ArrowBackComponent/ArrowBackComponent";
import { Link } from "react-router-dom";
import "./DetalleEspacio.scss";
import iconoflecha from "../../assets/images/botonContinuar@2x.png";
import { API } from "../../services/api";
import { useForm } from "react-hook-form";


const DetalleEspacio = ({ data }) => {

  
  const { register, handleSubmit } = useForm();



  const onSubmit = (formData) => {
    const datosForm= {...formData,...data};
    console.log(datosForm);
     API.post("espacios", datosForm).then((res) => {
      console.log("Register espacios");
     
    }); 
   /*  console.log(formData); */
   
  };
  
  const [propiedad, setPropiedad] = useState([]);
  const [habitaculo, setHabitaculo] = useState([]);

  const propiedadSelectItems = [
    { label: "Casa", value: "Casa" },
    { label: "Hotel", value: "Hotel" },
    { label: "Establecimiento", value: "Establecimiento" },
  ];

  const habitaculoSelectItems = [
    { label: "Habitación", value: "Habitación" },
    { label: "Trastero", value: "Trastero" },
    { label: "Buhardilla", value: "Buhardilla" },
    { label: "Hall", value: "Hall" },
    { label: "Garaje", value: "Garaje" },
  ];

  return (
    <div className="c-espacio">
      <Link to="/hacerseguardian">
        <ArrowBackComponent />
      </Link>

      <div className="contenedor-espacio">
        <h1 className="b-describe">Descríbenos tu espacio</h1>

        <h5 className="b-especifica">Especifíca tu propiedad</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Dropdown
          
            className="p-dropdown"
            value={propiedad}
            options={propiedadSelectItems}
            onChange={(e) => setPropiedad(e.value)}
            {...register("property", {
              required: true,
            })}
            placeholder="Casa"
           
          />
          <h5 className="b-tipoespacio">¿Qué tipo de espacio?</h5>
          <Dropdown
          
            value={habitaculo}
            options={habitaculoSelectItems}
            onChange={(e) => setHabitaculo(e.value)}
            placeholder={habitaculo}
            
          />
          <select>

{propiedadSelectItems.map((option) => (

  <option value={option.value}>{option.label}</option>

))}

</select>
          
            <button className="btn-flecha">
              <img src={iconoflecha} alt="icon arrow"></img>
            </button>
          
        </form>
      </div>
    </div>
  );
};
export default DetalleEspacio;
