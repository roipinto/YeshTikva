import React, { Component } from 'react';
import firebase from '../Firebase/Firebase';
import MaterialTable from 'material-table';
import axios from '../Firebase/axios';
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
        });
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
                        { title: "רקע ", field: 'backround' },
                        { title: "בעיה רפואית", field: 'sickness' },
                        { title: "חיסונים בילדות", field: 'immunization' },
                        { title: "איך הגיע אלינו", field: 'howGetToUs' },
                        { title: "איזור התנדבות", field: 'areaVolunteering' },

                        { title: "תחומי התנדבות", field: 'typeVolunteering' },
                        { title: "שעות התנדבות", field: 'timeVolunteering' },
                        { title: "התנדבות בבית חולים", field: 'experience' },
                        { title: "הערות", field: 'notes' },
                        { title: "קבלת עדכונים", field: 'update' },
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
                                if (window.confirm("האם אתה בטוח?") === true) {
                                data.forEach(data1 => {
                                    axios.delete(`volunteerRequests/` + data1.id + '.json')
                                        axios.post('/volunteers.json', data1),                 
                                        emailjs.send('default_service', 'template_wWK10Alu', { from_name: data1.name, to_name: data1.email, subject: "hello", message_html: "hello hello" }, 'user_FDonzgo2Fb4KPMm3Ko062')
                                        .then(function (response) {
                                            console.log("");
                                        });
                                })}

                            }



                        }


                    ]}


                    editable={{
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        axios.delete(`volunteerRequests/` + oldData.id + '.json')

                                        emailjs.send('default_service', 'zisi', { from_name: "דחיית בקשת התנדבות", to_name: oldData.email, subject: "hello", message_html: "היי, קיבלנו את בקשת ההתנדבות שלך והחלטנו שלא להתקדם כרגע, מאחלים הרבה הצלחה בהמשך" }, 'user_FDonzgo2Fb4KPMm3Ko062')
                                            .then(function (response) {
                                                console.log("");
                                            });
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