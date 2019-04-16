import React from 'react';
import SideBar from './SideBar';
import Form from './Form';
import RamenSpots from './RamenSpots';
import { restaurantSearch } from './js/index';

import '../css/main.css';


    //render map {done}
    //add searchbar{done}
    //ask for users location{done}
    //add function to handle no results found
    //create a navbar under the map
    //allow users to add certain spots to restaurants theyve been to
    //get maps working online at url
    //style map markers
    //style user location
    //add a location box to each marker
    //make it mobile responsive
    //add pagination

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      location: '', 
      restaurantsArr:[], 
      loading:false
    }
  }

  onInputChange = (event) => {
    //get location value from input
    this.setState({
      location: event.target.value 
    });
  }


 resaurantQuery = event => {
      
       event.preventDefault();

       //start loading spinner
       this.setState({loading:true, restaurantsArr:[]});
      
       //make the restaurants query
       restaurantSearch(this.state.location)
          .then(res => {
            //load response to the RamenList in the SideBar
            this.setState({restaurantsArr: res, loading:false})
       });

  }

  //clears input and results on button click
  inputReset = () => {
    this.setState({location:'', restaurantsArr: [], loading: false})
  }

  render() {
    return (
      <div className="main__container">
          <Form 
              formDefault={this.resaurantQuery}
              formValue={this.state.location}
              formChange={this.onInputChange}
              onClick={this.inputReset}
            />
           <RamenSpots 
              locations={this.state.restaurantsArr}
            />
          <div className="bottom__container">
            <SideBar 
                ramenSpots={this.state.restaurantsArr}
                loading={this.state.loading}
                input={this.state.location}
              />
          </div>
      </div>
    )
  }
}

export default App;
