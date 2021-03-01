import React, { Component } from "react";
// import { TextField, Card, CardContent, Button } from "@material-ui/core";
import logo from '../../images/logo.PNG'

import "./Auth.css";
class Register extends Component {
 render() {
  return (
      <React.Fragment>
        <div className=" bg_banner">
          <div className="container-fluid op-layer">
            <div className="row">
              <div className="col-md-6 banner_text">
                <h2>experience</h2>
                <h2> the opulence way</h2>
             </div>
               <div className="col-md-6 ">
        <div className="form-panel">
          <div className="form-head"> 
            <div className="form-body">
              <div className="form-group login row">
              <div class="col-md-12 text-center">
                  <img src={logo} alt="logo" />
                </div>
           
                <div className="col-md-12 mt-2" >
                    <input type="text" className="form-control dark_control" name="" placeholder="Full Name"/>
                </div>
                <div className="col-md-12 mt-2" >
                    <input type="number" className="form-control dark_control" name="" placeholder="Mobile"/>
                </div>
                <div className="col-md-12 mt-2" >
                    <input type="email" className="form-control dark_control" name="" placeholder="Email ID"/>
                </div>
                <div className="col-md-12 mt-2" >
                    <input type="password" className="form-control dark_control" name="" placeholder="Password"/>
                </div>
                <div className="col-md-12 mt-2" >
                    <input type="password" className="form-control dark_control" name="" placeholder="Conform Password"/>
                </div>
                <div className="col-md-12 mt-3">
                  <input type="submit" className="btn btn-secondary btn-lg btn-block mt-3" value="Register" style={{fontSize:'15px'}} />
                </div>
           
                <div className="col-md-12"> 
                <input type="submit" className="btn btn-secondary btn-lg btn-block mt-3" value="Already have an Account? Sign In" style={{fontSize:'15px'}} />                </div>
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

export default Register;
