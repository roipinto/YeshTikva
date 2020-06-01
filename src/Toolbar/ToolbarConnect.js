// Layout.js
import React from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const toolbar = (props) => (
    <div>
        
    
    <nav class="navbar navbar-expand-lg navbar-light" >
        
            <Link to='/HomePage'>
                <div>דף הבית</div>
                <img src={logo} id="logo" alt=""></img>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="/MenuPage" class="btn btn-outline-primary">לוח בקרה למשתמש</a>
                    </li>
                    <li class="nav-item">
                        <div class="btn btn-outline-primary" data-toggle="modal" >ברוך הבא</div>
                    </li>
                </ul>
            </div>

    </nav>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="/MenuPage" class="btn btn-outline-primary">לוח בקרה למשתמש</a>
                </li>
                <li class="nav-item">
                    <a href="#home" class="btn btn-outline-primary" data-toggle="modal" data-target="#modalLRForm">התחברות</a>
                </li>
            </ul>
        </div>

        <div class="modal fade" id="modalLRForm" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog cascading-modal" role="document">
                <div class="modal-content">
                    <div class="modal-c-tabs">
                        <div class="tab-content">
                            <div class="tab-pane fade in show active" id="panel7" role="tabpanel">
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
                </div>
            </div>
        </div>

        

    </div>

);

export default toolbar;