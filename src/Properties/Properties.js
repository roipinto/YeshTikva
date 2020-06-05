import React, { Component } from 'react';
import MyTitle from '../Title';


class Properties extends Component {

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (

      <div>

        <MyTitle title="הגדרות" /> <p></p> <p></p>


      </div>
    );
  }
}


export default Properties;