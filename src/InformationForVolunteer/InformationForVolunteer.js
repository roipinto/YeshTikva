import React, { Component } from 'react';
import MyTitle from '../Title';
import firebase, { storage } from '../Firebase/Firebase'; 
import './InformationForVolunteer.css';


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url1: '',
            url2: ''
            
        }
        this.getImage1('url1')
        this.getImage2('url2')
       
    }

    getImage1(image) {
        let { state } = this
        storage.ref("images/").child('Rules.docx').getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
        }).catch((error) => {
            // Handle any errors
        })
    }


    getImage2(image) {
        let { state } = this
        storage.ref("images/").child('Presentation.pptx').getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
        }).catch((error) => {
            // Handle any errors
        })
    }

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
                            <p>קבצים של העמותה</p>
                            <br />
                           
                            <a href={this.state.url1} download> כללים הוראות וכל מה שחשוב לדעת</a>
                            <br />
                            <br />
                            <a href={this.state.url2} download> מצגת יש תקווה</a>
              </div>
            </div>
          </div>

            </div>

           

        
      </div>
    );
  }
}


export default Home;

