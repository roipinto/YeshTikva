import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import axios from '../EditEventsPage/axios-events';
import Event from './Event';
import PreviewEvent from './PreviewEvent';
import './Event.css';
import MyTitle from '../Title';
import SecondaryTitle from '../SecondaryTitle'
class Events extends Component {


    state = {
        events: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/events.json')
            .then(res => {
                const fetchedEvents = [];
                for (let key in res.data) {
                    fetchedEvents.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, events: fetchedEvents });
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }




    render() {
        return (

            <div>

                <MyTitle title="אירועים" />
                
                <SecondaryTitle title="אירועים קרובים שכדאי להגיע אליהם"/>

                <div id="event">
                    {this.state.events.map(event => (
                        <PreviewEvent
                            key={event.id}
                            title={event.title}
                            location={event.location}
                            body={event.body}
                        />
                    ))}
                </div>




            </div>
        );
    }
}


export default Events;


