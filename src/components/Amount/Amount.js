import React from "react";
import "./Amount.css";

function Amount(props) {
  return <span className="amounts">{props.children}</span>;
}

export default Amount;
