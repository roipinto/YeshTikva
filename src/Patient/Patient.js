import React, { Component } from 'react';
import firebase from '../Firebase/Firebase';
import MaterialTable from 'material-table';
import axios from '../EditEventsPage/axios-events';
import database from '../Firebase/Firebase';


class Patient extends Component {


    constructor() {
        super();
        this.state = {
            currentItem: '',
            username: '',
            patients: []
        }
        //  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
    }


    componentDidMount() {
        const itemsRef = database.ref(`patients/`);
        itemsRef.on('value', (snapshot) => {
            let patients = snapshot.val();
            let newState = [];
            for (let patient in patients) {
                newState.push({
                    id: patient,
                    name: patients[patient].name,
                    zehot: patients[patient].zehot,
                    age: patients[patient].age,
                    hospital: patients[patient].hospital,
                    department: patients[patient].department,
                    roomNumber: patients[patient].roomNumber,
                    placeInRoom: patients[patient].placeInRoom,

                    contact: patients[patient].contact,
                    contactemail: patients[patient].contactemail,
                    isolation: patients[patient].isolation,
                    eating: patients[patient].eating,
                    occupation: patients[patient].occupation,
                    communication: patients[patient].communication,
                    sleeping: patients[patient].sleeping,
                    family: patients[patient].family,

                    otherOrganizations: patients[patient].otherOrganizations,
                    fullName: patients[patient].fullName,
                    sickness: patients[patient].sickness,
                    hospitalizationBackround: patients[patient].hospitalizationBackround,
                    hospitalizationReason: patients[patient].hospitalizationReason,
                    familyBackround: patients[patient].familyBackround,
                    notes: patients[patient].notes


                });

            }
            this.setState({
                patients: newState
            });

        }

        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref(`patients/`);
        const patient = {
            name: this.state.currentItem,
            zehot: this.state.username
        }
        itemsRef.push(patient);
        this.setState({
            currentItem: '',
            username: ''
        });
    }


    render() {






        return (
            <div>



                <MaterialTable
                    title="  מטופלים"


                    data={this.state.patients}

                    columns={[
                        { title: "שם מלא", field: 'name' },
                        { title: "תעודת זהות", field: 'zehot' },
                        { title: "גיל", field: 'age' },
                        { title: "בית חולים", field: 'hospital' },
                        { title: "מחלקה ", field: 'department' },
                        { title: " מספר חדר", field: 'roomNumber' },
                        { title: "מיקום מיטה בחדר ", field: 'placeInRoom' },

                        { title: "איש קשר שם וטלפון ", field: 'contact' },
                        { title: "איש קשר אמייל", field: 'contactemail' },
                        { title: " האם נמצא בבידוד", field: 'isolation' },
                        { title: "צורת אכילה ", field: 'eating' },
                        { title: "תעסוקה ", field: 'occupation' },
                        { title: "רמת תקשורת ", field: 'communication' },
                        { title: "האם ישן בלילה ", field: 'sleeping' },
                        { title: "מעורבות משפחה ", field: 'family' },

                        { title: " עמותות נוספות", field: 'otherOrganizations' },
                        { title: "שם מלא שלך ", field: 'fullName' },
                        { title: "מחלות מאושפז ", field: 'sickness' },
                        { title: "רקע מאושפז ", field: 'hospitalizationBackround' },
                        { title: "סיבת אשפוז ", field: 'hospitalizationReason' },
                        { title: "רקע משפחתי ", field: 'familyBackround' },
                        { title: "הערות ", field: 'notes' }


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
                                data.forEach(data1 => {
                                    axios.delete(`patients/` + data1.id + '.json')
                                });

                            }



                                //axios.delete(`patients/` + data[0].id + '.json'),



                        }


                    ]}


                    editable={{

                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {

                                        const patient = {

                                            name: newData.name,
                                            zehot: newData.zehot,
                                            age: newData.age,
                                            hospital: newData.hospital,
                                            department: newData.department,
                                            roomNumber: newData.roomNumber,
                                            placeInRoom: newData.placeInRoom,

                                            contact: newData.contact,
                                            contactemail: newData.contactemail,
                                            isolation: newData.isolation,
                                            eating: newData.eating,
                                            occupation: newData.occupation,
                                            communication: newData.communication,
                                            sleeping: newData.sleeping,
                                            family: newData.family,

                                            otherOrganizations: newData.otherOrganizations,
                                            fullName: newData.fullName,
                                            sickness: newData.sickness,
                                            hospitalizationBackround: newData.hospitalizationBackround,
                                            hospitalizationReason: newData.hospitalizationReason,
                                            familyBackround: newData.familyBackround,
                                            notes: newData.notes,



                                        }
                                        axios.put(`patients/` + newData.id + '.json', patient)


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

export default Patient;