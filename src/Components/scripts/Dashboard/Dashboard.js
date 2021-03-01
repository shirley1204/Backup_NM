import React, { Component } from "react";
import DrawerDashboard from "../../reusuable/DrawerDashboard";
import Dashboardtable from "./Dashboardtable";
import DashAppbar from "./DashAppbar";
import "./Dashboard.css";

import user1 from "../../../images/user1.jpg";
import user2 from "../../../images/user2.jpg";

import user3 from "../../../images/profile.jpg";


import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  CssBaseline,
  IconButton,
  Paper,

  
  
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <DrawerDashboard>
          <DashAppbar />
          <div className="row">
            <div className="col-md-3">
              <p style={{fontSize:'15px',color:'black',fontWeight:'bold'}}>Members </p>
              <div className="row">
                <div className="col-md-4">
                  <div className="callout_dash">
                    <h3>1276</h3>
                    <p style={{color:'#737373',fontSize:'11px'}}>Active</p>
                  </div>
                </div>
                <div className="col-md-4 ml-4">
                  <div className="callout_dash">
                    <h3>275</h3>
                    <p style={{color:'#737373',fontSize:'11px'}}>Inactive</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
            <p style={{fontSize:'15px',color:'black',fontWeight:'bold'}}>Requests</p>
              <div className="row">
                <div className="col-md-3">
                  <div className="callout_dash">
                    <h3>1840</h3>
                    <p style={{color:'#737373',fontSize:'11px'}}>Confirmed</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="callout_dash">
                    <h3>1638</h3>
                    <p style={{color:'#737373',fontSize:'11px'}}>Processing</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="callout_dash">
                    <h3>1256</h3>
                    <p style={{color:'#737373',fontSize:'11px'}}>Completed</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="callout_dash">
                    <h3>456</h3>
                    <p style={{color:'#737373',fontSize:'11px'}}>Requests</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <p style={{fontSize:'15px',color:'black',fontWeight:'bold'}}>Services Sold</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="callout_dash">
                    <h3>256</h3>
                    <p style={{color:'#737373',fontSize:'11px'}}>Last Year</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="callout_dash">
                    <h3>159</h3>
                    <p style={{color:'#737373',fontSize:'11px'}}>YTD - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Appbar title="Contacts" className="abc" /> */}
          {/* <div className="row abc">
          <Appbar title="Contacts" />

                 </div> */}

          <br />
          <div className="row" >
            <div className="col-md-8">
              <Dashboardtable />
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className="col-md-9">
              <Typography style={{fontSize:'13px',color:'black',fontWeight:'bold'}}>Expiring Memberships</Typography>
              </div>
              <div className="col-md-2">
            
              <SearchIcon />
            
          </div>
              </div>
              <div style={{backgroundColor:'white'}}>
                <br />
                <div className="row search_box ml-2 d-flex">
                <SearchIcon className="searchicon mt-2 ml-2 text-muted"/>
                <span className="mt-2 ml-3 text-muted" style={{fontSize:'12px'}}>Search By Name</span>
                  </div>
              
              <div className="row member_box ml-2">
                <div>
                  <img src={user1} alt="Product Image" className="img_box" />
                </div>
                <div className="content_box">
                  
                  <Typography style={{fontSize:'12px'}} className="text-muted">John Smith<br />
                  johnsmith@gmail.com<br />
                  9892087960 
                  <br />
                    <span className="gold_member">GOLD</span>
                  <br />
                  Membership Validity Expiring in 25 days
                  </Typography>
                </div>

              </div>
              
              
              <div className="row member_box ml-2">
                <div className="img_box">
                  <img src={user2} alt="Product Image" className="img_box" />
                </div>
                <div className="content_box">
                  
                  <Typography style={{color:'#737373',fontSize:'12px'}}>John Smith<br />
                  johnsmith@gmail.com<br />
                  9892087960 
                  <br />
                    <span className="sliver_member">SILVER</span>
                  <br />
                  Membership Validity Expiring in 25 days
                  </Typography>
                </div>
                
              </div>
              
              <div className="row member_box ml-2">
                <div className="img_box">
                  <img src={user3} alt="Product Image" className="img_box" />
                </div>
                <div className="content_box">
                  
                  <Typography style={{color:'#737373',fontSize:'12px'}}>John Smith<br />
                  johnsmith@gmail.com<br />
                  9892087960 
                  <br />
                    <span className="founding_member">FOUNDING</span>
                  <br />
                  Membership Validity Expiring in 25 days
                  </Typography>
                </div>
                
              </div>
              <br />
              
              </div>
            </div>
          </div>
        </DrawerDashboard>
      </React.Fragment>
    );
  }
}

export default Dashboard;
