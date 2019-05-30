import React from "react";
import "./pom.css";

export default class Pom extends React.Component {
  constructor(props) {
    super(props);
  }
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
        <p>There are six steps in the original technique:</p>
        <p type="list">
          1. Decide task. <br />
          2. Start timer. <br />
          3. Work on task. <br />
          4. Stop working when timer ends. Log what was accomplished. <br />
          5. For the first four pomodoros, take a short break. Then, go back to
          step 2. <br />
          6. After four pomodoros, take a 15-20 minute break. Then, go back to
          step 1.
        </p>
        <p>
          These steps effectively divide the pomodoros into reps in set, much
          like a gym workout plan. Logging completed work rewards you with
          accomplishment and planning allows you to accurately estimate the
          effort and time required for every task. The goal of this method is to
          optimize efficieny and success.
        </p>
      </div>
    );
  }
}
