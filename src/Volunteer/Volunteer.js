import React, { Component } from 'react';
import firebase from '../Firebase/Firebase';
import MaterialTable from 'material-table';
import axios from '../EditEventsPage/axios-events';
import database from '../Firebase/Firebase';


class Volunteer extends Component {


    constructor() {
        super();
        this.state = {
            currentItem: '',
            username: '',
            volunteers: []
        }
        //  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
    }


    componentDidMount() {
        const itemsRef = database.ref(`volunteers/`);
        itemsRef.on('value', (snapshot) => {
            let volunteers = snapshot.val();
            let newState = [];
            for (let volunteer in volunteers) {
                newState.push({
                    id: volunteer,
                    name: volunteers[volunteer].name,
                    zehot: volunteers[volunteer].zehot,
                    email: volunteers[volunteer].email,
                    gender: volunteers[volunteer].gender,
                    sector: volunteers[volunteer].sector,
                    status: volunteers[volunteer].status,
                    address: volunteers[volunteer].address,

                    phone: volunteers[volunteer].phone,
                    age: volunteers[volunteer].age,
                    backround: volunteers[volunteer].backround,
                    sickness: volunteers[volunteer].sickness,
                    immunization: volunteers[volunteer].immunization,
                    howGetToUs: volunteers[volunteer].howGetToUs,
                    areaVolunteering: volunteers[volunteer].areaVolunteering,

                    typeVolunteering: volunteers[volunteer].typeVolunteering,
                    timeVolunteering: volunteers[volunteer].timeVolunteering,
                    experience: volunteers[volunteer].experience,
                    notes: volunteers[volunteer].notes,
                    update: volunteers[volunteer].update,
                    howSubmitted: volunteers[volunteer].howSubmitted,
                   


                });

            }
            this.setState({
                volunteers: newState
            });

        }

        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref(`volunteers/`);
        const volunteer = {
            name: this.state.currentItem,
            zehot: this.state.username
        }
        itemsRef.push(volunteer);
        this.setState({
            currentItem: '',
            username: ''
        });
    }


    render() {






        return (
            <div>



                <MaterialTable
                    title="  מתנדבים"


                    data={this.state.volunteers}

                    columns={[
                        { title: "שם מלא", field: 'name' },
                        { title: "תעודת זהות", field: 'zehot' },
                        { title: "email", field: 'email' },
                        { title: "מגדר", field: 'gender' },
                        { title: "מגזר", field: 'sector' },
                        { title: "מצב משפחתי", field: 'status' },
                        { title: "כתובת מגורים", field: 'address' },

                        { title: "טלפון", field: 'phone' },
                        { title: "גיל", field: 'age' },
                        { title: "רקע על המתנדב", field: 'backround' },
                        { title: "מחלה, בעיה רפואית", field: 'sickness' },
                        { title: "חיסונים בילדות", field: 'immunization' },
                        { title: "איך הגיע אלינו", field: 'howGetToUs' },
                        { title:  "איזורים שרלוונטים להתנדבות", field: 'areaVolunteering' },

                        { title: "תחומי התנדבות", field: 'typeVolunteering' },
                        { title: "שעות מעודפות להתנדבות", field: 'timeVolunteering' },
                        { title: "ניסיון התנדבות בבית חולים", field: 'experience' },
                        { title: "הערות", field: 'notes' },
                        { title: "עדכונים מאיתנו", field: 'update' },
                        { title: "מי טיפל בבקשה", field: 'howSubmitted' }
                        


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
                                if (window.confirm("האם אתה בטוח?") == true) {
                                data.forEach(data1 => {

                                    axios.delete(`volunteers/` + data1.id + '.json')
                                })};

                                 //axios.delete(`volunteers/` + data[0].id + '.json'),

                            }
                            
                           

                         


                        }


                    ]}


                    editable={{

                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {

                                        const volunteer = {

                                            name: newData.name,
                                            zehot: newData.zehot,
                                            age: newData.age,
                                            hospital: newData.hospital,
                                            department: newData.department,
                                            roomNumber: newData.roomNumber,
                                            placeInRoom: newData.placeInRoom,

                                            contact: newData.contact,
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
                                        axios.put(`volunteers/` + newData.id + '.json', volunteer)


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


export default Volunteer;