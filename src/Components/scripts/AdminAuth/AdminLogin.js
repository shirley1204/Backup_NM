import React, { Component } from "react";
// import { TextField, Card, CardContent, Button } from "@material-ui/core";
import logo from '../../../images/logo.PNG'

import "./AdminAuth.css";
class AdminLogin extends Component {
 render() {
  return (
      <React.Fragment>
        
        <div className=" bg_banner">
          <div className="container-fluid op-layer">
            
            <div className="row">
              <div className="col-md-6 banner">
                <span className="banner_heading">WE</span>
                <h4 className="banner_content"> ease & convenience for those who rather not stress about life's little things</h4>
             </div>
               <div className="col-md-5 mb-5 mt-1">
        <div className="form-panel">
         
              <div className=" logobox" >
                  {/* <img src={logo} alt="logo" height='75%' width='55%'  /> */}
                </div>
           
                <div className="col-md-12 mt-2" >
                    <input type="text" className="dark_control" name="" placeholder="Email ID / Mobile Number"/>
                </div>
                <div className="col-md-12 mt-2">
                  <input type="password" className="dark_control" name="" placeholder="Password" />
                </div>
                <div className="col-md-12 mt-2">
                  <input type="submit" className="login_btn" value="Login" />
                </div>
                <div className="col-md-12 text-center  mt-3 "> 
                  <a href="#" className="text-white" style={{fontSize:'12px'}}>Forget Password?</a>
                </div>
                <div className="col-md-12"> 
                <input type="submit" className="register_btn mt-3" value="Register Now" />                
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

export default AdminLogin;
