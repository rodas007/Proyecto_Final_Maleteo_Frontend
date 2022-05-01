import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


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
  
    return (
      <GoogleMap zoom={15} center={center} mapContainerStyle={containerStyle}>
       {isMounted && <Marker position={center} />}
        
      </GoogleMap>
    );
  }
        
      
      
      
