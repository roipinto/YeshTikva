import React, { Component } from 'react';
import firebase from '../Firebase/Firebase';
import MaterialTable from 'material-table';
import axios from '../EditEventsPage/axios-events';
import emailjs from 'emailjs-com';


class VolunteerRequest extends Component {


    constructor() {
        super();
        this.state = {
            currentItem: '',
            username: '',
            volunteerRequests: []
        }
        //  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
    }


    componentDidMount() {
        const itemsRef = firebase.database().ref(`volunteerRequests/`);
        itemsRef.on('value', (snapshot) => {
            let volunteerRequests = snapshot.val();
            let newState = [];
            for (let volunteerRequest in volunteerRequests) {
                newState.push({
                    id: volunteerRequest,
                    name: volunteerRequests[volunteerRequest].name,
                    zehot: volunteerRequests[volunteerRequest].zehot,
                    email: volunteerRequests[volunteerRequest].email,
                    gender: volunteerRequests[volunteerRequest].gender,
                    sector: volunteerRequests[volunteerRequest].sector,
                    status: volunteerRequests[volunteerRequest].status,
                    address: volunteerRequests[volunteerRequest].address,

                    phone: volunteerRequests[volunteerRequest].phone,
                    age: volunteerRequests[volunteerRequest].age,
                    backround: volunteerRequests[volunteerRequest].backround,
                    sickness: volunteerRequests[volunteerRequest].sickness,
                    immunization: volunteerRequests[volunteerRequest].immunization,
                    howGetToUs: volunteerRequests[volunteerRequest].howGetToUs,
                    areaVolunteering: volunteerRequests[volunteerRequest].areaVolunteering,

                    typeVolunteering: volunteerRequests[volunteerRequest].typeVolunteering,
                    timeVolunteering: volunteerRequests[volunteerRequest].timeVolunteering,
                    experience: volunteerRequests[volunteerRequest].experience,
                    notes: volunteerRequests[volunteerRequest].notes,
                    update: volunteerRequests[volunteerRequest].update,
                    howSubmitted: volunteerRequests[volunteerRequest].howSubmitted,



                });

            }
            this.setState({
                volunteerRequests: newState
            });

        }

        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref(`volunteerRequests/`);
        const volunteerRequest = {
            name: this.state.currentItem,
            zehot: this.state.username
        }
        itemsRef.push(volunteerRequest);
        this.setState({
            currentItem: '',
            username: ''
        });
    }

 


    render() {


        let templateParams = {
            name: 'James',
            notes: 'Check this out!'
        };



        return (
            <div>



                <MaterialTable
                    title="  בקשות התנדבות"


                    data={this.state.volunteerRequests}

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
                        { title: "האם יש מחלה או בעיה רפואית", field: 'sickness' },
                        { title: "האם התחסן בכל החיסונים בילדות", field: 'immunization' },
                        { title: "איך הגיע אלינו", field: 'howGetToUs' },
                        { title: "אילו איזורים רלוונטים להתנדבות", field: 'areaVolunteering' },

                        { title: "תחומי התנדבות", field: 'typeVolunteering' },
                        { title: "שעות מעודפות להתנדבות", field: 'timeVolunteering' },
                        { title: "האם יש ניסיון התנדבות בבית חולים", field: 'experience' },
                        { title: "הערות", field: 'notes' },
                        { title: "איך ירצה לקבל עדכונים מאיתנו", field: 'update' },
                        { title: "מי טיפל בבקשה", field: 'howSubmitted' }



                    ]}


                    options={{
                        selection: true,
                        exportButton: true
                    }}


                    actions={[
                        {
                            
                            tooltip: 'Aprove All Selected Users',
                            icon: 'check',
                            onClick: (evt, data) => {
                                axios.delete(`volunteerRequests/` + data[0].id + '.json'),
                                    axios.post('/volunteers.json', data[0]),
                                    emailjs.send('default_service', 'template_wWK10Alu', { from_name: data[0].name, to_name: data[0].email, subject: "hello", message_html:"hello hello"} ,'user_FDonzgo2Fb4KPMm3Ko062')
                                    .then(function (response) {
                                        console.log("");
                                    });
                            }



                        }


                    ]}


                    editable={{
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                       // let data = this.state.data;
                                      //  const index = data.indexOf(oldData);
                                       // data.splice(index, 1);
                                      //  this.setState({ data }, () => resolve());
                                       // console.log(oldData.id);
                                        axios.delete(`volunteerRequests/` + oldData.id + '.json')
                                    }
                                    resolve()
                                }, 1000)
                            })
                    }}







                ></MaterialTable>

            </div>

        );
    }
}

export default VolunteerRequest;