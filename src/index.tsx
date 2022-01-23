import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./services/routes";

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.querySelector("#root"),
);
