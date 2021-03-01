import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
// import Drawer from './Components/reusuable/Drawer'
import Login from './Components/scripts/Login'
import Register from './Components/scripts/Register'
import AdminLogin from './Components/scripts/AdminAuth/AdminLogin'
import AdminRegister from './Components/scripts/AdminAuth/AdminRegister'
import AdminForgotpassword from './Components/scripts/AdminAuth/AdminForgotpassword'

import Dashboard from './Components/scripts/Dashboard/Dashboard'
import Forgotpassword from './Components/scripts/Forgotpassword'
import Settings from './Components/scripts/Settings/Settings'
import Contacts from './Components/scripts/Contacts/Contacts'
import UserProfile from './Components/scripts/UserProfile/UserProfile'
// import LoginDemo from './Components/scripts/AdminAuth/LoginDemo'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgotpassword" component={Forgotpassword} />
      <Route exact path="/adminlogin" component={AdminLogin} />
      <Route exact path="/adminregister" component={AdminRegister} />
      <Route exact path="/adminforgotpassword" component={AdminForgotpassword} />
      {/* <Route exact path="/login" component={LoginDemo} /> */}

      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/userprofile" component={UserProfile} />



      
      </Router>
  );
}

export default App;
