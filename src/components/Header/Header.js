import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header-container">
      <h2>App Name: {props.appName}</h2>
      <h3>Test Run ID: {props.testRunId}</h3>
      <h3>Timestamp: {props.timestamp}</h3>
    </div>
  );
}

export default Header;
