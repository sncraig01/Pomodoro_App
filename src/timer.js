import React, { Component } from "react";
import InputForm from "./InputForm.js";
import firebase from "./Firebase.js";
import "./timer.css";

class Timer extends Component {
  state = {
    name: "",
    email: "",

    timerOn: false,
    timerStart: 0,
    timerTime: 2000, //25 minutes. timerTime is how much time is left
    collectInput: false
  };

  componentDidMount = () => {
    if (firebase.auth().currentUser) {
      //get the current user, if its not null
      var user = firebase.auth().currentUser;
      this.setState({ name: user.displayName, email: user.email }); //set the state with the info
    }
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        this.setState({ collectInput: true });
      }
    }, 10);
  };

  //clears interval and turns the timer off in the state
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  //first checks to make sure the timer is off and then resets the timerTime to the timerStart time
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({ timerTime: 1500000 });
    }
  };

  //triggered when the "do it again!" button is pressed in inputForm.js. It resets the state to the original conition to reset the system
  newActivity = () => {
    this.setState({ collectInput: false, timerStart: 0, timerTime: 2000 });
  };

  learnMore = () => {
    this.props.history.push("/info");
  };

  render() {
    //the seconds and minutes allow the user to see the time broken down neatly as such
    let seconds = (
      "0" +
      (Math.floor((this.state.timerTime / 1000) % 60) % 60)
    ).slice(-2);
    let minutes = ("0" + Math.floor((this.state.timerTime / 60000) % 60)).slice(
      -2
    );

    if (this.state.name === "") {
      this.componentDidMount();
    }

    return (
      //the return starts with a ternany operator that checks whether we want to collect input or not. if we do it calls up
      //InputForm.js and if not it has the timer set up to run. The timer has a bunch of logic that looks at all the state conditions
      //and based on the combination displays different buttons with distinct functionality
      <div>
        {this.state.collectInput === true ? (
          (<InputForm />,
          (
            <InputForm
              name={this.state.name}
              email={this.state.email}
              action={this.newActivity}
            />
          ))
        ) : (
          <header type="timer">
            <h1 type="timer"> Welcome! </h1>
            <p type="timer">
              {" "}
              Click start to begin using the Pomodoro method. If you don't know
              what it is...
            </p>
            <br />
            <button type="timer" onClick={this.learnMore}>
              Learn More Here
            </button>
            <h2 type="timer" style={{ color: "white" }}>
              {minutes} : {seconds}
            </h2>
            <div>
              {this.state.timerOn === false &&
                (this.state.timerStart === 0 ||
                  this.state.timerTime === this.state.timerStart) && (
                  <button type="timer" onClick={this.startTimer}>
                    Start
                  </button>
                )}
              {this.state.timerOn === true && this.state.timerTime >= 1000 && (
                <button type="timer" onClick={this.stopTimer}>
                  Stop
                </button>
              )}
              {this.state.timerOn === false &&
                (this.state.timerStart !== 0 &&
                  this.state.timerStart !== this.state.timerTime &&
                  this.state.timerTime !== 0) && (
                  <button type="timer" onClick={this.startTimer}>
                    Resume
                  </button>
                )}
              {this.state.timerOn === false &&
                (this.state.timerStart !== this.state.timerTime &&
                  this.state.timerStart > 0) && (
                  <button type="timer" onClick={this.resetTimer}>
                    Reset
                  </button>
                )}
            </div>
          </header>
        )}
      </div>
    );
  }
}

export default Timer;
