import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import "./App.css"
import "./Profile.css";
import Graph from "./Graph.js"
import firebase from "./Firebase.js";
import { Row, Col } from 'antd';

export default class Profile extends React.Component {

  state={
    name: "",
    email: "",

    activities: [],
    num_activities_today: 0,
    activities_count: 0,
  }

  componentDidMount=()=>{
    // set the state with the current user info
    if (firebase.auth().currentUser) {
      //get the current user, if its not null
      var user = firebase.auth().currentUser;
      this.setState({ name: user.displayName, email: user.email }); //set the state with the info

      const activitiesRef = firebase.database().ref("users/" + user.displayName ); //reference to the database, for the specific user
      //do something with the data
      activitiesRef.on("value", (snapshot) => {
        console.log( "snapshot")
        console.log( snapshot.val() );
  
        var returnArr = [];
        snapshot.forEach(function(childSnapshot) { // for each activity
            var item = childSnapshot.val();
    
            returnArr.push(item); //add it to this array
        });
  
       this.setState( {activities: returnArr } );
       this.getTodaysStats();
       
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    }

  }

  countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}


  getTodaysStats=()=>{
    let today = new Date(); //get the current date
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let todays_date = monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();

    let alldata = this.state.activities;

    //get an array of each date ONCE
    let datesONCE = [];
    //get an array of all the dates
    let datesALL = [];

    for( let i = 0; i < alldata.length; i ++ ){
        let testDate = alldata[i].date;
        datesALL.push( testDate ); //add them all to this one
        if( !datesONCE.includes( testDate ) ){ //add each one once to this one
            datesONCE.push( testDate )
        }
    }

    console.log( "activities completed today: ")
    let numActivitiesToday = this.countInArray( datesALL, todays_date );
    this.setState({num_activities_today: numActivitiesToday, activities_count: alldata.length} )
  }


  //map all the activities
  mapItems= () => {
    let data = this.state.activities;
        return data.map( 
          (item) => 
          {return   <div> 
              <Typography align = "center" component="h5" variant="h5" gutterBottom color="inherit">
                {item.description}
              </Typography>
              <Typography align = "center" component="h6" variant="subtitle1" gutterBottom color="inherit" inline>
                {item.date}
              </Typography>
          </div>
          }
        )
  }

  handleClick = e => {
    this.props.history.push("/app");
  };


  render() {
    return (
      <div className="Profile" >
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
        <br/>
      <Row>
        <Col span={12}>
          <Typography component="h2" variant="h2" gutterBottom color="inherit" align="center" >
            Activity Log
          </Typography>
          <div >
            {this.mapItems()}
          </div>
          <br/>
        </Col>

        <Col span={12}>
          <Typography component="h2" variant="h2" gutterBottom color="inherit" align="center">
            Summary
          </Typography>
          <Typography component="h5" variant="h5" gutterBottom color="inherit" align="center">
            Activities Completed Today: {this.state.num_activities_today}
          </Typography>
          <Typography component="h5" variant="h5" gutterBottom color="inherit" align="center" >
            Total Activities Completed: {this.state.activities_count}
          </Typography>
          <br/>
          <div>
          {  (this.state.activities.length !== 0) ? 
                      <Graph data={this.state.activities}/>: null } 
          </div>
          <br />
        </Col>
      </Row>
      </div>
    );
  }
}

