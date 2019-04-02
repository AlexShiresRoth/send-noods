import React from 'react';
import SideBar from './SideBar';
import Form from './Form';
import RamenSpots from './RamenSpots';
import { restaurantSearch } from './js/index';

import '../dist/css/main.css';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { location: '', restaurantsArr:[], loading:false}
  }

  onInputChange = (event) => {
    //get location value from input
    this.setState({
      location: event.target.value 
    })
  }


 resaurantQuery = event => {
    //submit location value to state
       event.preventDefault()

       this.setState({loading:true})

       restaurantSearch(this.state.location)
          .then(res => {
            //load response to the RamenList in the SideBar
            const response = res;
            this.setState({restaurantsArr: response, loading:false})
       })
  }
//render map {done}
//add searchbar
//ask for users location
//list where user has traveled
//list where user plans to travel
  inputReset = () => {
    this.setState({location: '', restaurantsArr: [], loading: false})
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
            />
          </div>
      </div>
    )
  }
}

export default App;
