import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SvgIcon from "@material-ui/core/SvgIcon";
import Fab from "@material-ui/core/Fab";

export default class Profile extends React.Component {
  handleClick = e => {
    this.props.history.push("/app");
  };

  render() {
    return (
      <div align="center">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.handleClick} color="inherit">
              <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
              </SvgIcon>
            </IconButton>
            <Typography variant="h6" color="inherit">
              Profile
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Fab variant="extended">Log Out</Fab>
        <br />
        <br />
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          color="textPrimary"
        >
          Summary
        </Typography>
        <h3>Activities Completed Today: </h3>
        <h3>Total Activities Completed: </h3>
        <br />
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          color="textPrimary"
        >
          Activity Log
        </Typography>
        <h3>Activity1</h3>
        <p inline>Date1</p>
        <h3>Activity2</h3>
        <p inline>Date2</p>
        <h3>Activity3</h3>
        <p inline>Date3</p>
      </div>
    );
  }
}
