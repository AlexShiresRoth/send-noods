import React from 'react';
import '../dist/css/main.css';

const Marker = (renderMarkers) => {
    return (
        <div
            center={{lat:renderMarkers.lat, lng:renderMarkers.lng}} >

        </div>
    )
}

export default Marker;