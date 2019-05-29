import React, { Component } from "react";
import "./App.css";

class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 1500000
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
        alert("Countdown ended");
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

  render() {
    let seconds = (
      "0" +
      (Math.floor((this.state.timerTime / 1000) % 60) % 60)
    ).slice(-2);
    let minutes = ("0" + Math.floor((this.state.timerTime / 60000) % 60)).slice(
      -2
    );

    return (
      <div className="Countdown">
        <div className="Countdown-time">
          {minutes} : {seconds}
        </div>
        <div className="Countdown-header" />
        <div className="Countdown-display">
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
          {(this.state.timerOn === false || this.state.timerTime < 1000) &&
            (this.state.timerStart !== this.state.timerTime &&
              this.state.timerStart > 0) && (
              <button onClick={this.resetTimer}>Reset</button>
            )}
        </div>
      </div>
    );
  }
}

export default Timer;
