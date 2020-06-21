import React, { Component } from 'react';
import axios from '../Firebase/axios';
import VolunteerRequest from './VolunteerRequest';
import MyTitle from '../Title';
import SecondaryTitle from '../SecondaryTitle'

class VolunteerRequestDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    state = {
        volunteerRequests: [],
        loading: true,
        selectedVolunteerId: null,
        filterText: ""

    }



    componentDidMount() {
        axios.get('/volunteerRequests.json')
            .then(res => {
                const fetchedVolunteers = [];
                for (let key in res.data) {
                    fetchedVolunteers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, volunteerRequests: fetchedVolunteers });
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }




    handleSubmit(e) {
        alert(' נוצר מתנדב חדש ');
        const volunteerRequest = {
            volunteerRequests: this.state.volunteerRequest,
            name: this.input.value,
            zehot: this.input2.value,
            email: this.input3.value,
            gender: this.input4.value,
            sector: this.input5.value,
            status: this.input6.value,
            address: this.input7.value,

            phone: this.input8.value,
            age: this.input9.value,
            backround: this.input10.value,
            sickness: this.input11.value,
            immunization: this.input12.value,
            howGetToUs: this.input13.value,
            areaVolunteering: this.input14.value,

            typeVolunteering: this.input15.value,
            timeVolunteering: this.input16.value,
            experience: this.input17.value,
            notes: this.input18.value,
            update: this.input19.value,
            howSubmitted: this.input20.value






        }
        axios.post('/volunteerRequests.json', volunteerRequest)


        e.preventDefault();
    }




    render() {
        return (
            <div>

                <MyTitle title="לוח בקשות להתנדבות" />

                <SecondaryTitle title='בקשות שממתינות לטיפול'> </SecondaryTitle>

                <div>
                    <h1> </h1>

                    <VolunteerRequest />

                </div>

            </div>
        );
    }

}

export default VolunteerRequestDashboard;


