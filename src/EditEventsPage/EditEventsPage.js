import React, { Component } from 'react';
import axios from './axios-events';
import Event from '../Events/Event';
import Events from '../Events/Events';
import MyTitle from '../Title';

class EditEventsPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  state = {
    events: [],
    loading: true,
    selectedEventId: null

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


  selectedEventId = (id) => {
    this.setState({ selectedEventId: id });
    alert(id);

  }

  deleteEventId = (id) => {
    const r = window.confirm("האם אתה בטוח?"); if (r == true) {

      axios.delete('/events/' + id + '.json')
        .catch(error => console.log(error)).then(function (response) {
          alert('אירוע נמחק');

        }).then(function (response) {
          window.location.reload();
        });

    }
  }

  handleSubmit(e) {
    alert('אירוע חדש נוצר');
    const event = {
      event: this.state.event,
      title: this.input.value,
      location: this.input3.value,
      body: this.input2.value,
    }
    axios.post('/events.json', event).then(function (response) {
      window.location.reload();
    });
    //.catch (error => console.log(error));

    e.preventDefault();
  }

  
  render() {

    return (
      <div>

        <MyTitle title="הוסף אירוע" />

        <form onSubmit={this.handleSubmit} class="row justify-content-md-center">
          <div class="col-lg-4 ">
            <div class="Card bg-white text-center card-form ">
              <div class="card-body ">
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg text-right" ref={(input) => this.input = input} placeholder="כותרת " required></input>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg text-right" ref={(input3) => this.input3 = input3} placeholder="מיקום" required></input>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg text-right" ref={(input2) => this.input2 = input2} placeholder="מידע" required></input>
                  </div>
                  <input type="submit" value=" הוסף אירוע חדש " className="btn btn btn-info btn-sm center-block agreeBut"></input>
                </form>
              </div>
            </div>
          </div>
        </form>

        {this.state.events.map(event => (
          <Event
            key={event.id}
            title={event.title}
            location={event.location}
            body={event.body}
            clicked={() => this.deleteEventId(event.id)}
          />
        ))}

      </div>



    );
  }
}



export default EditEventsPage;