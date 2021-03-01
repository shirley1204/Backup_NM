import React, { Component } from "react";
// import { TextField, Card, CardContent, Button } from "@material-ui/core";
import logo from '../../../images/logo.PNG'

import "./AdminAuth.css";
class AdminRegister extends Component {
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
           <div className="col-md-5 ">
    <div className="form-panel">
     
          <div className=" logobox" >
              {/* <img src={logo} alt="logo" height='75%' width='55%'  /> */}
            </div>
       
            <div className="col-md-12 mt-2" >
                <input type="text" className="dark_control" name="" placeholder="Full Name"/>
            </div>
            <div className="col-md-12 mt-2">
              <input type="text" className="dark_control" name="" placeholder="Mobile" />
            </div>
            <div className="col-md-12 mt-2">
              <input type="text" className="dark_control" name="" placeholder="Email Id" />
            </div>
            <div className="col-md-12 mt-2">
              <input type="password" className="dark_control" name="" placeholder="Password" />
            </div>
            <div className="col-md-12 mt-2">
              <input type="password" className="dark_control" name="" placeholder="Confirm Password" />
            </div>
            <div className="col-md-12 mt-2">
              <input type="submit" className="login_btn" value="Register" />
            </div>
            <div className="col-md-12"> 
            <input type="submit" className="account_btn mt-1" value="Already Have an Account? Sign In" />                
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

export default AdminRegister;
