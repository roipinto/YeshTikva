import React, { Component } from 'react';
import axios from '../EditEventsPage/axios-events';
import Volunteer from './Volunteer';
import MyTitle from '../Title';

class VolunteerDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    state = {
        volunteers: [],
        loading: true,
        selectedVolunteerId: null,
        filterText: ""

    }



    componentDidMount() {
        axios.get('/volunteers.json')
            .then(res => {
                const fetchedVolunteers = [];
                for (let key in res.data) {
                    fetchedVolunteers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, volunteers: fetchedVolunteers });
            })
            .catch(err => {
                this.setState({ loading: false });
            })

    }








    handleSubmit(e) {
        alert(' נוצר מתנדב חדש ');
        const volunteer = {
            volunteers: this.state.volunteer,
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
        axios.post('/volunteers.json', volunteer)


        e.preventDefault();
    }




    render() {
        return (
            <div>
                 <MyTitle title="לוח מתנדבים" />


                <div>
                    <h1> </h1>

                    <Volunteer />

                </div>

            </div>
        );
    }

}

export default VolunteerDashboard;


