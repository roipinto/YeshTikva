import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from '../Firebase/axios';
import Patient from './Patient';
import MyTitle from '../Title';

class PatientDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    state = {
        patients: [],
        loading: true,
        selectedVolunteerId: null,
        filterText: ""

    }



    componentDidMount() {
        axios.get('/patients.json')
            .then(res => {
                const fetchedVolunteers = [];
                for (let key in res.data) {
                    fetchedVolunteers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, patients: fetchedVolunteers });
            })
            .catch(err => {
                this.setState({ loading: false });
            })

    }








    handleSubmit(e) {
        alert(' נוצר מטופל חדש ');
        const patient = {
            patients: this.state.patient,
            name: this.input.value,
            zehot: this.input2.value,
            age: this.input3.value,
            hospital: this.input4.value,
            department: this.input5.value,
            roomNumber: this.input6.value,
            placeInRoom: this.input7.value,

            contact: this.input8.value,
            contactemail: this.input22.value,
            isolation: this.input9.value,
            eating: this.input10.value,
            occupation: this.input11.value,
            communication: this.input12.value,
            sleeping: this.input13.value,
            family: this.input14.value,

            otherOrganizations: this.input15.value,
            fullName: this.input16.value,
            sickness: this.input17.value,
            hospitalizationBackround: this.input18.value,
            hospitalizationReason: this.input19.value,
            familyBackround: this.input20.value,
            notes: this.input21.value



        }
        axios.post('/patients.json', patient).then(function (response) {
            window.location.reload();
        });


        e.preventDefault();
    }




    render() {
        return (
            <div>
                <MyTitle title="לוח מטופלים" />

                <form onSubmit={this.handleSubmit} class="row justify-content-md-center">
                    

                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">
                                
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="שם מלא" ref={(input) => this.input = input}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control form-control-lg text-right" required placeholder="תעודת זהות" ref={(input2) => this.input2 = input2}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control form-control-lg text-right" required placeholder="גיל" ref={(input3) => this.input3 = input3}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="בית חולים" ref={(input4) => this.input4 = input4}></input>
                                    </div>

                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="מחלקה" ref={(input5) => this.input5 = input5}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="מספר חדר" ref={(input6) => this.input6 = input6}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="מיקום מיטה בחדר" ref={(input7) => this.input7 = input7}></input>
                                    </div>
                                
                            </div>
                        </div>
                    </div>





                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">
                              
                                    <div class="form-group">
                                    <input type="tel" class="form-control form-control-lg text-right" required placeholder="טלפון בפורמט הבא: 0523456789" pattern="[0-9]{10}"  ref={(input8) => this.input8 = input8}></input>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-lg text-right" required placeholder="איש קשר - אמייל" ref={(input22) => this.input22 = input22}></input>
                                </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="האם נמצא בבידוד" ref={(input9) => this.input9 = input9}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="צורת אכילה" ref={(input10) => this.input10 = input10}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="תעסוקה" ref={(input11) => this.input11 = input11}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="רמת תקשורת" ref={(input12) => this.input12 = input12}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="האם ישן בלילה" ref={(input13) => this.input13 = input13}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="מעורבות משפחה" ref={(input14) => this.input14 = input14}></input>
                                    </div>
                               
                            </div>
                        </div>
                    </div>



                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">
                                
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" placeholder=" עמותות נוספות " ref={(input15) => this.input15 = input15}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="שם מלא שלך" ref={(input16) => this.input16 = input16}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="מחלות של המאושפז" ref={(input17) => this.input17 = input17}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="רקע על המאושפז" ref={(input18) => this.input18 = input18}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="סיבת אשפוז" ref={(input19) => this.input19 = input19}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="רקע משפחתי" ref={(input20) => this.input20 = input20}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" placeholder="הערות" ref={(input21) => this.input21 = input21}></input>
                                    </div>
                                    
                                
                            </div>
                        </div>
                    </div>


                    <div>
                        <input type="submit" value="הוסף מטופל חדש" className="btn btn btn-info btn-sm center-block agreeBut"></input>

                    </div>

                    




               


                    


                </form>



                <div>
                    <h1> </h1>

                    <Patient />

                </div>

            </div>
        );
    }

}

export default PatientDashboard;


