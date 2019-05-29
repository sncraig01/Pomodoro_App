import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Route, Link } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    // Redirects to profile page
    this.props.history.push("/profile");
  };
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.handleClick} color="inherit">
              <AccountCircle />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Pomodoro Tracker
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
