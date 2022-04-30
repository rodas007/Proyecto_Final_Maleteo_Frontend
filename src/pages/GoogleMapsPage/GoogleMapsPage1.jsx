import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function GoogleMapsPage() {

  const render = (status) => {
    return <h1>{status}</h1>;
  };
  
  <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
    
  </Wrapper>
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();
  
  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (


    <div ref={ref} />

  )
}
