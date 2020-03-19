
import React from "react";
import mapboxgl from 'mapbox-gl';
import {Card} from "components/Card/Card"
// mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  return (
    <CustomMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

// export default Maps;
// class Maps extends React.Component {
//   componentDidMount() {
//     this.map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v9'
//     });
//   }

//   render() {
//     const style = {
//       height:'100%',
//       width: '100%'
//     };

//     return (
//       // <CustomMap
//       //       googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE"
//       //       loadingElement={<div style={{ height: `100%` }} />}
//       //       containerElement={<div style={{ height: `100vh` }} />}
//       //       mapElement={<div style={{ height: `100%` }} />}
//       //     />
//         <Card 
//           title="Maps"
//           content={
//             <div style={style} ref={el => this.mapContainer = el} />
//           }
//         />
//       )
//   }
// }

export default Maps;
