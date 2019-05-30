import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import AccountCircle from "@material-ui/icons/AccountCircle";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    // Redirects to profile page
    this.props.history.push( "/profile")

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
              Your Profile
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
