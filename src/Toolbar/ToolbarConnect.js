// Layout.js
import React from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const toolbar = (props) => (
    <div>


        <nav class="navbar navbar-expand-lg navbar-light" >
            <Link to=''>
                <img src={logo} id="logo" alt=""></img>
            </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <a href=" " class="btn btn-outline-primary">דף הבית</a>
                    </li>
                    <li class="nav-item">
                        <a href="/MenuPage" class="btn btn-outline-primary">לוח בקרה למשתמש</a>
                    </li>
                    <li class="nav-item">
                        <div class="btn btn-outline-primary disabled" data-toggle="modal" >ברוך הבא!</div>
                    </li>
                </ul>
            </div>

        </nav>

    </div>

);

export default toolbar;