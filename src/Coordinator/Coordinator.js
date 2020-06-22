import React, { Component } from 'react';
import firebase from '../Firebase/Firebase';
import MaterialTable from 'material-table';
import axios from '../Firebase/axios';

class Coordinator extends Component {


    constructor() {
        super();
        this.state = {
            currentItem: '',
            username: '',
            coordinators: []
        }
        //  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
    }


    componentDidMount() {
        const itemsRef = firebase.database().ref(`coordinators/`);
        itemsRef.on('value', (snapshot) => {
            let coordinators = snapshot.val();
            let newState = [];
            for (let coordinator in coordinators) {
                newState.push({
                    id: coordinator,
                    name: coordinators[coordinator].name,
                    phone: coordinators[coordinator].phone,
                    email: coordinators[coordinator].email,
                    notes: coordinators[coordinator].notes,
                    role: coordinators[coordinator].role
                });
            }
            this.setState({
                coordinators: newState
            });
        }
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref(`coordinators/`);
        const coordinator = {
            name: this.state.currentItem,
            zehot: this.state.username
        }
        itemsRef.push(coordinator);
        this.setState({
            currentItem: '',
            username: ''
        });
    }


    render() {
        return (
            <div>

                <MaterialTable
                    title="  רכזים"
                    data={this.state.coordinators}

                    columns={[
                        { title: "שם מלא", field: 'name' },
                        { title: "טלפון", field: 'phone' },
                        { title: "מייל", field: 'email' },
                        { title: "הערות", field: 'notes' },
                        { title: "הרשאות", field: 'role' }



                    ]}


                    options={{
                        selection: true,
                        exportButton: true
                    }}


                    actions={[
                        {
                            tooltip: 'Remove All Selected Users',
                            icon: 'delete',
                            onClick: (evt, data) => {
                                if (window.confirm("האם אתה בטוח?") === true) {
                                    data.forEach(data1 => {
                                        //must delete user from firebase  let userD=firebase.auth().getUser(data1.email).then(function (userD) {

                                        axios.delete(`coordinators/` + data1.id + '.json')
                                        console.log("User delete");

                                    });
                                }


                                //axios.delete(`coordinators/` + data[0].id + '.json'),



                            }
                        }


                    ]}


                    editable={{

                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {

                                        const coordinator = {
                                            name: newData.name,
                                            phone: newData.phone,
                                            email: newData.email,
                                            notes: newData.notes,
                                            role: newData.role

                                        }
                                        axios.put(`coordinators/` + newData.id + '.json', coordinator)


                                        /* const data = this.state.data;
                                        data.push(newData);
                                        this.setState({ data }, () => resolve()); */
                                    }
                                    resolve();
                                }, 1000);
                            })
                    }}







                ></MaterialTable>

            </div>

        );
    }
}


export default Coordinator;