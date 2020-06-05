import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from '../EditEventsPage/axios-events';
import Shifts from './Shifts';
import MyTitle from '../Title';

class ShiftDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    state = {
        shifts: [],
        loading: true,
        selectedVolunteerId: null,
        filterText: ""

    }



    componentDidMount() {
        axios.get('/shifts.json')
            .then(res => {
                const fetchedVolunteers = [];
                for (let key in res.data) {
                    fetchedVolunteers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, shifts: fetchedVolunteers });
            })
            .catch(err => {
                this.setState({ loading: false });
            })

    }








    handleSubmit(e) {
        alert(' משמרת חדשב נוצרה ');
        const shift = {
            shifts: this.state.shift,
            date: this.input.value,
            time: this.input2.value,
            patient: this.input3.value,
            hospital: this.input5.value,
            volunteer: this.input4.value

        }
        axios.post('/shifts.json', shift)


        e.preventDefault();
    }




    render() {
        return (
            <div>
                <MyTitle title="לוח משמרות" />

                <form onSubmit={this.handleSubmit} class="row justify-content-md-center">


                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">

                                <form>
                                    <div class="form-group">
                                        <input type="date" class="form-control form-control-lg text-right" ref={(input) => this.input = input}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="time" class="form-control form-control-lg text-right" placeholder="שם מלא" required ref={(input2) => this.input2 = input2}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" placeholder="מטופל " required ref={(input3) => this.input3 = input3}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" placeholder="מתנדב " ref={(input4) => this.input4 = input4}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" placeholder="בית חולים " required ref={(input5) => this.input5 = input5}></input>
                                    </div>


                                    <input type="submit" value=" הוסף משמרת חדשה " className="btn btn btn-info btn-sm center-block agreeBut"></input>
                                </form>
                            </div>
                        </div>
                    </div>

                </form>
                <div>

                    <Shifts />

                </div>

            </div>
        );
    }

}

export default ShiftDashboard;


