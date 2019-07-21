import React from "react";
import "../css/main.css";

export default class Marker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  imgStyles = {
    height: "1.5rem",
    width: "1.5rem"
  };

  setHoverStateEnter = () => {
    this.setState({ hovered: true });
  };
  setHoverStateLeave = () => {
    this.setState({ hovered: false });
  };

  showInfo = () => {
    if (this.state.hovered) {
      console.log(this.props.locationInfo.name);
      return (
        <div style={{ position: "absolute" }}>
          <h1>{this.props.locationInfo.name}</h1>
        </div>
      );
    }
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <figure
          onMouseEnter={this.setHoverStateEnter}
          onMouseLeave={this.setHoverStateLeave}
        >
          <img
            src={require(`../images/ramen.png`)}
            alt={this.props.text}
            style={this.imgStyles}
          />
        </figure>
        {this.showInfo()}
      </div>
    );
  }
}
