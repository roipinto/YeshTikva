import React, { Component } from 'react';
import './Information.css';
import MyTitle from '../Title';
import axios from '../EditEventsPage/axios-events';
import './Information.css';


class Information extends Component {



    state = {
        events: [],
        loading: true
    }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }



    componentDidMount() {
        axios.get('/info.json')
            .then(res => {
                const fetchedEvents = [];
                for (let key in res.data) {
                    fetchedEvents.push({
                        ...res.data[key],
                        id: key
                    });
                    console.log(fetchedEvents[0].information);
                    document.getElementById("demo").innerHTML = fetchedEvents[0].information;
                }
                this.setState({ loading: false, events: fetchedEvents });
                const f = fetchedEvents[0].information;
            })
            .catch(err => {
                this.setState({ loading: false });
            })

     
      
    }

    



  render() {
    return (


      <div>

        <MyTitle title="מידע" /> <p></p> <p></p>

        <div class="row justify-content-md-center">
          <div class="col-md-7 py-2">
            <div class="card text-center text-black-50  bg-light">
              <div class="card-body ">


                            <div id="demo">  </div>
                                
                          
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}


export default Information;

