import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Route, Link } from "react-router-dom";
import App from "./App.js";

export default class AuthUser extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
        this.props.history.push('/app');
    }
  };

  render() {
    return (
      <div className="App">
        <br />
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          color="textPrimary"
        >
          User Login
        </Typography>
        <form onSubmit={e => this.handleClick(e)}>
          <Input
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
            required
          />
          <br />
          <br />
          <Input
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            required
          />
          <br />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
