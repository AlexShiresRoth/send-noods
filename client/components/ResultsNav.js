import React from "react";

import "../css/main.css";

export default class ResultsNav extends React.Component {
  sortResults = event => {
    this.props.sortResults(event);
  };
  getInputValue = event => {
    this.props.setValue(event);
  };

  render() {
    if (!this.props.loading && this.props.restaurants.length > 0) {
      return (
        <div className="results__nav">
          <div className="results__nav--left">
            <h2>Favorite Spots</h2>
            <i class="far fa-heart" />
          </div>

          <div className="results__nav--middle">
            <h2>
              Results for{" "}
              <span style={{ color: "#ff4500" }}>
                {this.props.input.toUpperCase()}
              </span>{" "}
            </h2>
          </div>

          <div className="results__nav--right">
            <form onSubmit={this.sortResults}>
              <select onChange={this.getInputValue}>
                <option value="no-filter">No Filter</option>
                <option value="best-rated">Best Rated</option>
                <option value="open">Open Now</option>
                <option value="rating-amount">Most Rated</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
              </select>
              <button onClick={this.sortResults}>Filter</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="results__nav">
          <div className="results__nav--left">
            <h2>Favorite Spots</h2>
            <i class="far fa-heart" />
          </div>
          <div className="results__nav--middle">
            <h2>Results Will Be Shown Below.</h2>
          </div>
          <div className="results__nav--right">
            <h2>Filter By:</h2>
            <select onChange={this.getInputValue}>
              <option value="no-filter">No Filter</option>
              <option value="best-rated">Best Rated</option>
              <option value="open">Open Now</option>
              <option value="rating-amount">Most Rated</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      );
    }
  }
}
