import React, { Component, useState } from 'react';
import Picture1 from '../img/Picture1.jpg';
import Picture2 from '../img/Picture2.jpg';
import Picture3 from '../img/Picture3.jpg';
import Picture4 from '../img/Picture4.jpg';
import './HomePage.css';
import MyTitle from '../Title';
import Upload from '../Properties/Upload';
import firebase, { storage, auth, database } from '../Firebase/Firebase';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      url1: '',
      url2: '',
      url3: '',
      url4: ''
    }
    this.getImage1('url1')
    this.getImage2('url2')
    this.getImage3('url3')
    this.getImage4('url4')
  }


  getImage1(image) {
    let { state } = this
    storage.ref("images/").child('1.JPG').getDownloadURL().then((url) => {
      state[image] = url
      this.setState(state)
    }).catch((error) => {
      // Handle any errors
    })
  }

  getImage2(image) {
    let { state } = this
    storage.ref("images/").child('2.JPG').getDownloadURL().then((url) => {
      state[image] = url
      this.setState(state)
    }).catch((error) => {
      // Handle any errors
    })
  }


  getImage3(image) {
    let { state } = this
    storage.ref("images/").child('3.JPG').getDownloadURL().then((url) => {
      state[image] = url
      this.setState(state)
    }).catch((error) => {
      // Handle any errors
    })
  }

  getImage4(image) {
    let { state } = this
    storage.ref("images/").child('4.JPG').getDownloadURL().then((url) => {
      state[image] = url
      this.setState(state)
    }).catch((error) => {
      // Handle any errors
    })
  }

  /*
  <a href="/Information" class="btn btn-info">על העמותה</a>
              <a href="/InformationForVolunteer" class="btn btn-info">מידע למתנדב</a>
              <a href="/Events" class="btn btn-info">אירועים ומפגשים</a>
  
              */
  render() {
    return (
      <div className="Home">

        <MyTitle title="הצטרף לעמותת יש תקווה" />


        <div class="jumbotron-fluid " id="sentence">
          <div class="container">
            <div class="lead">עמותת 'יש תקווה' הוקמה על מנת להעניק ליווי וסיוע לחולים,
            אשר נאלצים להתאשפז לתקופות ארוכות או להגיע לבדיקות וטיפולים בבתי חולים באופן תדיר.
            </div>


            <a href="Join" class="btn btn-info btn-light joinbut">הרשם כמתנדב חדש</a>



          </div>
        </div>

        <div id="cont"> <a href="ContectUs" class="btn btn-light contbut">צור קשר</a> </div>

        <div id="images">
          <section id="boxes" class="py-3">
            <div class="row justify-content-md-center mdb-lightbox no-margin">
              <div class="py-2 image" >

                <span class="span2"> <img src={this.state.url1} width="320" height="240" alt=""></img> </span>
                <span class="span2"> <img src={this.state.url2} width="320" height="240" alt=""></img> </span>
                <span class="span2"> <img src={this.state.url3} width="320" height="240" alt=""></img> </span>
                <span class="span2"> <img src={this.state.url4} width="320" height="240" alt=""></img> </span>

              </div>
            </div>
          </section>
        </div>



      </div>
    );
  }
}


export default Home;

