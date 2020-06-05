// Layout.js
import React from 'react';
import './Toolbar.css';


const forgetPass = (props) => (
    <div>
        
        
        <div class="modal fade" id="modalLRForm" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog cascading-modal" role="document">
                <div class="modal-content">
                    <div class="modal-body mb-1">
                        <div class="form-group">
                            <input type="email" id="mailInput" placeholder="הכנס שם משתמש" class="form-control form-control-sm validate" />
                            <label data-error="wrong" data-success="right" for="mailInput">שם משתמש</label>
                        </div>
                        <div class="form-group">
                            <input type="password" id="passInput" placeholder="הכנס סיסמא" class="form-control form-control-sm validate" />
                            <label data-error="wrong" data-success="right" for="passInput">סיסמא</label>
                        </div>
                        <button class="btn btn btn-info btn-sm center-block agreeBut">התחבר</button>
                    </div>
 
                    <button type="button" clsss="btn btn-outline-danger" data-toggle="modal" data-target="#forgetpass">שכחתי סיסמא</button>
                    <button id="buttClose" type="button" class="btn btn-outline-danger" data-dismiss="modal">סגור</button>
                    
                </div>
            </div>
        </div>

        <div class="modal fade" id="forgetpass" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog cascading-modal" role="document">
                <div class="modal-content">
                    <div class="modal-body mb-1">
                        <div class="form-group">
                            <input type="email" id="forgetInput" placeholder="הכנס מייל לשחזור סיסמא" class="form-control form-control-sm validate" />
                            <label data-error="wrong" data-success="right" for="forgetInput">מייל</label>
                        </div>
                        <button onClick={this.handleSubmit} class="btn btn btn-info btn-sm center-block agreeBut">שלח</button>
                    </div>
                    <button id="buttClose" type="button" class="btn btn-outline-danger" data-dismiss="modal">סגור</button>


                </div>
            </div>
        </div>
    </div>

);

export default forgetPass;

        
