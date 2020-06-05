import React, { Component } from 'react';
import MyTitle from '../Title';


class AddOrRemove extends Component {

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (

      <div>

        <MyTitle title="הוסף או הסר משתמש" /> <p></p> <p></p>


      </div>
    );
  }
}


export default AddOrRemove;