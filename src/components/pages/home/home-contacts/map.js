import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const Map = ({location}) => {
    return(
        <GoogleMap
            defaultZoom={17}
            center={location}
        >
            {<Marker position={location} />}
        </GoogleMap>)
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const FullMap = ({location}) => {
    return(
        <WrappedMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiDUPzu0qPEkNCeOmxSXm2kbZqgqTX9J4&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            location={location}
        />
    )
};
export default FullMap;