import React, { Component } from "react";
import "./timer.css";
import InputForm from "./InputForm.js";

class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 1500000, //25 minutes. timerTime is how much time is left
    collectInput: false
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

  render() {
    //the seconds and minutes allow the user to see the time broken down neatly as such
    let seconds = (
      "0" +
      (Math.floor((this.state.timerTime / 1000) % 60) % 60)
    ).slice(-2);
    let minutes = ("0" + Math.floor((this.state.timerTime / 60000) % 60)).slice(
      -2
    );

    return (
      //the return starts with a ternany operator that checks whether we want to collect input or not. if we do it calls up
      //InputForm.js and if not it has the timer set up to run. The timer has a bunch of logic that looks at all the state conditions
      //and based on the combination displays different buttons with distinct functionality
      <div>
        {this.state.collectInput === true ? (
          (<InputForm />, <InputForm action={this.newActivity} />)
        ) : (
          <div>
            <h2 style={{ color: "white" }}>
              {minutes} : {seconds}
            </h2>
            <div>
              {this.state.timerOn === false &&
                (this.state.timerStart === 0 ||
                  this.state.timerTime === this.state.timerStart) && (
                  <button onClick={this.startTimer}>Start</button>
                )}
              {this.state.timerOn === true && this.state.timerTime >= 1000 && (
                <button onClick={this.stopTimer}>Stop</button>
              )}
              {this.state.timerOn === false &&
                (this.state.timerStart !== 0 &&
                  this.state.timerStart !== this.state.timerTime &&
                  this.state.timerTime !== 0) && (
                  <button onClick={this.startTimer}>Resume</button>
                )}
              {this.state.timerOn === false &&
                (this.state.timerStart !== this.state.timerTime &&
                  this.state.timerStart > 0) && (
                  <button onClick={this.resetTimer}>Reset</button>
                )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Timer;