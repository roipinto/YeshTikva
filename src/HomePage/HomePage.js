import React, { Component } from 'react';
import Picture1 from '../img/Picture1.jpg';
import Picture2 from '../img/Picture2.jpg';
import Picture3 from '../img/Picture3.jpg';
import Picture4 from '../img/Picture4.jpg';
import './HomePage.css';
import MyTitle from '../Title';






class Home extends Component {
  render() {
    return (
      <div className="Home">

        <MyTitle title="!הצטרף לעמותת יש תקווה" />

        <div class="jumbotron-fluid " id="sentence">
          <div class="container">
            <p class="lead">יש תקווה מטרתה לסייע בשמירה על חולים בלה בלה בלה</p>

            <a href="/Events" class="btn btn-info">אירועים ומפגשים</a>
            <a href="/InformationForVolunteer" class="btn btn-info">מידע למתנדב</a>
            <a href="/Information" class="btn btn-info">מידע על העמותה</a>
            <a href="Join" class="btn btn-info btn-light joinbut">הרשם כמתנדב חדש</a>

            


          </div>
        </div>

        <div id="cont"> <a href="ContectUs" class="btn btn-light contbut">צור קשר</a> </div>

        <div id="images">
          <section id="boxes" class="py-3">
            <div class="row justify-content-md-center mdb-lightbox no-margin">
              <div class="py-2 image" >
                <img src={Picture1} width="300" height="240" alt=""></img>
                <img src={Picture2} width="300" height="240" alt=""></img>
                <img src={Picture3} width="300" height="240" alt=""></img>
                <img src={Picture4} width="300" height="240" alt=""></img>
              </div>
            </div>
          </section>
        </div>

        

      </div>
    );
  }
}


export default Home;

