import React, { Component } from 'react';
import MyTitle from '../Title';
import { auth } from '../Firebase/Firebase';

class AddOrRemove extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  register(e) {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u); alert("d\sucesss")
    })
      .catch((error) => {
        alert("המייל או הסיסמא אינם תקינים");
      })
  }





  render() {
    return (

      <div>
        <MyTitle title="הוסף או הסר משתמש" /> <p></p> <p></p>



        <form>
          <div class="form-group">
            <label for="mailRegister">כתובת אימייל</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="mailRegister" aria-describedby="emailHelp" placeholder="הכנס אימייל" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">סיסמא</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Password" />
          </div>

          <button type="submit" onClick={this.register} class="btn btn btn-info btn-sm center-block agreeBut">הירשם</button>
        </form>

      </div>
    );
  }
}


export default AddOrRemove;