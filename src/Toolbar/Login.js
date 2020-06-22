import React, { Component } from 'react';
import './Toolbar.css';
import firebase from '../Firebase/Firebase';


class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.forgetPassword = this.forgetPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: '',
            password: '',
        };
    }


    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            window.location.href = "../MenuPage";

        }).catch((error) => {
            alert("אחד מהשדות שהכנסת אינו תקין");
        });
    }

    forgetPassword(e) {
        e.preventDefault();
        firebase.auth().sendPasswordResetEmail(this.state.email).then(function () {
            alert("נשלח אליך מייל לשחזור סיסמא");
        }).then(function (response) {
            window.location.reload();
        }).catch(function (error) {
            alert("מייל אינו תקין");
        });
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (



            <div className="col-md-6">
                <form>
                    <div class="modal fade" id="modalLRForm" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog cascading-modal" role="document">
                            <div class="modal-content">
                                <div class="modal-body mb-1">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">כתובת אימייל</label>
                                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="הכנס אימייל" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">סיסמא</label>
                                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="הכנס סיסמא" />
                                    </div>

                                </div>
                                <button id="buttClose" type="button" onClick={this.login} class="btn btn-lg btn-primary">התחבר</button>
                                <br />

                                <button type="submit" class="btn btn-dark btn-lg center-block" data-toggle="modal" data-target="#forgetpass" data-dismiss="modal">שכחתי סיסמא</button>
                                <button id="buttClose" type="button" class="btn btn-lg btn-danger" data-dismiss="modal">סגור</button>
                            </div>
                        </div>
                    </div>
                </form>



                <form>
                    <div class="modal fade" id="forgetpass" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog cascading-modal" role="document">
                            <div class="modal-content">
                                <div class="modal-body mb-1">
                                    <h3><i class="fa fa-lock fa-4x"></i></h3>
                                    <h2 class="text-center">שכחת את סיסמתך?</h2>
                                    <p>את/ה יכול/ה לשחזר את סיסמתך</p>
                                    <div class="panel-body">

                                        <form id="register-form" autocomplete="off" class="form" method="post">

                                            <div class="form-group">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="forgetInput" aria-describedby="emailHelp" placeholder="הכנס אימייל" />

                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input name="recover-submit" onClick={this.forgetPassword} class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"></input>
                                            </div>
                                            <div class="form-group">
                                                <input name="recover-submit" class="btn btn-lg btn-danger btn-block btn" value="Close Me" data-dismiss="modal"></input>
                                            </div>

                                            <input type="hidden" class="hide" name="token" id="token" value=""></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>


            </div>
        );
    }
}
export default Login;