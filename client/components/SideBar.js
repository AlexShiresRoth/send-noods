import React from "react";
import RamenList from "./RamenList";
import ResultsNav from "./ResultsNav";

import "../css/main.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: this.favorites
    };
    this.addFavorite = this.addFavorite.bind(this);
  }

  favorites = [];

  addFavorite = (e, data) => {
    //need to check array if name already exists
    this.favorites.push(data);
    console.log(this.state.favorited);
  };

  render() {
    return (
      <div className="side-bar-left">
        <ResultsNav
          input={this.props.input}
          loading={this.props.loading}
          restaurants={this.props.ramenSpots}
          filter={this.props.filter}
          sortResults={this.props.sortResults}
          setValue={this.props.onChange}
        />
        <RamenList
          restaurants={this.props.ramenSpots}
          loading={this.props.loading}
          input={this.props.input}
          addFavorite={this.addFavorite}
        />
      </div>
    );
  }
}
export default SideBar;
