import React, { Component } from 'react';
import './MenuPage.css';
import MyTitle from '../Title';





class MenuPage extends Component {
  render() {
    return (

      <div class="MenuPage">
        <MyTitle title="לוח בקרה למשתמש" />

        <section id="boxes" class="py-3">
          <a href="/ShiftDashboard" class="btn btn-outline-primary btn-ctrl-panel">לוח משמרות</a>
          <a href="/EditEventsPage" class="btn btn-outline-primary btn-ctrl-panel">עדכן עמוד אירועים</a>
        </section>

        <section id="boxes" class="py-3">
        <a href="PatientDashboard" class="btn btn-outline-primary btn-ctrl-panel">לוח מטופלים</a>
        <a href="/CoordinatorDashboard" class="btn btn-outline-primary btn-ctrl-panel">לוח רכזים</a>
        </section>


        <section id="boxes" class="py-3">
        <a href="VolunteerRequestDashboard" class="btn btn-outline-primary btn-ctrl-panel">בקשות התנדבות</a>
        <a href="VolunteerDashboard" class="btn btn-outline-primary btn-ctrl-panel">לוח מתנדבים</a>
        </section>



        <section id="boxes" class="py-3">

        <a href="" class="btn btn-outline-primary btn-ctrl-panel">הוסף או הסר משתמש</a>
        <a href="" class="btn btn-outline-primary btn-ctrl-panel">הגדרות</a>
        </section>




      </div>

    );
  }
}


export default MenuPage;

