import Timer from "./timer";
import React from "react";
import "./App.css";
import AuthUser from "./authUser.js";
import InputForm from "./InputForm.js";
import NavBar from "./NavBar.js";

export default class Main extends React.Component {
  render() {
    return (
      <div className="App">
      <NavBar history={this.props.history}/>
        <header className="App-header">
          
          <Timer />

        </header>
      </div>
    );
  }
}
