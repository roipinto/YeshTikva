import React, { Component } from 'react';
import axios from '../Firebase/axios';
import Coordinator from './Coordinator';
import MyTitle from '../Title';
import firebase from '../Firebase/Firebase';

import SecondaryTitle from '../SecondaryTitle';

class CoordinatorDashboard extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.generatePassword = this.generatePassword.bind(this);
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

    generatePassword() {
        var length = 8,
            charset = "אבגדהוזחטיכלמםנןסעפףצץקרשתabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
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
        e.preventDefault();
        var pass=this.state.email;
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.generatePassword()).then((u) => {
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
        })
        
        .then((e) => {
            firebase.auth().sendPasswordResetEmail(pass);
            alert('נוצר רכז חדש ונשלח אליו מייל לשינוי סיסמא');
        }).then(()=>{
            firebase.auth().signOut();
        }).catch((error) => {
            alert("אחד או יותר מהנתונים אינו תקין");
        });
    }

    

    render() {
        return (
            <div>

                <MyTitle title="לוח רכזים" />
                <SecondaryTitle title="לצפיה ברכזים גלול מטה"></SecondaryTitle>

                <form onSubmit={this.handleSubmit} class="row justify-content-md-center">


                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">

                                <form>
                                    <div class="form-group">
                                        <input required onChange={this.handleChange} class="form-control form-control-lg text-right" type="email" name="email" class="form-control" id="mailRegister" aria-describedby="emailHelp" placeholder="example@google.com " ref={(input3) => this.input3 = input3} />
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