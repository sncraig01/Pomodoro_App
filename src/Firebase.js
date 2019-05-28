import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtxBUBFM2hbjveCX9CId9rxo_YXJGczKQ",
    authDomain: "pomodoro-app-59650.firebaseapp.com",
    databaseURL: "https://pomodoro-app-59650.firebaseio.com",
    projectId: "pomodoro-app-59650",
    storageBucket: "pomodoro-app-59650.appspot.com",
    messagingSenderId: "204615253128",
    appId: "1:204615253128:web:23b01ecd9fe7a7e1"
  };

  firebase.initializeApp( firebaseConfig);

  export default firebase; 