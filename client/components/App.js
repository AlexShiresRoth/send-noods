import React from "react";
import SideBar from "./SideBar";
import Form from "./Form";
import RamenSpots from "./RamenSpots";
import { restaurantSearch } from "./js/index";

import "../css/main.css";
//add function to handle no results found
//create a navbar under the map
//allow users to add certain spots for restaurants they've been to
//get maps working online at url
//style map markers
//style user location
//add a location box to each marker
//make it mobile responsive
//add pagination

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      restaurantsArr: [],
      loading: false,
      filter: ""
    };
  }

  onInputChange = event => {
    //get location value from input
    this.setState({
      location: event.target.value
    });
  };

  setValue = event => {
    event.preventDefault();

    this.setState({
      filter: event.target.value
    });
  };

  resaurantQuery = event => {
    event.preventDefault();
    //start loading spinner and set results to empty array
    this.setState({ loading: true, restaurantsArr: [] });

    //make the restaurants query if there is a query
    if (this.state.location !== "" && this.state.location) {
      restaurantSearch(this.state.location)
        .then(res => {
          //load response to the RamenList in the SideBar
          this.setState({ restaurantsArr: res, loading: false });
        })
        .catch(err => {
          console.log(err);
          this.setState({ restaurantsArr: [], loading: false });
          alert(err.message);
        });
    }
  };

  //clears input and results on button click
  inputReset = event => {
    event.preventDefault();

    this.setState({ location: "", restaurantsArr: [], loading: false });
  };

  //clear results when user enters input after results have loaded
  clearInput = () => {
    if (this.state.loading && this.state.locations.length > 0) {
      this.inputReset();
    }
  };

  //sort results depending on filter selected
  //DRY this up
  //fix the side effects of having the filters on
  sortResults = event => {
    event.preventDefault();

    if (this.state.filter.toLowerCase() === "no-filter") {
      let restaurants = this.state.restaurantsArr;
      let noFilter = [...restaurants];
      return this.setState({
        restaurantsArr: noFilter
      });
    }

    if (this.state.filter.toLowerCase() === "rating-amount") {
      let restaurants = this.state.restaurantsArr;
      let ratingFilter = restaurants.slice(0, restaurants.length);
      this.setState({
        restaurantsArr: ratingFilter.sort((a, b) => {
          return b.user_ratings_total - a.user_ratings_total;
        })
      });
    }

    if (this.state.filter.toLowerCase() === "best-rated") {
      let restaurants = this.state.restaurantsArr;
      let bestRated = restaurants.slice(0, restaurants.length);
      this.setState({
        restaurantsArr: bestRated.sort((a, b) => {
          return b.rating - a.rating;
        })
      });
    }

    if (this.state.filter.toLowerCase() === "price-low-to-high") {
      let restaurants = this.state.restaurantsArr;
      let lowHigh = restaurants.slice(0, restaurants.length);
      this.setState({
        restaurantsArr: lowHigh.sort((a, b) => {
          return a.price_level - b.price_level;
        })
      });
    }

    if (this.state.filter.toLowerCase() === "price-high-to-low") {
      let restaurants = this.state.restaurantsArr;
      let highLow = restaurants.slice(0, restaurants.length);
      this.setState({
        restaurantsArr: highLow.sort((a, b) => {
          return b.price_level - a.price_level;
        })
      });
    }

    if (this.state.filter.toLowerCase() === "open") {
      let restaurants = this.state.restaurantsArr;
      let open = restaurants.slice(0, restaurants.length);
      this.setState({
        restaurantsArr: open.filter(
          spot => spot.opening_hours.open_now === true
        )
      });
    }
  };

  render() {
    return (
      <div className="main__container">
        <Form
          formDefault={this.resaurantQuery}
          formValue={this.state.location}
          formChange={this.onInputChange}
          onClick={this.inputReset}
          clearInput={this.clearInput}
        />
        <RamenSpots locations={this.state.restaurantsArr} />
        <div className="bottom__container">
          <SideBar
            ramenSpots={this.state.restaurantsArr}
            loading={this.state.loading}
            input={this.state.location}
            filter={this.state.filter}
            onChange={this.setValue}
            sortResults={this.sortResults}
          />
        </div>
      </div>
    );
  }
}
export default App;
