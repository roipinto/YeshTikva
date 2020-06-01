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

        <MyTitle title="מידע למתנדב" />

        
      </div>
    );
  }
}


export default Home;

