
import React from "react";
import {Card} from "components/Card/Card"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// const maps_api = process.env.REACT_APP_MAPS_API_KEY
// const maps_url = "https://maps.googleapis.com/maps/api/js?key="+maps_api
const maps_url = "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 10.5545, lng: 76.2247 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 10.5545, lng: 76.2247 }} />
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  return (
    <CustomMap
      googleMapURL={maps_url}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
export default Maps;
