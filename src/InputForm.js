import React from "react";
import "antd/dist/antd.css";
import "./InputForm.css";
import { Input, Button } from "antd";
import firebase from "./Firebase.js";

const InputGroup = Input.Group; //needed for ant design input groups
const { TextArea } = Input;

class InputForm extends React.Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    day: "",
    month: "",
    year: "",
    activity: "",

    submitted: false,
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


  //submit the activity they did
  submitLog = () => {
    this.setState( {submitted: true });
    const usersRef = firebase.database().ref("users"); //reference to the database "users" key
    let date_format =
      this.state.month + " " + this.state.day + ", " + this.state.year;

    const user = {
      //create thing to be pushed
      name: this.state.name,
      date: date_format,
      activity: this.state.activity,
      email: this.state.email,
    };
    usersRef.push(user); //push the data to the database
  };


  doItAgainClicked=()=>{ //to be called when they click the "Do It Again!" button
    this.props.action();
    this.setState( {submitted: false} ); //reset the page
  }


  render() {
    if( !this.state.submitted ){
      return (
        <div className="input">
          <h1> Way to go! </h1>
          <br />
          <div> Name: {this.state.name} </div>
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
<<<<<<< HEAD
        </InputGroup>
        <p />
        <p>What did you do? </p>
        <TextArea
          rows={4}
          style={{ width: "50%" }}
          placeholder="built a rocketship, ran a marathon, etc..."
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
=======
          <p />
          <Button type="primary" onClick={() => this.submitLog()}>
            {" "}
            Log My Activity!{" "}
          </Button>{" "}
          <br />
        </div>
      );
    } else {
      return(
        <div className="input">
          <Button type="primary" onClick={() => this.doItAgainClicked()}>
            Do it Again!
          </Button>
        </div>
      )
    }  
>>>>>>> c31aa3bcdda27c5cae93cc6cb8dd5ae890338ad6
  }
}

export default InputForm;
