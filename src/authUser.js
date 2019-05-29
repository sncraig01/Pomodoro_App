import React from "react";
import firebase from './Firebase.js'
import './authUser.css'

/* FOR FIREBASE UI AUTHENTICATION */

var firebaseui = require('firebaseui'); //necessary for FirebaseUI Authentication

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

//Configuration
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/app', //if sign in is successful, route to the /app page
  signInOptions: [
    // We only want email authorization
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};



export default class AuthUser extends React.Component {

  componentDidMount=()=>{
    /*
    let username = "";
    let useremail = "";

    firebase.auth().onAuthStateChanged( function(user) {
      if (user) {
        console.log( "there is a user ");
        username = user.displayName;
        useremail = user.email;

      } else{
        console.log ("no user" );
      }

    });

    console.log( username );
    console.log( useremail );

    */


    //this.setState( {displayName: username, email: useremail}) // set the state with the current user's name and email
  }




  render() {

    return (
      <div className="App">
        <h1> Welcome to the Pomodoro Tracker! </h1>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
        { ui.start('#firebaseui-auth-container', uiConfig) }
      </div>
    );
  }
}


 /*
  state = {
    username: "",
    password: ""
  };

  handleClick = e => {
    e.preventDefault();
    //if they entered something for both username and password
    if (this.state.username && this.state.password) {
        let email = this.state.username;
        let password = this.state.password;
  

    }

    //if it's verified, use the router to go to the app page
    this.props.history.push('/app');
  };
*/


/*
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

        */