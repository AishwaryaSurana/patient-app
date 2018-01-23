import React, { Component } from 'react';
import firebase from 'firebase';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
import MessageList from './components/MessageList';

var  config = {
  apiKey: "AIzaSyAZ0rZpUWLOSaV_MtTS1Ac1LpbBanha40Q",
  authDomain: "patient-app-5398d.firebaseapp.com",
  databaseURL: "https://patient-app-5398d.firebaseio.com",
  projectId: "patient-app-5398d",
  storageBucket: "patient-app-5398d.appspot.com",
  messagingSenderId: "210548345157"
};

firebase.initializeApp(config);
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
  </div>


    );
  }
}

export default App;