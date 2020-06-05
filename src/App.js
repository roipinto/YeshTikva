import React, { Component } from 'react';
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
import InformationForVolunteer from './InformationForVolunteer/InformationForVolunteer';
import ContectUs from './ContectUs/ContectUs';
import AddOrRemove from './AddOrRemove/AddOrRemove';
import Properties from './Properties/Properties';
import './App.css';
import { Redirect } from 'react-router-dom'

const style = {
  position: "relative",
  margin: "50px auto"
}


class App extends Component {

  onDayClick = (e, day) => {
    alert('כמות משמרות');

  }


  render() {

    return (

      <BrowserRouter>

        <div className="App">

          <ToolbarConnect />
          <ToolbarNotConnect />


          <Route exact path="/"><Redirect to="/HomePage" /> : <HomePage /></Route>
          <Route path="/HomePage" component={HomePage} />
          <Switch>
            <Route path=" " component={HomePage} />
            <Route path="/Information" component={Information} />
            <Route path="/EditEventsPage" component={EditEventsPage} />
            <Route path="/ShiftDashboard" component={ShiftDashboard} />
            <Route path="/PatientDashboard" component={PatientDashboard} />
            <Route path="/VolunteerDashboard" component={VolunteerDashboard} />
            <Route path="/CoordinatorDashboard" component={CoordinatorDashboard} />
            <Route path="/VolunteerRequestDashboard" component={VolunteerRequestDashboard} />
            <Route path="/Join" component={Join} />
            <Route path="/Statistics" component={Statistics} />
            <Route path="/Events" component={Events} />
            <Route path="/MenuPage" component={MenuPage} />
            <Route path="/InformationForVolunteer" component={InformationForVolunteer} />
            <Route path="/ContectUs" component={ContectUs} />
            <Route path="/AddOrRemove" component={AddOrRemove} />
            <Route path="/Properties" component={Properties} />
          </Switch>

        </div>
      </BrowserRouter>


    );
  }
}


export default App;