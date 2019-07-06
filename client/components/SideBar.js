import React from "react";
import RamenList from "./RamenList";
import ResultsNav from "./ResultsNav";

import "../css/main.css";

class SideBar extends React.Component {
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
        />
      </div>
    );
  }
}
export default SideBar;
