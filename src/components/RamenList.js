import React from 'react';
import RestaurantListItem from './RestaurantListItem';

import '../dist/css/main.css';


const RamenList = (props) => {
    const ramenPhotoArray = ['ramen0.jpg','ramen1.jpg','ramen2.jpg','ramen3.jpg','ramen4.jpg','ramen5.jpg','ramen6.jpg',
    'ramen7.jpg','ramen8.jpg','ramen9.jpg','ramen10.jpg','ramen11.jpg','ramen12.jpg',
    'ramen13.jpg','ramen14.jpg','ramen15.jpg','ramen16.jpg','ramen17.jpg','ramen18.jpg','ramen19.jpg']

    const restaurants = props.restaurants.map(spot => {
        return <RestaurantListItem 
                    key={spot.id}
                    lat={spot.geometry.location.lat}
                    lng={spot.geometry.location.lng}
                    spot={spot}
                    rating={spot.rating}
                    price={spot.price_level}
                    photos={ramenPhotoArray}
                    //open={spot.opening_hours.open_now}
                />
        });


    if(props.loading && props.restaurants.length < 1){

        //create an actual loading spinner
        return(
            <div className="ramen__list--container">
                <div className="loader-container">
                    <div className="loader">
                    </div>
                </div>
            </div>
        )
    }
        return(
            <div className="ramen__list--container">
                <div className="ramen--list">{restaurants}</div>
            </div>
        ) 
    }
export default RamenList;