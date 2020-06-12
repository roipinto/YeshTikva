import React, { Component } from 'react';
import MyTitle from '../Title';
import emailjs from 'emailjs-com';

class Home extends Component {

  
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    state = {
        patients: [],
        loading: true,
        selectedVolunteerId: null,
        filterText: ""

    }



    componentDidMount() {
       

    }








    handleSubmit(e) {

        
      

        emailjs.send('default_service', 'zisi', { from_name: "בקשה ליצירת קשר", to_name: "yeshtikva123@gmail.com", subject: "hello", message_html: "שם: " + this.inputName.value, message_html2: "טלפון: " + this.inputPel.value, message_html3: "אמייל: " + this.inputMail.value, message_html4: "סיבת פנייה: " + this.inputCause.value }, 'user_FDonzgo2Fb4KPMm3Ko062')
            .then(function (response) {
                window.location.reload();
            });

        alert(' קיבלנו את הפנייה שלך ');
       


        e.preventDefault();
    }
  render() {
    return (


      <div>
        <MyTitle title="צור קשר" /> <p></p> <p></p>
        
        <form onSubmit={this.handleSubmit} class="row justify-content-md-center">
          <div class="col-lg-4 ">
            <div class="Card bg-white text-center card-form ">
              <div class="card-body ">
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg text-right" placeholder="שם מלא" required ref={(inputName) => this.inputName = inputName}></input>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg text-right" placeholder="מספר פלאפון" required ref={(inputPel) => this.inputPel = inputPel}></input>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg text-right" placeholder="אימייל"  ref={(inputMail) => this.inputMail = inputMail}></input>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg text-right" placeholder="סיבת הפניה" required ref={(inputCause) => this.inputCause = inputCause}></input>
                  </div>
                  <input type="submit" value=" הוסף פניה חדשה " className="btn btn btn-info btn-sm center-block agreeBut"></input>
                </form>
              </div>
            </div>
          </div>
        </form>



      </div>
    );
  }
}


export default Home;

