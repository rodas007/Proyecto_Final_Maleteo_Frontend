import React from "react";
import "./HacerseGuardian.scss";
import { useState } from "react";

const HacerseGuardian = () =>{

    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    return(
        <div className="b-global">

         <div className="b-encabezado">
            <h1>Configura tu espacio en muy pocos pasos</h1></div>

         <div className="b-describe">
             <h1>Describe tu espacio <button className="btn-continuar">Continuar</button></h1>
         </div>   
            
      <form>
          <h6 className="Ubi">Ubicación</h6>
          <input type="text" />

          <h6 className="fotos">Fotos</h6>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
           <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <h6 className="titulo">Titulo</h6>
        <input type="text" name="titulo" id="title" />

        <h6 className="Disponibilidad">Disponibilidad y horarios</h6>
        <input type="text" />

        <h6 className="Servicios">Servicios</h6>
        
        <textarea name="description"/>


      
      </form>
    </div>

       
    )

}
export default HacerseGuardian;