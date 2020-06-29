import React, { useState } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import mapMarker from '../../../../assets/map_marker.png';

const Map = ({ location, isOpen, markerOnCLick }) => {
  const icon = {
    url: mapMarker,

  };
  return (
    <GoogleMap
      defaultZoom={17}
      center={location}
    >
      <Marker title={'Solodent'} position={location} onClick={markerOnCLick} icon={icon}>
        {isOpen && (
          <InfoWindow>
            <div className="info-window">
              <div className="title">Стоматологічна клініка Solodent</div>
              <p>
                <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;
                пн-птн: 09:00 - 21:00
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;сб-нд: 09:00 - 15:00
              </p>
              <p>
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;
                <a href="tel:+38098-507-19-88">+38 (098) 507 19 88</a>
              </p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const FullMap = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WrappedMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiDUPzu0qPEkNCeOmxSXm2kbZqgqTX9J4&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `400px` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `400px` }} />}
      location={location}
      isOpen={isOpen}
      markerOnCLick={() => setIsOpen(!isOpen)}
    />
  );
};
export default FullMap;
