import React from "react";
import "../css/main.css";

const Marker = props => {
  const imgStyles = {
    height: "1.5rem",
    width: "1.5rem"
  };

  return (
    <div>
      <figure>
        <img
          src={require(`../images/ramen.png`)}
          alt={props.text}
          style={imgStyles}
        />
      </figure>
    </div>
  );
};

export default Marker;
