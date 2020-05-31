import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import {Link} from 'react-router-dom';
import './Information.css';




class Home extends Component {

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
  render() {
    return (
      

        <div>



<nav class="navbar navbar-expand-lg navbar-light bg-light"> 
            <Link to ='/HomePage'>
               <img src={logo} width="50" height="50" alt=""></img>
            </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#home" class="nav-link" data-toggle="modal" data-target="#modalLRForm">התחברות</a>
          </li>
          <li class="nav-item">
            <a href="/MenuPage" class="nav-link">לוח בקרה למשתמש</a>
          </li>
        </ul>
        </div>     
      </nav>



<div class="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog cascading-modal" role="document">
    <div class="modal-content">   
      <div class="modal-c-tabs">
        <div class="tab-content">     
          <div class="tab-pane fade in show active" id="panel7" role="tabpanel">       
            <div class="modal-body mb-1">
              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <input type="email" id="modalLRInput10" class="form-control form-control-sm validate"/>
                <label data-error="wrong" data-success="right" for="modalLRInput10">שם משתמש</label>
              </div>
              <div class="md-form form-sm mb-4">
                <i class="fas fa-lock prefix"></i>
                <input type="password" id="modalLRInput11" class="form-control form-control-sm validate"/>
                <label data-error="wrong" data-success="right" for="modalLRInput11">סיסמא</label>
              </div>
              <div class="text-center mt-2">
                <button class="btn btn-info">התחבר <i class="fas fa-sign-in ml-1"></i></button>
              </div>
            </div>   
            <div class="modal-footer">
              <div class="options text-center text-md-right mt-1">
                <p> <a href="#" class="blue-text">שכחתי סיסמא</a></p>
              </div>
              <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">סגור</button>
            </div>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>


      <div class="col text-center py-3 bg-success text-black-50 img-fluid mb-1 rounded-square ">
                <h6 class="display-4"> מידע  </h6> 
              </div>


   
              <div class="row justify-content-md-center">   
              <div class="col-md-7 py-2">
              <div class="card text-center text-black-50  bg-light">
                <div class="card-body ">   
               
                            <p class="text muted text-right"> 
עמותת 'יש תקווה' הוקמה לפני למעלה מ-4 שנים מתוך מטרה להעניק ליווי וסיוע לחולים, אשר נאלצים להתאשפז לתקופות ארוכות או להגיע לבדיקות וטיפולים בבתי חולים באופן תדיר </p>
                            <p class="text muted text-right"> 
                                העמותה מופעלת ע"י מעל 1000 מתנדבות ומתנדבים נאמנים, הפועלים ב-20 בתי חולים בכל רחבי הארץ, 24/7, בשבת, חג וחול.  
                                אנו מלווים קרוב ל-1500 חולים מדי שבוע
                                </p>

                            <p class="text muted text-right"> 

                                במסגרת הפרויקט המתנדבים יעניקו סיוע ותמיכה למטופלים ובני משפחתם בליווי ברחבי בית החולים, בחברה , ובמילוי מקום קרוב משפחה ליד מיטת החולה
                            </p>

                            <p class="text muted text-right">
                                המתנדבות והמתנדבים בעמותה מגיעים מכלל החברה הישראלית, כאשר המכנה המשותף לכולם הוא תפיסת העולם המבוססת על ערך הנתינה, עשיית חסד ואחריות חברתית מפותחת
                            </p>

                            <p class="text muted text-right">
                                (: ההתנדבות מספקת משמעותית וממכרת 
                            </p>
                </div>
              </div>
            </div>
               
                  </div>
        </div>
        );
      }
    }
    
    
    export default Home;
    
     