import { Wrapper } from '@googlemaps/react-wrapper';
import React, { useEffect, useRef } from 'react';
const render = (status) => {
  console.log(status);
  if (status === 'LOADING') return <h3>{status} ..</h3>;
  if (status === 'FAILURE') return <h3>{status} ...</h3>;
  return null;
};
function MapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id='map' />;
}
const GoogleMap = () => {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY} render={render}>
      <MapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
};

export default GoogleMap;
