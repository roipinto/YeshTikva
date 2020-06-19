import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from '../Firebase/axios';
import Coordinator from './Coordinator';
import MyTitle from '../Title';
import firebase from '../Firebase/Firebase';

class CoordinatorDashboard extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        coordinators: [],
        loading: true,
        selectedVolunteerId: null,
        filterText: "",
        email: '',
        password: '',

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
/*
    register(e) {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u); alert("d\sucesss")
        })
            .catch((error) => {
                alert("המייל או הסיסמא אינם תקינים");
            })
    }

*/
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
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            const coordinator = {
                coordinators: this.state.coordinator,
                name: this.input.value,
                phone: this.input2.value,
                email: this.input3.value,
                notes: this.input4.value,
                role: this.inputRole.value

            }
            axios.post('/coordinators.json', coordinator).then(function (response) {
                window.location.reload();
            })
        }).then((e) => {
            alert(' נוצר רכז חדש ');
        }).catch((error) => {
            alert("אחד או יותר מהנתונים אינו תקין");
        });
    }




    render() {
        return (
            <div>

                <MyTitle title="לוח רכזים" />

                <form onSubmit={this.handleSubmit} class="row justify-content-md-center">


                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">


                                <form>
                                    <div class="form-group">
                                        <input required value={this.state.email} onChange={this.handleChange} class="form-control form-control-lg text-right" type="email" name="email" class="form-control" id="mailRegister" aria-describedby="emailHelp" placeholder="example@google.com " ref={(input3) => this.input3 = input3} />
                                    </div>
                                    <div class="form-group">
                                        <input required id="exampleInputPassword1" value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control form-control-lg text-right" placeholder="הערות " ref={(input4) => this.input4 = input4} aria-describedby="emailHelp" placeholder="Password"></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="שם מלא" ref={(input) => this.input = input}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="tel" class="form-control form-control-lg text-right" required placeholder="טלפון בפורמט הבא: 0523456789" pattern="[0-9]{10}" ref={(input2) => this.input2 = input2}></input>
                                    </div>

                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" placeholder="הערות " ref={(input4) => this.input4 = input4}></input>
                                    </div>
                                    <div class="form-group">
                                        <select class="custom-select" ref={(inputRole) => this.inputRole = inputRole} required>
                                            <option selected required>הרשאות</option>
                                            <option value="coordinator">רכז</option>
                                            <option value="admin">אדמין</option>
                                        </select>
                                    </div>


                                    <input type="submit" value=" הוסף רכז חדש " className="btn btn btn-info btn-sm center-block agreeBut"></input>
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


