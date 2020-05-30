import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from '../EditEventsPage/axios-events';
import Coordinator from './Coordinator';

class CoordinatorDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    state = {
        coordinators: [],
        loading: true,
        selectedVolunteerId: null,
        filterText: ""

    }



    componentDidMount() {
        axios.get('/coordinators.json')
            .then(res => {
                const fetchedVolunteers = [];
                for (let key in res.data) {
                    fetchedVolunteers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, coordinators: fetchedVolunteers });
            })
            .catch(err => {
                this.setState({ loading: false });
            })

    }








    handleSubmit(e) {
        alert(' נוצר רכז חדש ');
        const coordinator = {
            coordinators: this.state.coordinator,
            name: this.input.value,
            phone: this.input2.value,
            email: this.input3.value,
            notes: this.input4.value
            
        }
        axios.post('/coordinators.json', coordinator)


        e.preventDefault();
    }




    render() {
        return (
            <div>

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


                <div class="col text-center py-3 bg-success text-black-50 img-fluid mb-1 rounded-square ">
                    <h6 class="display-4"> לוח רכזים  </h6>
                </div>


                <p></p>



                <form onSubmit={this.handleSubmit} class="row justify-content-md-center">


                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">


                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="שם מלא" ref={(input) => this.input = input}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="טלפון" ref={(input2) => this.input2 = input2}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-lg text-right" placeholder="example@google.com " ref={(input3) => this.input3 = input3}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" placeholder="הערות " ref={(input4) => this.input4 = input4}></input>
                                    </div>
                                    

                                    <input type="submit" value=" הוסף רכז חדש " className="btn btn-success btn-sm"></input>
                                </form>
                            </div>
                        </div>
                    </div>

                </form>
                <div>

                    <Coordinator />

                </div>

            </div>
        );
    }

}

export default CoordinatorDashboard;


