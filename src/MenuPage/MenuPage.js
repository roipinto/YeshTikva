import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import './MenuPage.css';





class MenuPage extends Component {
  render() {
    return (

      <div class="MenuPage">

        <div class="jumbotron jumbotron-fluid py-1">
          <div class="container">
            <div class="display-4">לוח בקרה למשתמש</div>
          </div>
        </div>



        <section id="boxes" class="py-3">
          <div class="row justify-content-md-center ">


            <div class="col-md-3 py-2">
              <div class="card text-center text-black-50 bg-light ">
                <div class="card-body">
                  <a href="/ShiftDashboard" class="btn btn-outlone-secondary text-secondary text-black-50">
                    <h3> לוח משמרות   </h3>
                  </a>
                </div>
              </div>
            </div>


            <div class="col-md-3 py-2">
              <div class="card text-center text-black-50 bg-light ">
                <div class="card-body">
                  <a href="/EditEventsPage" class="btn btn-outlone-secondary text-secondary text-black-50">
                    <h3> עדכן עמוד אירועים  </h3>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="boxes" class="py-3">
          <div class="row justify-content-md-center ">


            <div class="col-md-3 py-2">
              <div class="card text-center text-black-50 bg-light ">
                <div class="card-body">
                  <a href="PatientDashboard" class="btn btn-outlone-secondary text-secondary text-black-50">
                    <h3> לוח מטופלים </h3>
                  </a>
                </div>
              </div>
            </div>


            <div class="col-md-3 py-2">
              <div class="card text-center text-black-50 bg-light ">
                <div class="card-body">
                  <a href="/CoordinatorDashboard" class="btn btn-outlone-secondary text-secondary text-black-50">
                    <h3> לוח רכזים </h3>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </section>
        <section id="boxes" class="py-3">
          <div class="row justify-content-md-center ">

            <div class="col-md-3 py-2">
              <div class="card text-center text-black-50 bg-light ">
                <div class="card-body">
                  <a href="VolunteerRequestDashboard" class="btn btn-outlone-secondary text-secondary text-black-50">
                    <h3>  בקשות התנדבות </h3>
                  </a>
                </div>
              </div>
            </div>



            <div class="col-md-3 py-2">
              <div class="card text-center text-black-50 bg-light ">
                <div class="card-body">
                  <a href="VolunteerDashboard" class="btn btn-outlone-secondary text-secondary text-black-50">
                    <h3>  לוח מתנדבים </h3>
                  </a>
                </div>
              </div>
            </div>



          </div>
        </section>



        <section id="boxes" class="py-3">
          <div class="row justify-content-md-center ">
            <div class="col-md-3 py-2">
              <div class="card text-center text-black-50 bg-light ">
                <div class="card-body">
                  <a href="" class="btn btn-outlone-secondary text-secondary text-black-50">
                    <h3>  הוסף או הסר משתמש   </h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>





      </div>

    );
  }
}


export default MenuPage;

