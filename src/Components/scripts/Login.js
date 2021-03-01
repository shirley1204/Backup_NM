import React, { Component } from "react";
// import { TextField, Card, CardContent, Button } from "@material-ui/core";
import logo from '../../images/logo.PNG'

import "./Auth.css";
class Login extends Component {
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
                    <input type="text" className="dark_control" name="" placeholder="Email ID / Mobile Number" style={{color:'white'}}/>
                </div>
                <div className="col-md-12 mt-3">
                  <input type="password" className="form-control dark_control" name="" placeholder="Password" />
                </div>
                <div className="col-md-12 mt-3">
                  <input type="submit" className="btn btn-secondary btn-lg btn-block mt-3" value="Login" style={{fontSize:'15px'}} />
                </div>
                <div className="col-md-12 text-center p-16 mt-3 "> 
                  <a href="#" className="text-white">Forget Password?</a>
                </div>
                <div className="col-md-12"> 
                <input type="submit" className="btn btn-secondary btn-lg btn-block mt-3" value="Register Now" style={{fontSize:'15px'}} />                </div>
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

export default Login;
