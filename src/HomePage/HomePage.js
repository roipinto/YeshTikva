import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import Picture1 from '../img/Picture1.jpg';
import Picture2 from '../img/Picture2.jpg';
import Picture3 from '../img/Picture3.jpg';
import Picture4 from '../img/Picture4.jpg';
import HomePage from '../HomePage/HomePage';




class Home extends Component {
  render() {
    return (


      <div className="Home">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to='/HomePage'>
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
            <div class="modal-content" role="tabpanel" id="panel7">

              <div class="modal-body mb-1">
                <div class="md-form form-sm mb-5">
                  <i class="fas fa-envelope prefix"></i>
                  <input type="email" id="modalLRInput10" class="form-control form-control-sm validate" />
                  <label data-error="wrong" data-success="right" for="modalLRInput10">שם משתמש</label>
                </div>
                <div class="md-form form-sm mb-4">
                  <i class="fas fa-lock prefix"></i>
                  <input type="password" id="modalLRInput11" class="form-control form-control-sm validate" />
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




        <section id="explore-head-section" class="bg-success text-black-50 img-fluid mb-1 rounded-square ">
          <div class="container" class="img-fluid " >
            <div class="row">
              <div class="col text-center py-5">
                <h6 class="display-4">הצטרף לעמותת יש תקווה </h6>
                <a href="Join" class="btn btn-outlone-secondary text-black-50"> הרשם כמתנדב חדש</a>
              </div>
            </div>
          </div>
        </section>
        <section id="boxes" class="py-3">
          <div class="row justify-content-md-center ">
            <div class="col-md-3 py-2">
              <div class="card text-center text-black-50  bg-light ">
                <div class="card-body">
                  <a href="/Events" class="btn btn-outlone-secondary text-secondary text-black-50">
                    <h3>אירועים </h3>
                  </a>
                  <p class="text muted"> מפגשים קרובים שכדאי להיות נוכח בהם</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 py-2">
              <div class="card text-center text-black-50 bg-light ">
                <div class="card-body">
                  <a href="/Information" class="btn btn-outlone-secondary text-secondary text-black-50">
                    <h3>מידע </h3>
                  </a>
                  <p class="text muted"> כללים הוראות, וכל מה שחשוב לדעת</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="boxes" class="py-3">
          <div class="row justify-content-md-center ">
            <div class="col-md-3 py-2">
              <img src={Picture1} width="300" height="240" alt=""></img>
            </div>
            <div class="col-md-3 py-2">
              <img src={Picture2} width="300" height="240" alt=""></img>
            </div>
            <div class="col-md-3 py-2">
              <img src={Picture3} width="300" height="240" alt=""></img>
            </div>
            <div class="col-md-3 py-2">
              <img src={Picture4} width="300" height="240" alt=""></img>
            </div>
          </div>
        </section>


        <footer id="main footer" class="bg-light">
          <div class="container">
            <div class="row">
              <div class="col test-center">
                <p class=" text-black-50">Copyright &copy; 2020 </p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLabell">
                  צור קשר </button>
              </div>
            </div>
          </div>
        </footer>




        <div class="modal fade" id="exampleModalLabell" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabell" aria-hidden="true">
          <div class="modal-dialog cascading-modal" role="document">
            <div class="modal-content">
              <div class="modal-c-tabs">
                <div class="tab-content">
                  <div class="tab-pane fade in show active" id="panel7" role="tabpanel">
                    <div class="modal-body mb-1">
                      <div class="md-form form-sm mb-5">
                        <i class="fas fa-envelope prefix"></i>
                      </div>
                      <div class="md-form form-sm mb-4">
                        <i class="fas fa-lock prefix"></i>
                        <p>אימייל של העמותה</p>
                        <p>טלפון ליצירת קשר</p>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">סגור</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






      </div>
    );
  }
}


export default Home;

