import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import axios from './axios-events';
import Event from '../Events/Event';
import Events from '../Events/Events';


class EditEventsPage extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      

     
    }

    state = {
        events: [],
        loading: true,
        selectedEventId: null
       
    }

    
 

    componentDidMount(){
        axios.get('/events.json')
        .then(res => {
            const fetchedEvents = [];
            for (let key in res.data) {
                fetchedEvents.push({
                    ...res.data[key],
                id: key});
            }
            this.setState({loading:false, events: fetchedEvents});
        })
        .catch(err => {
            this.setState({loading:false});
        })
    }
       
    
    selectedEventId = (id) =>{
      this.setState({selectedEventId: id});
      alert(id);  

    }

    deleteEventId = (id) =>{
     // alert("אירוע נמחק");
    // this.setState({selectedEventId: id});
    const r = window.confirm("האם אתה בטוח?"); if(r == true){ 
      
      axios.delete('/events/' + id + '.json')  
      .catch (error => console.log(error)).then(function (response) {
        alert('אירוע נמחק');
      }).then(function (response) {
        window.location.reload();
      });
        
      
      
    }
    
    //.then(response => {
      //console.log(response);
    
    
 // });
    
      //alert('/events.json/'+ id);
    }
  
    handleSubmit(e) {
      alert('אירוע חדש נוצר');
      const event = {
          event: this.state.event,
          title: this.input.value,
          body: this.input2.value,
      }
      axios.post('/events.json', event).then(function(response){
        window.location.reload();
      });
      //.catch (error => console.log(error));
    
      e.preventDefault();
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
                <h6 class="display-4"> הוסף אירוע  </h6> 
              </div>



        <form onSubmit={this.handleSubmit} class="row justify-content-md-center">
       
        <div class="col-lg-4 "> 
                <div class="Card bg-white text-center card-form ">
                    <div class="card-body ">
                    
                      
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg text-right" ref={(input) => this.input = input} placeholder="כותרת "></input>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg text-right" ref={(input2) => this.input2 = input2} placeholder="מידע"></input>
                            </div>
                            
                            <input type="submit" value=" הוסף אירוע חדש " className="btn btn-success btn-sm"></input>
                        </form>
                    </div>
                </div>
            </div>
       
            </form>



              


{this.state.events.map(event => (
        <Event 
        key={event.id}
        title={event.title}
        body={event.body}

       clicked={() => this.deleteEventId(event.id)} 
       /> 
        ))}
               
</div>

            

      );
    }
  }
  


export default EditEventsPage;