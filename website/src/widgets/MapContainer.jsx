import React from 'react';
import { Box } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};
  
const center = {
    lat: 31.862,
    lng: -116.624,
};

const MapContainer = () => {
    {console.log("Google Maps API Key: ", process.env.REACT_APP_MAPS_KEY)}
    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;