import React from "react";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Route, Link } from "react-router-dom";
import App from "./App.js";
import firebase from "./Firebase.js";

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


