import React from "react";
import "antd/dist/antd.css";
import "./InputForm.css";
import { Input, Button } from "antd";
import firebase from "./Firebase.js";
import BreakTimer from "./breakTimer";

const InputGroup = Input.Group; //needed for ant design input groups
const { TextArea } = Input;

class InputForm extends React.Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    day: "",
    month: "",
    year: "",
    description: "",

    submitted: false
  };

  //change state as user inputs something
  changeDay = text => {
    this.setState({ day: text });
  };
  //change state as user inputs something
  changeMonth = text => {
    this.setState({ month: text });
  };
  //change state as user inputs something
  changeYear = text => {
    this.setState({ year: text });
  };
  //change state as user inputs something
  changeDescription = text => {
    this.setState({ description: text });
  };

  //submit the activity they did
  submitLog = () => {
    this.setState({ submitted: true });
    const usersRef = firebase.database().ref("users/" + this.state.name); //reference to the database "users" key
    let date_format =
      this.state.month + " " + this.state.day + ", " + this.state.year;

    const activity = {
      //create thing to be pushed
      date: date_format,
      description: this.state.description
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
          <InputGroup compact>
            <Input
              style={{ width: "13%" }}
              placeholder="Day"
              onChange={e => this.changeDay(e.target.value)}
            />
            <Input
              style={{ width: "30%" }}
              placeholder="Month"
              onChange={e => this.changeMonth(e.target.value)}
            />
            <Input
              style={{ width: "20%" }}
              placeholder="Year"
              onChange={e => this.changeYear(e.target.value)}
            />
          </InputGroup>
          <p />
          <TextArea
            rows={4}
            style={{ width: "50%" }}
            placeholder="built a rocketship, ran a marathon, etc..."
            onChange={e => this.changeDescription(e.target.value)}
          />
          <p />
          <Button type="primary" onClick={() => this.submitLog()}>
            {" "}
            Log My Activity!{" "}
          </Button>{" "}
          <br />
        </div>
      );
    } else {
      return (
        <div className="input">
          <BreakTimer />
          <p type="inputform">You deserve a break!</p>
          <Button type="primary" onClick={() => this.doItAgainClicked()}>
            Do it Again!
          </Button>
        </div>
      );
    }
  }
}

export default InputForm;
