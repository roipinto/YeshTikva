import React from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import Login from './Login';
import App from '../App'
import firebase from '../Firebase/Firebase';
import { Component } from 'react';
import { Redirect } from 'react-router-dom'


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
                        <a href="/HomePage" class="btn btn-outline-dark buttLink">דף הבית</a>
                    </li>

                    <li class="nav-item">
                        <a href="/Information" class="btn btn-outline-dark buttLink">על העמותה</a>
                    </li>
                    <li class="nav-item">
                        <a href="/InformationForVolunteer" class="btn btn-outline-dark buttLink">מידע למתנדב</a>
                    </li>
                    <li class="nav-item">
                        <a href="/Events" class="btn btn-outline-dark buttLink">אירועים ומפגשים</a>
                    </li>
                    <li class="nav-item">
                        <a href="#home" class="btn btn-outline-warning buttLink Logged-out" data-toggle="modal" data-target="#modalLRForm">התחברות</a>

                    </li>

                </ul>
            </div>

        </nav>
        <Login />
    </div>
);

export default toolbar;