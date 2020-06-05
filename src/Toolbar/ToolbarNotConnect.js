// Layout.js
import React from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import Login from './Login';

const toolbar = (props) => (
    <div>

        <nav class="navbar navbar-expand-lg navbar-light" >

            <Link to='/HomePage'>
                <img src={logo} id="logo" alt=""></img>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="/HomePage" class="btn btn-outline-primary">דף הבית</a>
                    </li>
                    <li class="nav-item">
                        <a href="#home" class="btn btn-outline-primary" data-toggle="modal" data-target="#modalLRForm">התחברות</a>
                    </li>

                </ul>
            </div>

        </nav>
        <Login/>
        
    </div>

);

export default toolbar;