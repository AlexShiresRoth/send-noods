import React from 'react';

import '../css/main.css';

const RestaurantListItem = (restaurants) => {

    //render star rating
    const getRating = (rating) => {
        
        let newArr = [];
            
            for(let i = 0; i < rating; i++){
                newArr.push(<i className="fas fa-star"></i>);
            }
        
        return newArr;
      }

      //render price symbol
    const getPrice = (price) => {
        
        let newArr = [];
            
            if(price){  
                    if(price >= 0){
                        newArr.push(<i className="fas fa-dollar-sign"></i>);
                    }
                }
                
            else if(!price){
                    let jsxItem = <p style={{'color':'#000'}}>n/a</p>;
                    newArr.push(jsxItem);
                }

        return newArr;
    } 

    // determine if restaurant is open or not
    const getOpenTime = (open) => {
        if(open){
            return <p style={{'color':'green'}}>Open</p>
        }
        else{
            return <p style={{'color':'red;'}}>Closed</p>
        }
    }
    
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
                        User Rating:{getRating(restaurants.rating)}
                    </div>
                    
                    <hr></hr>
                
                    <div className="price__container">
                        Price:<span>{getPrice(restaurants.price)}</span>
                    </div>
                    
                    <hr></hr>
                
                <div className="hours__container">
                    Open:{getOpenTime(restaurants.open)}
                </div>
                
                <p>Address: {restaurants.spot.formatted_address}</p>
        
        </div>
    )
}

export default RestaurantListItem;