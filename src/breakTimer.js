import React, { Component } from "react";
import "./timer.css";

class BreakTimer extends Component {
  state = {
    timerTime: 300000, //5 minutes. timerTime is how much time is left
    newPage: true
  };

  //setInterval repeats the given function at every given time-interval as written in milliseconds
  startTimer = () => {
    this.setState({ newPage: false });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
      }
    }, 10);
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
        {this.state.newPage === true ? this.startTimer() : <div />}
        <h2 type="timer" style={{ color: "white" }}>
          {minutes} : {seconds}
        </h2>
      </div>
    );
  }
}

export default BreakTimer;
