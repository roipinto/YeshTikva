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

        <MyTitle title="!הצטרף לעמותת יש תקווה" />
        
        <div class="col text-center py-3 bg-success text-black-50 img-fluid mb-1 rounded-square ">
          <h6 class="display-4"> מידע  </h6>
        </div>

        <div class="form-group">
          <input type="text" class="form-control form-control-lg text-right" placeholder="שם מלא" required ref={(input3) => this.input3 = input3}></input>
        </div>
        <div class="form-group">
          <input type="text" class="form-control form-control-lg text-right" placeholder="מספר פלאפון" ref={(input4) => this.input4 = input4}></input>
        </div>
        <div class="form-group">
          <input type="text" class="form-control form-control-lg text-right" placeholder="אימייל" required ref={(input5) => this.input5 = input5}></input>
        </div>
        <div class="form-group">
          <input type="text" class="form-control form-control-lg text-right" placeholder="סיבת הפניה" required ref={(input5) => this.input5 = input5}></input>
        </div>



      </div>
    );
  }
}


export default Home;

