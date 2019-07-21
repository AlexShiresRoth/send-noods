import React, { Suspense, lazy } from "react";
import Loader from "./Loader";
import { restaurantSearch } from "./js/index";
import "../css/main.css";

const SideBar = lazy(() => import("./SideBar"));
const Form = lazy(() => import("./Form"));
const RamenSpots = lazy(() => import("./RamenSpots"));


//allow users to add certain spots for restaurants they've been to
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
      pageLoad: true,
      filter: "",
      unFiltered: []
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
    this.setState({ loading: true, restaurantsArr: [] });
    if (this.state.location !== "") {
      restaurantSearch(this.state.location)
        .then(res => {
          //load response to the RamenList in the SideBar
          this.setState({
            restaurantsArr: res,
            loading: false,
            unFiltered: res
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({ restaurantsArr: [], loading: false, unFiltered: [] });
          alert(err.message);
        });
    } else {
      //create better handling than just an alert;
      alert("Please enter a destination");
      this.setState({ restaurantsArr: [], loading: false, unFiltered: [] });
    }
  };

  inputReset = event => {
    event.preventDefault();

    this.setState({
      location: "",
      restaurantsArr: [],
      loading: false,
      unFiltered: []
    });
  };

  clearInput = () => {
    if (this.state.loading && this.state.locations.length > 0) {
      this.inputReset();
    }
  };

  sortResults = event => {
    event.preventDefault();

    let results = this.state.restaurantsArr;

    let unFiltered = this.state.unFiltered;

    if (this.state.filter.toLowerCase() === "no-filter") {
      let noFilter = [...unFiltered];
      return this.setState({
        restaurantsArr: noFilter
      });
    }

    if (this.state.filter.toLowerCase() === "rating-amount") {
      let ratingFilter = [...results];
      ratingFilter.sort((a, b) => {
        return b.user_ratings_total - a.user_ratings_total;
      });
      this.setState({ restaurantsArr: ratingFilter });
    }

    if (this.state.filter.toLowerCase() === "best-rated") {
      let bestRated = [...results];
      bestRated.sort((a, b) => b.rating - a.rating);
      this.setState({ restaurantsArr: bestRated });
    }

    if (this.state.filter.toLowerCase() === "price-low-to-high") {
      let lowHigh = [...results];
      lowHigh.sort((a, b) => a.price_level - b.price_level);
      this.setState({ restaurantsArr: lowHigh });
    }

    if (this.state.filter.toLowerCase() === "price-high-to-low") {
      let highLow = [...results];
      highLow.sort((a, b) => b.price_level - a.price_level);
      this.setState({ restaurantsArr: highLow });
    }

    if (this.state.filter.toLowerCase() === "open") {
      let open = [...results];
      this.setState({
        restaurantsArr: open.filter(
          openNow => openNow.opening_hours.open_now === true
        )
      });
    }
  };

  handlePageLoad = () => {
    this.setState({ pageLoad: false });
  };

  componentDidMount() {
    window.addEventListener("load", this.handlePageLoad);
  }

  render() {
    if (!this.state.pageLoad) {
      return (
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      );
    } else {
      return <Loader />;
    }
  }
}
export default App;
