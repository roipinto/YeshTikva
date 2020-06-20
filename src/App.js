import React, { Component } from 'react';

import firebase from './Firebase/Firebase';

//import logo from './img/logo.jpg';
import HomePage from './HomePage/HomePage.js';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuPageAdmin from './MenuPage/MenuPageAdmin';
import MenuPageCoor from './MenuPage/MenuPageCoor';
import Events from './Events/Events';
import Information from './Information/Information';
import ShiftDashboard from './Shift/ShiftDashboard';
import CoordinatorDashboard from './Coordinator/CoordinatorDashboard';
import PatientDashboard from './Patient/PatientDashboard';
import EditEventsPage from './EditEventsPage/EditEventsPage';
import VolunteerDashboard from './Volunteer/VolunteerDashboard';
import VolunteerRequestDashboard from './VolunteerRequest/VolunteerRequestDashboard';
import Join from './Join/Join';
import ToolbarUser from './Toolbar/ToolbarUser';
import ToolbarVol from './Toolbar/ToolbarVol';
import InformationForVolunteer from './InformationForVolunteer/InformationForVolunteer';
import ContectUs from './ContectUs/ContectUs';
import Properties from './Properties/Properties';
import './App.css';
import { Redirect } from 'react-router-dom'
import Login from './Toolbar/Login';
//import PageNotFound from './PageNotFound';


//import firebase from './Firebase/Firebase';

const style = {
  position: "relative",
  margin: "50px auto"
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loading: null,
      role: null,
    }
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
    this.checkRole = this.checkRole.bind(this);
    this.funcs = this.funcs.bind(this);
    this.uName = '';
  }

  componentDidMount() {
    this.state.loading = this.funcs();
  }

  funcs() {
    let a = this.authListener();
    let b = this.checkRole();
    if (a === b && a === 'true') {
      this.setState(state => {
        state.loading = true;
        return state;
      });
    }
    return 'true';
  }

  checkRole() {
    let retVal = null;
    const myData = firebase.database().ref('coordinators').on('value', (snapshot) => {
      let coordinators = snapshot.val();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          let email = user.email;
          for (let coordinator in coordinators) {
            if (coordinators[coordinator].email === email) {
              if (coordinators[coordinator].role === 'admin') {
                retVal = 'adm';
              }
              else if (coordinators[coordinator].role === 'coordinator') {
                retVal = 'coor';
              }
              else {
                retVal = 'vol';
              }
              this.setState(state => {
                state.role = retVal;
                this.uName=coordinators[coordinator].name;
                return state;
              });
              break;
            }
          }
        }
        else {
          const email = 'volunteer';

          this.setState(state => {
            state.role = 'vol';
            return state;
          });
        }
        return 'true';
      });
    });
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
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
    firebase.auth().signOut();

  }

  onDayClick = (e, day) => {
    alert('כמות משמרות');
  }


  render() {
    return (

      <BrowserRouter>
        <div className="App">
          {this.state.loading ? (
            <div>
              {this.state.role === 'adm' ? (
                <div>
                  <ToolbarUser title={this.uName}/>

                  <Route path="/MenuPage" component={MenuPageAdmin} />
                  <Route path="/ShiftDashboard" component={ShiftDashboard} />
                  <Route path="/EditEventsPage" component={EditEventsPage} />
                  <Route path="/PatientDashboard" component={PatientDashboard} />
                  <Route path="/VolunteerDashboard" component={VolunteerDashboard} />

                  <Route path="/Properties" component={Properties} />
                  <Route path="/CoordinatorDashboard" component={CoordinatorDashboard} />
                  <Route path="/VolunteerRequestDashboard" component={VolunteerRequestDashboard} />
                </div>
              ) : (<div></div>)}

              {this.state.role === 'coor' ? (
                <div>
                  <ToolbarUser title={this.uName}/>
                  <Switch>
                  <Route path="/MenuPage" component={MenuPageCoor} />
                  <Route path="/ShiftDashboard" component={ShiftDashboard} />
                  <Route path="/EditEventsPage" component={EditEventsPage} />
                  <Route path="/PatientDashboard" component={PatientDashboard} />
                  <Route path="/VolunteerDashboard" component={VolunteerDashboard} />

                  <Route exact path="/Properties"><Redirect to="/HomePage" /></Route>
                  <Route exact path="/CoordinatorDashboard"><Redirect to="/HomePage" /></Route>
                  <Route exact path="/VolunteerRequestDashboard"><Redirect to="/HomePage" /></Route>
                  </Switch>
                  </div>
              ) : (<div></div>)}
              {this.state.role === 'vol' ? (
                <div>
                  <ToolbarVol />
                  <Switch>
                  <Route exact path="/MenuPage"><Redirect to="/HomePage" /></Route>
                  <Route exact path="/ShiftDashboard"><Redirect to="/HomePage" /></Route>
                  <Route exact path="/EditEventsPage"><Redirect to="/HomePage" /></Route>
                  <Route exact path="/PatientDashboard"><Redirect to="/HomePage" /></Route>
                  <Route exact path="/VolunteerDashboard"><Redirect to="/HomePage" /></Route>

                  <Route exact path="/Properties"><Redirect to="/HomePage" /></Route>
                  <Route exact path="/CoordinatorDashboard"><Redirect to="/HomePage" /></Route>
                  <Route exact path="/VolunteerRequestDashboard"><Redirect to="/HomePage" /></Route>
                  </Switch>
                </div>
              ) : (<div></div>)}

              <Route exact path="/"><Redirect to="/HomePage" /></Route>

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
          ) : (<div>Loading...</div>)
          }
        </div>
      </BrowserRouter >
    );
  }
}


export default App;