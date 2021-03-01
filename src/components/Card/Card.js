import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img className="app-screenshot" alt="screenshot" src={props.screenshot} />
      <p>Step Name: {props.stepName} </p>
      <p>CPU: {props.cpu} </p>
      <p>Launch Times: {props.launchTimes} </p>
      <p>Memory: {props.memory} </p>
    </div>
  );
}

export default Card;
