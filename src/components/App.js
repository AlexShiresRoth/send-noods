import React from 'react';
import SideBar from './SideBar';
import Form from './Form';
import RamenSpots from './RamenSpots';
import { restaurantSearch } from './js/index';

import '../dist/css/main.css';


    //render map {done}
    //add searchbar{done}
    //ask for users location{done}
    

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
    })
  }


 resaurantQuery = event => {
      
       event.preventDefault()
       //start loading spinner
       
       this.setState({loading:true, restaurantsArr:[]})
      
       //make the restaurants query
      
       restaurantSearch(this.state.location)
          .then(res => {
            //load response to the RamenList in the SideBar
            
            this.setState({restaurantsArr: res, loading:false})
       })
       //clear the input
       this.setState({location:''})
  }

  //clears input and results on button click
  inputReset = () => {
    this.setState({location:'',restaurantsArr: [], loading: false})
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
