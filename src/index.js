import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AuthUser from "./authUser.js";
import Main from "./Main.js";
import Profile from "./Profile.js";

const routing = (
  <Router>
    <div>
      <Route path="/app" component={Main} />
      <Route path="/profile" component={Profile} />
      <Route exact path="/" component={AuthUser} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
