import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from '../EditEventsPage/axios-events';
import Coordinator from './Coordinator';
import ToolbarConnect from '../Toolbar/ToolbarConnect';
import MyTitle from '../Title';

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

                <MyTitle title="לוח רכזים" />

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


