import React, { Component } from 'react';
import firebase from '../Firebase/Firebase';
import MaterialTable from 'material-table';
import axios from '../EditEventsPage/axios-events';
import database from '../Firebase/Firebase';
import emailjs from 'emailjs-com';

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
        const itemsRef = database.ref(`shifts/`);
        itemsRef.on('value', (snapshot) => {
            let shifts = snapshot.val();
            let newState = [];
            for (let shift in shifts) {
                newState.push({
                    id: shift,
                    date: shifts[shift].date,
                    starttime: shifts[shift].starttime,
                    endtime: shifts[shift].endtime,
                    patient: shifts[shift].patient,
                    volunteer: shifts[shift].volunteer,
                    hospital: shifts[shift].hospital,
                    text: shifts[shift].text

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
                   

                    data={this.state.shifts}

                    columns={[
                        { title: "תאריך", field: 'date' },
                        { title: "שעת התחלה", field: 'starttime' },
                        { title: "שעת סיום", field: 'endtime' },
                        { title: "מטופל", field: 'patient' },
                        { title: "מתנדב", field: 'volunteer' },
                        { title: "בית חולים", field: 'hospital' },
                         { title: "הודעה למתנדב במייל", field: 'text' }


                       
                    ]}


                    options={{
                        selection: true,
                        exportButton: true
                    }}



                    actions={[
                        {
                            tooltip: 'Remove All Selected Users',
                            icon: 'delete',
                            onClick: (evt, data) =>
                            {
                                data.forEach(data1 => {
                                    axios.delete(`shifts/` + data1.id + '.json')

                                });


                           
                            }



                                //axios.delete(`shifts/` + data[0].id + '.json'),
                       
                        },
                        {
                            icon: 'email',
                            tooltip: 'Email Patient and Volunteer',
                            onClick: (event, data) => {

                                var x = data[0].starttime;
                                var y = data[0].endtime;
                                var t = data[0].patient;
                                var z = data[0].hospital;
                                var k = data[0].text;
                                var d = data[0].volunteer;
                                
                               
                                var ref = database.ref('volunteers/').orderByChild("name").equalTo(data[0].volunteer)
                                    .on('value', snapshot => {
                                        snapshot.forEach(userSnapshot => {
                                            let data = userSnapshot.val();
                                            console.log('data: ', data);
                                            console.log("hi");
                                            console.log(data.email);
                                            
                                            alert("אמייל נשלח למתנדב");
                                            emailjs.send('default_service', 'zisi', { from_name: "שובצת להתנדבות", to_name: data.email, subject: "hello", message_html: "שלום,", message_html2: "שובצת להתנדבות בין השעות: " + x + "-" + y, message_html3: "בבית חולים: " + z, message_html4: "עבור מטופל: " + t, message_html5: k}, 'user_FDonzgo2Fb4KPMm3Ko062')
                                    .then(function (response) {
                                        console.log("");
                                    });     
                                        });
                                    });

                                var ref = database.ref('patients/').orderByChild("name").equalTo(data[0].patient)
                                    .on('value', snapshot => {
                                        snapshot.forEach(userSnapshot => {
                                            let data = userSnapshot.val();
                                            console.log('data: ', data);
                                            console.log(data.contactemail);
                                            alert("אמייל נשלח למשפחה");
                                            
                                            emailjs.send('default_service', 'zisi', { from_name: "שובצה התנדבות", to_name: data.contactemail, subject: "hello", message_html: "שלום,", message_html2: "שובצה התנדבות בין השעות: " + x + "-" + y, message_html3: "שם המתנדב: " + d }, 'user_FDonzgo2Fb4KPMm3Ko062')
                                                .then(function (response) {
                                                    console.log("");
                                                });
                                        });
                                    });
                              


                              

                               



                            }
                               
                        }


                    ]
                   
                    
                    
                    }

                    editable={{

                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {

                                        const shift = {
                                            date: newData.date,
                                            starttime: newData.starttime,
                                            endtime: newData.endtime,
                                            patient: newData.patient,
                                            volunteer: newData.volunteer,
                                            hospital: newData.hospital,
                                            text: newData.text,

                                        }
                                        axios.put(`shifts/` + newData.id + '.json', shift)

                                        
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