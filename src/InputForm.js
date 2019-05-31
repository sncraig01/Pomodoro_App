import React from "react";
import "antd/dist/antd.css";
import "./InputForm.css";
import { Input } from "antd";
import firebase from "./Firebase.js";
import BreakTimer from "./breakTimer";
import { Radio } from 'antd';


const InputGroup = Input.Group; //needed for ant design input groups
const { TextArea } = Input;

class InputForm extends React.Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    description: "",
    submitted: false,

    catagory: "",
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
      today.getMinutes().toString().length === 1
        ? "0" + today.getMinutes()
        : today.getMinutes();
    let hours =
      today.getHours().toString().length === 1
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
      time: time_format,
      catagory: this.state.catagory,
    };
    usersRef.push(activity); //push the data to the database
  };

  doItAgainClicked = () => {
    //to be called when they click the "Do It Again!" button
    this.props.action();
    this.setState({ submitted: false }); //reset the page
  };


  //cant delete this, but we dont have to have it do anything for the catagory buttons
  onChange = (e) => {

  }

  //sets the catagory
  onClickA = () => {
    this.setState( {catagory: "Work"})
  }
  onClickB = () => {
    this.setState( {catagory: "School"})
  }
  onClickC = () => {
    this.setState( {catagory: "Hobbies"})
  }
  onClickD = () => {
    this.setState( {catagory: "Chores"})
  }
  onClickE = () => {
    this.setState( {catagory: "Other"})
  }
  

  render() {
    if (!this.state.submitted) {
      return (
        <div className="input">
          <h1 type="timer"> Way to go! </h1>
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
          <p type="inputform"> Category: </p>
          <div>    
            <Radio.Group onChange={ () => this.onChange()} defaultValue="a">
              <Radio.Button onClick={() => this.onClickA() }value="a">Work</Radio.Button>
              <Radio.Button onClick={() => this.onClickB() }value="b">School</Radio.Button>
              <Radio.Button onClick={() => this.onClickC() }value="c">Hobbies</Radio.Button>
              <Radio.Button onClick={() => this.onClickD() }value="d">Chores</Radio.Button>
              <Radio.Button onClick={() => this.onClickE() }value="e">Other</Radio.Button>
            </Radio.Group>
          </div>
          <br/> 
          <button type="pretty" onClick={() => this.submitLog()}>
            {" "}
            Log My Activity!{" "}
          </button>{" "}
          <br />
        </div>
      );
    } else {
      return (
        <div className="input">
          <BreakTimer doItAgainClicked={this.doItAgainClicked} />
        </div>
      );
    }
  }
}

export default InputForm;

