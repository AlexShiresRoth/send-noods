import React from 'react';
import Marker from './Marker';
import '../dist/css/main.css';

const Markers = (props) => {

    const renderMarkers = props.ramenSpots.map(spot => {
        return <Marker 
                  lat={spot.geometry.location.lat}
                  lng={spot.geometry.location.lng}
                  key={spot.id}
                  text="Ramen Spot"
                />
    })
 
    return (
        <div>
            {renderMarkers}
            {props.text}
        </div>
    )
}

export default Markers;