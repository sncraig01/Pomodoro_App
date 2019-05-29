import React from "react";
import "antd/dist/antd.css";
import "./InputForm.css";
import { Input, Button } from "antd";
import firebase from "./Firebase.js";

const InputGroup = Input.Group; //needed for ant design input groups
const { TextArea } = Input;

class InputForm extends React.Component {
  state = {
    name: "",
    day: "",
    month: "",
    year: "",
    activity: ""
  };

  //change state as user inputs something
  changeName = text => {
    this.setState({ name: text });
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
  changeActivity = text => {
    this.setState({ activity: text });
  };

  submitLog = () => {
    const usersRef = firebase.database().ref("users"); //reference to the database "users" key
    let date_format =
      this.state.month + " " + this.state.day + ", " + this.state.year;

    const user = {
      //create thing to be pushed
      name: this.state.name,
      date: date_format,
      activity: this.state.activity
    };
    usersRef.push(user); //push the data to the database
  };

  render() {
    return (
      <div className="input">
        <h1> Way to go! </h1>
        <br />
        <Input
          style={{ width: "40%" }}
          defaultValue="Name"
          onChange={e => this.changeName(e.target.value)}
        />
        <br />
        <InputGroup compact>
          <Input
            style={{ width: "13%" }}
            defaultValue="Day"
            onChange={e => this.changeDay(e.target.value)}
          />
          <Input
            style={{ width: "30%" }}
            defaultValue="Month"
            onChange={e => this.changeMonth(e.target.value)}
          />
          <Input
            style={{ width: "20%" }}
            defaultValue="Year"
            onChange={e => this.changeYear(e.target.value)}
          />
        </InputGroup>
        <p />
        <p>What did you do? </p>
        <TextArea
          rows={4}
          style={{ width: "50%" }}
          defaultValue="built a rocketship, ran a marathon, etc..."
          onChange={e => this.changeActivity(e.target.value)}
        />
        <p />
        <Button type="primary" onClick={() => this.submitLog()}>
          {" "}
          Log My Activity!{" "}
        </Button>{" "}
        <Button type="primary" onClick={this.props.action}>
          Do it Again!
        </Button>
        <br />
      </div>
    );
  }
}

export default InputForm;
