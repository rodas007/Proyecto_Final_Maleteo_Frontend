import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { NavComponent } from "../../components/NavComponent/NavComponent";
import localizacion from "../../assets/images/ubicacion.png";
import iconback from "../../assets/images/whiteback.png";
import "./GoogleMapsPage.scss";
import { Link } from "react-router-dom";
const containerStyle = {
  width: '414px',
  height: '736px'
};




export default function GoogleMapsPage() {
  
  
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS,
    });
  
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
  }
  
  function Map() {
    useEffect ( ( )  =>  setIsMounted ( true ) ,  [ ] ) ;
    const  [ isMounted ,  setIsMounted ]  =  useState ( false ) ;
    const center = useMemo(() => ({ lat: 40.4167, lng: -3.70325 }), []);
    const centerTest = useMemo(() => ({ lat: 40.4167, lng: -3.70800 }), []);
    const centerTest2 = useMemo(() => ({ lat: 40.4195, lng: -3.70900 }), []);
  




    return (<>
     <div className="b-stickybox"> 
     <h1 className="b-qtitle">¿En qué zona?</h1>
     
      <div><Link to="/home">
        <button className="btn-back"><img className="b-iconback" src={iconback} alt="iconback" /> </button></Link></div>
      <img className="ubicon" src={localizacion}  alt="iconubi" />
       <input className="b-busqueda" type="search"  placeholder= "Madrid" /> 
      </div> 
      <div className="b-Mapa">
  
      <GoogleMap zoom={15} center={center} mapContainerStyle={containerStyle}>
       {isMounted && <Marker position={center} />}
       {isMounted && <Marker position={centerTest} />}
       {isMounted && <Marker position={centerTest2} />}
        
      </GoogleMap>
      
      <NavComponent/>
      </div>
      </>
    );
  }
        
      
      
      
