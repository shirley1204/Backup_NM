import React, { Component } from "react";
// import { TextField, Card, CardContent, Button } from "@material-ui/core";
import logo from '../../../images/logo.PNG'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import "./AdminAuth.css";
class AdminForgotpassword extends Component {
 render() {
  return (
      <React.Fragment>
        <div className=" bg_banner">
          <div className="container-fluid op-layer">
            <div className="row">
              <div className="col-md-6 banner_text">
              <h1>WE</h1>
                <h3> ease & convenience for those who rather not stress about life's little things</h3>
             </div>
               <div className="col-md-6 ">
        <div className="form-panel">
          <div className="form-head"> 
            <div className="form-body">
              <div className="form-group login row">
              <div class="col-md-12 text-center">
                  <img src={logo} alt="logo" />
                </div>
                <div class="col-md-12 text-center mt-4"> 
                  <h6>Forgot Password?</h6>
                  <p>Enter Your Registered Email ID</p>
                </div>
                <div className="col-md-12 mt-2" >
                    <input type="text" className="form-control dark_control" name="" placeholder="Email ID"/>
                </div>
              
                <div className="col-md-12 mt-3">
                  <input type="submit" className="btn btn-secondary btn-lg btn-block mt-3" value="Submit" style={{fontSize:'15px'}} />
                </div>
                
                <div class="col-md-12 text-center mt-4"> 
                  <ArrowBackIcon />
                </div>
               
            </div>
          </div>
        </div>
      </div>
            
            </div>
          </div>
          </div>
          </div>

      </React.Fragment>
    );
  }
}

export default AdminForgotpassword;
