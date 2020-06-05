import React, { Component } from 'react';
import MyTitle from '../Title';



class Home extends Component {

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (

      <div>

        <MyTitle title="מידע למתנדב" /> <p></p> <p></p>

        <div class="row justify-content-md-center">
          <div class="col-md-7 py-2">
            <div class="card text-center text-black-50  bg-light">
              <div class="card-body ">
                <p></p>
                <p class="text muted text-right">מצורפים בזו מספר קבצי</p>
              </div>
            </div>
          </div>

        </div>

        
      </div>
    );
  }
}


export default Home;

