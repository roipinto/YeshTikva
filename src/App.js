import React, { Component } from 'react';

import firebase, { storage , auth , database } from './Firebase/Firebase';
//import logo from './img/logo.jpg';
import HomePage from './HomePage/HomePage.js';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuPage from './MenuPage/MenuPage';
import Events from './Events/Events';
import Information from './Information/Information';
import ShiftDashboard from './Shift/ShiftDashboard';
import CoordinatorDashboard from './Coordinator/CoordinatorDashboard';
import PatientDashboard from './Patient/PatientDashboard';
import EditEventsPage from './EditEventsPage/EditEventsPage';
import VolunteerDashboard from './Volunteer/VolunteerDashboard';
import VolunteerRequestDashboard from './VolunteerRequest/VolunteerRequestDashboard';
import Join from './Join/Join';
import Statistics from './Statistics/Statistics';
import ToolbarNotConnect from './Toolbar/ToolbarNotConnect';
import ToolbarConnect from './Toolbar/ToolbarConnect';
import Toolbar from './Toolbar/Toolbar';
import InformationForVolunteer from './InformationForVolunteer/InformationForVolunteer';
import ContectUs from './ContectUs/ContectUs';
import AddOrRemove from './AddOrRemove/AddOrRemove';
import Properties from './Properties/Properties';
import Upload from './Properties/Upload';
import './App.css';
import { Redirect } from 'react-router-dom'
import Home from './HomePage/HomePage.js';
//import firebase from './Firebase/Firebase';

const style = {
  position: "relative",
  margin: "50px auto"
}


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  logout() {
    auth.signOut();
}

  onDayClick = (e, day) => {
    alert('כמות משמרות');
  }

/* <Toolbar/>
*/
  render() {

    return (

      <BrowserRouter>
        <div className="App">

        <Toolbar/>

        {this.state.user ? (
          <div>
            
        
        <Switch>
        <Route path="/EditEventsPage" component={EditEventsPage} />
        <Route path="/ShiftDashboard" component={ShiftDashboard} />
        <Route path="/PatientDashboard" component={PatientDashboard} />
        <Route path="/VolunteerDashboard" component={VolunteerDashboard} />
        <Route path="/CoordinatorDashboard" component={CoordinatorDashboard} />
        <Route path="/VolunteerRequestDashboard" component={VolunteerRequestDashboard} />
        <Route path="/Statistics" component={Statistics} />
        <Route path="/AddOrRemove" component={AddOrRemove} />
        <Route path="/Properties" component={Properties} />
        <Route path="/MenuPage" component={MenuPage} />
        </Switch>
        </div>
      ) :
        (
          console.log("Not log in")
        )}


          <Route exact path="/"><Redirect to="/HomePage" /> : <HomePage /></Route>
          
          <Switch>
          <Route path="/HomePage" component={HomePage} />
            <Route path=" " component={HomePage} />
            <Route path="/Information" component={Information} />
            <Route path="/Join" component={Join} />            
            <Route path="/Events" component={Events} />
            <Route path="/InformationForVolunteer" component={InformationForVolunteer} />
            <Route path="/ContectUs" component={ContectUs} />

          </Switch>

        </div>
      </BrowserRouter>


    );
  }
}


export default App;