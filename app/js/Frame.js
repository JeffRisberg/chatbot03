import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './Frame.css';

//import UserInfo from './components/UserInfo/UserInfo';
//import Login from './components/Login/Login';
//import Register from './components/Register/Register';
//import EditUserProfile from './components/EditUserProfile/EditUserProfile';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import CalendarDashboard from './pages/CalendarDashboard';

import {set_screen} from './actions/screen';

function Frame(props) {

  if (props.screen === 'register') {
    return (
      <div className="frame-container">
        <div className="row">
          <div className="col-md-2">
            <a href="https://coach.ai">
              <img src="/images/logo_coach_ai.png" width="150px"/>
            </a>
          </div>
          <div className="col-md-10">
            <h2></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
          </div>
          {/*<div className="col-md-6">
            <Register/>
          </div>*/}
          <div className="col-md-3">
          </div>
        </div>
      </div>
    )
  } else if (props.screen === 'calendar') {
    return (
      <div className="frame-container">
        {/*<UserInfo/>*/}
        <CalendarDashboard/>
      </div>
    )
  } else if (props.screen === 'edit_profile') {
    return (
      <div className="frame-container">
        <div className="row">
          <div className="col-md-2">
            <a href="https://coach.ai">
              <img src="/images/logo_coach_ai.png" width="150px"/>
            </a>
          </div>
          <div className="col-md-10">
            <h2></h2>
          </div>
        </div>
        <div className="row">
          <div className="d-sm-nonecol-lg-3">
          </div>
          {/*<div className="col-sm-12 col-lg-6">
            <EditUserProfile/>
          </div>*/}
          <div className="d-sm-none col-lg-3">
          </div>
        </div>
      </div>
    )
  } else if (props.user === null) {
    return (
      <div className="frame-container">
        <div className="row">
          <div className="col-md-2">
            <a href="https://coach.ai">
              <img src="/images/logo_coach_ai.png" width="150px"/>
            </a>
          </div>
          <div className="col-md-10">
            <h2></h2>
          </div>
        </div>
        <div className="row">
          <div className="d-sm-none col-lg-3">
          </div>
          {/*<div className="col-sm-12 col-lg-6">
            <Login/>
          </div>*/}
          <div className="d-sm-none col-lg-3">
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="frame-container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UserDashboard/>}/>
            <Route path='/userDashboard' element={<UserDashboard/>}/>
            <Route path='/adminDashboard' element={<AdminDashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  screen: state.app.screen,
});

export default connect(
  mapStateToProps,
  {set_screen}
)(Frame);
