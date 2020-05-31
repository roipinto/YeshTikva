import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from '../EditEventsPage/axios-events';
import VolunteerRequest from '../VolunteerRequest/VolunteerRequest';
import emailjs from 'emailjs-com';

class VolunteerRequestDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    state = {
        volunteerRequests: [],
        loading: true,
        selectedVolunteerId: null,
        filterText: ""

    }



    componentDidMount() {
        axios.get('/volunteerRequests.json')
            .then(res => {
                const fetchedVolunteers = [];
                for (let key in res.data) {
                    fetchedVolunteers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, volunteerRequests: fetchedVolunteers });
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }




    handleSubmit(e) {
        alert('נוצרה בקשה חדשה');
        const volunteerRequest = {
            volunteerRequests: this.state.volunteerRequest,
            name: this.input.value,
            zehot: this.input2.value,
            email: this.input3.value,
            gender: this.input4.value,
            sector: this.input5.value,
            status: this.input6.value,
            address: this.input7.value,

            phone: this.input8.value,
            age: this.input9.value,
            backround: this.input10.value,
            sickness: this.input11.value,
            immunization: this.input12.value,
            howGetToUs: this.input13.value,
            areaVolunteering: this.input14.value,

            typeVolunteering: this.input15.value,
            timeVolunteering: this.input16.value,
            experience: this.input17.value,
            notes: this.input18.value,
            update: this.input19.value,
         





        }
        axios.post('/volunteerRequests.json', volunteerRequest)

        
        e.preventDefault();

        emailjs.send('default_service', 'zisi', { from_name: "", to_name: "", subject: "hello", message_html: "hello hello" }, 'user_FDonzgo2Fb4KPMm3Ko062')
            .then(function (response) {
                console.log("");
            });

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
                    <h6 class="display-4"> בקשת התנדבות   </h6>
                </div>


                <p></p>

                <form onSubmit={this.handleSubmit} class="row justify-content-md-center">


                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="תחומי התנדבות" ref={(input15) => this.input15 = input15}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="שעות מעודפות להתנדבות" ref={(input16) => this.input16 = input16}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="האם יש ניסיון התנדבות בבית חולים" ref={(input17) => this.input17 = input17}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" placeholder="הערות" ref={(input18) => this.input18 = input18}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="איך תרצה לקבל עדכונים מאיתנו" ref={(input19) => this.input19 = input19}></input>
                                    </div>
                                   

                                </form>
                            </div>
                        </div>
                    </div>



                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="טלפון" ref={(input8) => this.input8 = input8}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control form-control-lg text-right" required placeholder="גיל" ref={(input9) => this.input9 = input9}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="רקע קצר עליך" ref={(input10) => this.input10 = input10}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="האם יש מחלה או בעיה רפואית" ref={(input11) => this.input11 = input11}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="האם התחסנת בכל החיסונים בילדות" ref={(input12) => this.input12 = input12}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="איך הגעת אלינו" ref={(input13) => this.input13 = input13}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="אילו איזורים רלוונטים להתנדבות" ref={(input14) => this.input14 = input14}></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>





                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="שם מלא" ref={(input) => this.input = input}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control form-control-lg text-right" required placeholder="תעודת זהות" ref={(input2) => this.input2 = input2}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-lg text-right" placeholder="example@gmail.com" ref={(input3) => this.input3 = input3}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="מגדר" ref={(input4) => this.input4 = input4}></input>
                                    </div>

                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="מגזר" ref={(input5) => this.input5 = input5}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="מצב משפחתי" ref={(input6) => this.input6 = input6}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="כתובת מגורים" ref={(input7) => this.input7 = input7}></input>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div>

                        <input onClick={this.handleSubmit} type="submit" value=" הוסף מתנדב חדש " className="btn btn-success btn-sm center-block"></input>
                    </div>










                </form>


                <div>
                
                    <h1></h1>
                </div>

            </div>
        );
    }

}

export default VolunteerRequestDashboard;


