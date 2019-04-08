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
                if(price){
                    newArr.push(<i className="fas fa-dollar-sign"></i>);
                }
                if(!price || price === null){
                    newArr.push('n/a');
                }
            }
        return newArr;
    } 
    //write a function to determine if restaurant is open or not
    /*const isOpen = (open) => {
        
        theres a bug with restaurants not having hours listed

        if(open){
            return <div>Open Now</div>
        }
        else{
            return <div>Not Open</div>
        }
    }*/
    const getPhotos = restaurants.photos.map(photo => {

        return (
            <firgure className="image__item">
                    <img src={require(`../images/${photo}`)} alt="Ramen"></img>
            </firgure>
        )
    });
  

    
    return(

        <div className="list--item" > 
            <div className="img-container">
                    {getPhotos}
            </div>
            <div className="ramen__title">
                {restaurants.spot.name}
            </div>
            <div className="rating__container">
                User Rating:{getRating(restaurants.rating)}</div>
            <hr></hr>
            <div className="price__container">Price:<span>{getPrice(restaurants.price)}</span></div>
            <hr></hr>
            <p>Address: {restaurants.spot.formatted_address}</p>
        </div>
    )
}

export default RestaurantListItem;