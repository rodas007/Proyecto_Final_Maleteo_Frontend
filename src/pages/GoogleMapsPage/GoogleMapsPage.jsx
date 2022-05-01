import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '410px',
  height: '500px'
};

const center = {
  lat:40.4165000,
  lng:-3.7025600
};

function GoogleMapsPage() {
  return (
    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_GOOGLE_MAPS}>
      <GoogleMap
       id="searchbox-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
      
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMapsPage)