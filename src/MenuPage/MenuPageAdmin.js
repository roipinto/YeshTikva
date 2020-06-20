import React, { Component } from 'react';
import MyTitle from '../Title';
import './MenuPage.css';



class MenuPage extends Component {

  render() {
    return (

      <div class="MenuPage">
        <MyTitle title="לוח בקרה למשתמש" />
        
        <section id="boxes" class="py-3">
        <p></p> <br/>
          <a href="/ShiftDashboard" class="btn btn-outline-primary btn-ctrl-panel">לוח משמרות</a>
          <a href="/EditEventsPage" class="btn btn-outline-primary btn-ctrl-panel">עדכן עמוד אירועים</a>
        </section>

        <section id="boxes" class="py-3">
          <a href="PatientDashboard" class="btn btn-outline-primary btn-ctrl-panel">לוח מטופלים</a>
          <a href="VolunteerDashboard" class="btn btn-outline-primary btn-ctrl-panel">לוח מתנדבים</a>
          
        </section>


        <section id="boxes" class="py-3">
          <a href="/CoordinatorDashboard" class="btn btn-outline-primary btn-ctrl-panel">לוח רכזים</a>
          <a href="VolunteerRequestDashboard" class="btn btn-outline-primary btn-ctrl-panel btttt">בקשות התנדבות</a>
          
        </section>

        <section id="boxes" class="py-3">
          <a href="Properties" class="btn btn-outline-primary btn-ctrl-panel">הגדרות</a>
          <p></p><br/>
        </section>
      </div>

    );
  }
}


export default MenuPage;

