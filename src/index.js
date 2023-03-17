import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, 
document.getElementById("root"));
