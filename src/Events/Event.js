import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import {Link} from 'react-router-dom';
import axios from '../EditEventsPage/axios-events';
import EditEventsPage from '../EditEventsPage/axios-events';



const event = (props) => (

   
<article className="Event">
    <section id="boxes" class="py-3">
          <div class="row justify-content-md-center "> 
            
            <div class="col-md-3 py-2">
            <div class="card text-center text-black-50 bg-light ">
              <div class="card-body">
            
              <h6><b> {props.id}</b></h6>
           
                 
           <h6><b> {props.title}</b></h6>
            <p>{props.body}</p>
            <button onClick={props.clicked} type="button" class="btn btn-danger">מחק  </button>         
      </div>
      </div>
      </div>
      </div>
      </section>
      </article>
   
   
);



export default event;

