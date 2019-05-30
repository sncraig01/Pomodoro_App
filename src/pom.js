import React from "react";

export default class Pom extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.history.push("/app");
  };

  render() {
    return (
      <div>
        <br />
        <h1>The Pomodoro Technique</h1>
        <h3>Background</h3>
        <p>
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. Traditionally, the method uses a
          timer to break down work into intervals of 25 minutes with 5 minutes
          of rest between each work interval. Each interval is called a{" "}
          <i>pomodoro</i>, from the Italian word for 'tomato,' due to the
          tomato-shaped kitchen timer Cirillo orginally used at university.{" "}
        </p>
        <br />
        <h3>Principles of the Pomodoro Technique</h3>
        <p>
          The first step in the method is planning. Once the task is decided,
          start the timer to begin the pomodoro. You work on the task until the
          timer stops. When timer ends, log what was accomplished. For the first
          four pomodoros, take a short break between each. After a set of four,
          take a 15-20 minute break. Then, go back to planning. <br />
          These steps effectively divide the pomodoros into reps in set, much
          like a gym workout plan. Logging completed work rewards you with
          accomplishment and planning allows you to accurately estimate the
          effort and time required for every task. The goal of this method is to
          optimize efficieny and success.
        </p>
        <button onClick={this.handleClick}>Return to Timer</button>
      </div>
    );
  }
}
