import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function(props) {
  return (
    <Jumbotron>
      <h1>{props.title}</h1>
      <p>
        <br />
        {props.text} <b>{props.bold}</b>
      </p>
    </Jumbotron>
  );
}
