import React from "react";
import "antd/dist/antd.css";
import "./InputForm.css";
import { Input, Button } from "antd";
import firebase from "./Firebase.js";
import RandGen from "./randGen.js";
import BreakTimer from "./breakTimer";

const InputGroup = Input.Group; //needed for ant design input groups
const { TextArea } = Input;

class InputForm extends React.Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    description: "",
    submitted: false
  };

  //change state as user inputs something
  changeDescription = text => {
    this.setState({ description: text });
  };

  //submit the activity they did
  submitLog = () => {
    this.setState({ submitted: true });
    const usersRef = firebase.database().ref("users/" + this.state.name); //reference to the database "users" key
    let today = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let minutes =
      today.getMinutes().toString().length == 1
        ? "0" + today.getMinutes()
        : today.getMinutes();
    let hours =
      today.getHours().toString().length == 1
        ? "0" + today.getHours()
        : today.getHours();
    let ampm = today.getHours() >= 12 ? "pm" : "am";
    let date_format =
      monthNames[today.getMonth()] +
      " " +
      today.getDate() +
      ", " +
      today.getFullYear();

    let time_format = hours + ":" + minutes + " " + ampm;

    console.log(
      monthNames[today.getMonth()] +
        " " +
        today.getDate() +
        " " +
        today.getFullYear() +
        " " +
        hours +
        ":" +
        minutes +
        " " +
        ampm
    );

    const activity = {
      //create thing to be pushed
      date: date_format,
      description: this.state.description,
      time: time_format
    };
    usersRef.push(activity); //push the data to the database
  };

  doItAgainClicked = () => {
    //to be called when they click the "Do It Again!" button
    this.props.action();
    this.setState({ submitted: false }); //reset the page
  };

  render() {
    if (!this.state.submitted) {
      return (
        <div className="input">
          <h1 type="inputform"> Way to go! </h1>
          <p type="inputform"> Name: {this.state.name} </p>
          <p type="inputform">What did you do? </p>
          <p />
          <TextArea
            rows={4}
            style={{ width: "50%" }}
            placeholder="built a rocketship, ran a marathon, etc..."
            onChange={e => this.changeDescription(e.target.value)}
          />
          <p />
          <button type="primary" onClick={() => this.submitLog()}>
            {" "}
            Log My Activity!{" "}
          </button>{" "}
          <br />
        </div>
      );
    } else {
      return (
        <div className="input">
          <BreakTimer />
          <p type="inputform">You deserve a break!</p>
          <button type="primary" onClick={() => this.doItAgainClicked()}>
            Do it Again!
          </button>
          <RandGen />
        </div>
      );
    }
  }
}

export default InputForm;
