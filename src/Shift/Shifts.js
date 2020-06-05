import React, { Component } from 'react';
import firebase from '../Firebase/Firebase';
import MaterialTable from 'material-table';
import axios from '../EditEventsPage/axios-events';


class Shifts extends Component {


    constructor() {
        super();
        this.state = {
            currentItem: '',
            username: '',
            shifts: []
        }
        //  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
    }


    componentDidMount() {
        const itemsRef = firebase.database().ref(`shifts/`);
        itemsRef.on('value', (snapshot) => {
            let shifts = snapshot.val();
            let newState = [];
            for (let shift in shifts) {
                newState.push({
                    id: shift,
                    date: shifts[shift].date,
                    time: shifts[shift].time,
                    patient: shifts[shift].patient,
                    volunteer: shifts[shift].volunteer,
                    hospital: shifts[shift].hospital

                });

            }
            this.setState({
                shifts: newState
            });

        }

        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref(`shifts/`);
        const shift = {
            name: this.state.currentItem,
            zehot: this.state.username
        }
        itemsRef.push(shift);
        this.setState({
            currentItem: '',
            username: ''
        });
    }


    render() {






        return (
            <div>



                <MaterialTable
                    title="  משמרות"
                    //columns={test}

                    data={this.state.shifts}

                    columns={[
                        { title: "תאריך", field: 'date' },
                        { title: "שעה", field: 'time' },
                        { title: "מטופל", field: 'patient' },
                        { title: "מתנדב", field: 'volunteer' },
                        { title: "בית חולים", field: 'hospital' }


                        // { title: 'Surname', field: 'surname' },
                        //{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                        //    {
                        //  title: 'Birth Place',
                        //    field: 'birthCity',
                        //     lookup: { 34: 'Birth', 63: 'Birth' },
                        //  },
                    ]}


                    options={{
                        selection: true,
                        exportButton: true
                    }}



                    actions={[
                        {
                            tooltip: 'Remove All Selected Users',
                            icon: 'delete',
                            onClick: (evt, data) => axios.delete(`shifts/` + data[0].id + '.json'),



                        }


                    ]}

                    editable={{

                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {

                                        const shift = {
                                            date: newData.date,
                                            time: newData.time,
                                            patient: newData.patient,
                                            volunteer: newData.volunteer,
                                            hospital: newData.hospital,

                                        }
                                        axios.put(`shifts/` + newData.id + '.json', shift)

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

export default Shifts;