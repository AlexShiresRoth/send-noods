import React from 'react';
import RestaurantListItem from './RestaurantListItem';

import '../css/main.css';


const RamenList = (props) => {
    
    console.log(props.input);

    const ramenPhotoArray = ['ramen0.jpg','ramen1.jpg','ramen2.jpg']


    const restaurants = props.restaurants.map(spot => {
        
            return <RestaurantListItem 
                    key={spot.id}
                    lat={spot.geometry.location.lat}
                    lng={spot.geometry.location.lng}
                    spot={spot}
                    rating={spot.rating}
                    price={spot.price_level}
                    photos={ramenPhotoArray}
                    open={spot.opening_hours.open_now}
                />
        });
    
    

    if(props.loading && props.restaurants.length < 1){
        return(
            <div className="ramen__list--container">
                <div className="loader-container">
                    <div className="loader">
                    </div>
                </div>
            </div>
        )
    }

   if(!props.loading && props.restaurants.length > 0){
        return(
            <div className="ramen__list--container">
                <h2>Results for <span style={{'color':'#ff4500'}}>{props.input.toUpperCase()}</span> </h2>
                <div className="ramen--list">{restaurants}</div>
            </div>
        ) 
    }

    return (
        <div className="ramen__list--container">
                <h2>Results Will Be Show Here...</h2>
        </div>
    )
}
export default RamenList;