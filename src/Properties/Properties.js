import React, { Component } from 'react';
import MyTitle from '../Title';
import './Properties.css';
import axios from '../EditEventsPage/axios-events';

import ReactFirebaseFileUpload1 from './Upload';
import ReactFirebaseFileUpload2 from './Upload2';
import ReactFirebaseFileUpload3 from './Upload3';
import ReactFirebaseFileUpload4 from './Upload4';
import Files from './files';
import Files2 from './files2';


class Properties extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    state = {
        properties: [],
        loading: true,
        selectedEventId: null

    }


    handleSubmit(event) {

        const info = {
            information: this.input.value,
        }

        axios.put(`/info/-M9JmXhEbvCaSGdQ4Nc9.json`, info).catch(error => console.log(error)).then(function (response) {
            alert('עודכן');

        }).then(function (response) {
            window.location.reload();
        });


        event.preventDefault();
    }


    render() {
        return (

            <div>

                <MyTitle title="הגדרות" /> <p></p> <p></p>

                <div class="alert alert-warning">
                    <strong> ערוך דף מידע למשתמש</strong>
                </div>

                <form id="1" onSubmit={this.handleSubmit} class="row justify-content-md-center">
                    <div class="col-lg-4 ">
                        <div class="Card bg-white text-center card-form ">
                            <div class="card-body ">
                                <form>
                                    <div class="form-group">
                                        <textarea id="info" class="form-control form-control-lg text-right" ref={(input) => this.input = input} placeholder="עדכן כאן מידע חדש"></textarea >
                                    </div>
                                    <input type="submit" value="עדכן" className="btn btn btn-info btn-sm center-block agreeBut"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </form>

                <ReactFirebaseFileUpload1 />
                <br />
                <br />
                <ReactFirebaseFileUpload2 />
                <br />
                <br />
                <ReactFirebaseFileUpload3 />
                <br />
                <br />
                <ReactFirebaseFileUpload4 />
                <br />
                <br />
                <Files />
                <br />
                <br />
                <Files2 />

            </div>
        );
    }
}


export default Properties;