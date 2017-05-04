import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";
import users from "./users";


function render() {
  ReactDOM.render(
    <App users={users} />,
    document.getElementById("root")
  );
}
render();
