import React from "react";
import "../css/main.css";

const Marker = props => {
  console.log(props.text)
  return <div>{props.text}</div>;
};

export default Marker;
