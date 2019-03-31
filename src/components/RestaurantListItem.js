import React from 'react';

import '../dist/css/main.css';

const RestaurantListItem = (restaurants) => {

    const getRating = (rating) => {
        let newArr = [];
            for(let i = 0; i < rating; i++){
            newArr.push(<i className="fas fa-star"></i>);
            }
        return newArr;
      }

    const getPrice = (price) => {
        let newArr = [];
            for(let i = 0; i < price; i++){
                if(price)
                    newArr.push(<i className="fas fa-dollar-sign"></i>);
                else if(!price)
                    newArr.push('n/a');
            }
        return newArr;
    } 
    /*const isOpen = (open) => {
        
        theres a bug with restaurants not having hours listed

        if(open){
            return <div>Open Now</div>
        }
        else{
            return <div>Not Open</div>
        }
    }*/

    const getPhotos = (photo) => {
           for(let i = 0; i <= photo.length; i++){
               console.log(photo.length)
               //figure out why these imgs arent changing
               return <img src={require(`../images/ramen${i}.jpg`)} alt="Ramen"></img>;
           }
    }
    
    return(
            
        <div className="list--item" > 
            <div className="img-container">{getPhotos(restaurants.photos)}</div>
            <p className="ramen__title">{restaurants.spot.name}</p>
            <div className="rating__container">User Rating:{getRating(restaurants.rating)}</div>
            <hr></hr>
            <div className="price__container">Price:{getPrice(restaurants.price)}</div>
            <hr></hr>
            <p>Address: {restaurants.spot.formatted_address}</p>
        </div>
    )
}

export default RestaurantListItem;