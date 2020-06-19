import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import {Link} from 'react-router-dom';
import axios from '../Firebase/axios';
import './Event.css';
const event = (props) => (
   

    <section id="boxes" class="py-3">
          <div class="row justify-content-md-center "> 
            
            <div class="col-md-3 py-2">
            <div class="card text-center text-black-50 bg-light ">
              <div class="card-body">
              <h6><b> {props.id}</b></h6>
                 
           <h6><b> {props.title}</b></h6>
           <p>{props.location}</p> 
            <p>{props.body}</p>         
      </div>
      </div>
      </div>
      </div>
      </section>
   
);

export default event;