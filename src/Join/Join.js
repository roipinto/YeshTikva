import React, { Component } from 'react';
import axios from '../Firebase/axios';
import emailjs from 'emailjs-com';
//import firebase from '../Firebase/Firebase';
import firebase from '../Firebase/Firebase';
import './Join.css';
import MyTitle from '../Title';
import SecondaryTitle from '../SecondaryTitle'


class VolunteerRequestDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    state = {
        volunteerRequests: [],
        loading: true,
        selectedVolunteerId: null,
        filterText: ""

    }



    componentDidMount() {
        axios.get('/volunteerRequests.json')
            .then(res => {
                const fetchedVolunteers = [];
                for (let key in res.data) {
                    fetchedVolunteers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, volunteerRequests: fetchedVolunteers });
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }




    handleSubmit(e) {


        
       
      
        document.getElementById("hide").style.visibility = "visible";
        document.getElementById("show").style.visibility = "hidden";
        document.getElementById("show2").style.visibility = "hidden";
            
        //alert('נוצרה בקשה חדשה');
        const volunteerRequest = {
            volunteerRequests: this.state.volunteerRequest,
            name: this.input.value,
            zehot: this.input2.value,
            email: this.input3.value,
            gender: this.input4.value,
            sector: this.input5.value,
            status: this.input6.value,
            address: this.input7.value,

            phone: this.input8.value,
            age: this.input9.value,
            backround: this.input10.value,
            sickness: this.input11.value,
            immunization: this.input12.value,
            howGetToUs: this.input13.value,
            areaVolunteering: this.input14.value,

            typeVolunteering: this.input15.value,
            timeVolunteering: this.input16.value,
            experience: this.input17.value,
            notes: this.input18.value,
            update: this.input19.value,

       




        }
        axios.post('/volunteerRequests.json', volunteerRequest)

        const itemsRef = firebase.database().ref(`volunteerRequests/`);
        let x = 0;
        itemsRef.on("child_added", snap => {
            let products = [];
            products.push(snap.val());
            this.setState({ products });
            x = x + 1;
            if (x === 50) {
              

            emailjs.send('default_service', 'zisi', { from_name: "מעל 50 בקשות התנדבות ממתינות", to_name: "yeshtikva123@gmail.com", subject: "hello", message_html: "היי זיסי, ממתינים לך 50 בקשות התנדבות חדשות באתר", message_html2: "", message_html3: "", message_html4: ""  }, 'user_FDonzgo2Fb4KPMm3Ko062')
                    .then(function (response) {
                        console.log("");
                    });

            }

        });

      

      

        e.preventDefault();

       
        
    }




    render() {
        return (
            <div>

                <MyTitle title="הרשם כמתנדב חדש"/>
 
                <div id="show" class="rtt11"><SecondaryTitle title='אנא מלאו את כל השדות' > </SecondaryTitle></div>
                <div id="hide" class="alert alert-success">
                    <strong>הבקשה שלך התקבלה!</strong>
                </div>

                <form id="show2" onSubmit={this.handleSubmit} class="row justify-content-md-center">

                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">
                               
             
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right"  required placeholder="שם מלא" ref={(input) => this.input = input}></input>
                                        
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control form-control-lg text-right" required placeholder="תעודת זהות" ref={(input2) => this.input2 = input2}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-lg text-right" required placeholder="example@gmail.com" ref={(input3) => this.input3 = input3}></input>
                                    </div>
                                    <div class="form-group">
                                 
                                        <select class="custom-select" ref={(input4) => this.input4 = input4} >
                                            <option selected required>מגדר</option>
                                            <option value="זכר">זכר</option>
                                            <option value="נקבה">נקבה</option>
                                            <option value="מעדיף לא לומר">מעדיף לא לומר</option>
                                            </select>
                                        
                                    </div>
                                    

                                    <div class="form-group">
                                        <select class="custom-select" ref={(input5) => this.input5 = input5} >
                                            <option selected required>מגזר</option>
                                            <option value="דתי/ה">דתי/ה</option>
                                            <option value="חרדי/ה">חרדי/ה</option>
                                            <option value="חילוני/ה">חילוני/ה</option>
                                            <option value="ערבי/ה">ערבי/ה</option>
                                            <option value="אחר">אחר</option>
                                        </select>
                                    </div>
                                    <div class="form-group">

                                        <div class="form-group">

                                            <select class="custom-select" ref={(input6) => this.input6 = input6} >
                                                <option  selected required>מצב משפחתי</option>
                                                <option value="רווק/ה">רווק/ה</option>
                                                <option value="נשוי/אה">נשוי/אה</option>
                                                <option value="גרוש/ה">גרוש/ה</option>
                                                <option value="אלמנ/ה">אלמנ/ה</option>
                                                <option value="אחר">אחר</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="כתובת מגורים" ref={(input7) => this.input7 = input7}></input>
                                    </div>


                                
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">
                             
                                    <div class="form-group">
                                    <input type="tel" class="form-control form-control-lg text-right" required placeholder= "טלפון בפורמט הבא: 0523456789" pattern="[0-9]{10}" ref={(input8) => this.input8 = input8}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control form-control-lg text-right" required required placeholder="גיל" ref={(input9) => this.input9 = input9}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="רקע קצר עליך" ref={(input10) => this.input10 = input10}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="האם יש מחלה או בעיה רפואית? כן / לא / או פרט" ref={(input11) => this.input11 = input11}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder=" האם התחסנת בכל החיסונים בילדות? כן / לא / או פרט" ref={(input12) => this.input12 = input12}></input>
                                    </div>
                                    <div class="form-group">

                                        <select class="custom-select" ref={(input13) => this.input13 = input13} >
                                            <option selected required>איך הגעת אלינו</option>
                                            <option value="Facebook">Facebook</option>
                                            <option value="WhatsApp">WhatsApp</option>
                                            <option value="חבר/ה">חבר/ה</option>
                                            <option value="אחר">אחר</option>
                                        </select>
                                       
                                    </div>
                                    <div class="form-group">

                                        <div class="row">
                                            <div class="col-md-12">
                                            </div>
                                    </div>

                                    <select class="custom-select" ref={(input14) => this.input14 = input14} >
                                        <option selected required>איזה איזור הכי רלוונטי עבורך להתנדבות?</option>
                                        <option value="Facebook">מרכז (תל השומר, בילינסון, מעיני הישועה, איכילוב וכו')</option>
                                        <option value="WhatsApp">ירושלים (שערי צדק, אלי"ן, עין כרם, הר הצופים וכו')</option>
                                        <option value="WhatsApp">צפון (רמב"ם, זיו, העמק, פוריה וכו')</option>
                                        <option value="WhatsApp">דרום (סורוקה, ברזילי, אסותא אשדוד וכו')</option>
                                        <option value="WhatsApp">אזור השרון (מאיר, לניאדו, בית לוינשטיין וכו')</option>
                                        <option value="WhatsApp">איזור השפלה (קפלן, אסף הרופא וכו')</option>
                                    </select>
                           
                                    </div>                            
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="Card bg-white text-center card-form">
                            <div class="card-body">
                                
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="תחומי התנדבות" ref={(input15) => this.input15 = input15}></input>
                                    </div>
                                <div class="form-group">

                                    <select class="custom-select" ref={(input16) => this.input16 = input16} >
                                        <option selected required>שעות התנדבות מועדפות</option>
                                        <option value="בוקר">בוקר</option>
                                        <option value="צהריים">צהריים</option>
                                        <option value="ערב">ערב</option>
                                        <option value="ערב">לילה</option>
                                        <option value="ערב">שבות/חגים</option>
                                    </select>
                                       
                                    </div>
                                <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" required placeholder="האם יש ניסיון התנדבות בבית חולים?" ref={(input17) => this.input17 = input17}></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-lg text-right" placeholder="הערות" ref={(input18) => this.input18 = input18}></input>
                                    </div>
                                <div class="form-group">

                                    <select class="custom-select" ref={(input19) => this.input19 = input19} >
                                        <option selected required>איך תרצה לקבל מאיתנו עדכונים?</option>
                                        <option value="אמייל">אמייל</option>
                                        <option value="WhatsApp">WhatsApp</option>
                                        <option value="WhatsApp טלפוני">  WhatsApp טלפוני </option>
                                        
                                    </select>
                                    
                                </div>  
                               
                            </div>
                        </div>
                    </div>
                   
                    
                    <div>
                        <input type="submit" value="הגש בקשה" className="btn btn btn-info btn-sm center-block agreeBut"></input>
              
                    </div>


                </form>


                <div>
                    <h1></h1>
                </div>

                



            </div>
        );
    }

}

export default VolunteerRequestDashboard;


