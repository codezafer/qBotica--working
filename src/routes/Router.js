import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './RouterConfig';
import 'bootstrap'

import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';

import '../assets/css/font-awesome.min.css';
import '../assets/css/line-awesome.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/bootstrap.min.css";

// Custom Style File
import '../assets/js/bootstrap.bundle.js';
import '../assets/css/select2.min.css';

import '../assets/js/popper.min.js';
import '../assets/js/app.js';
import '../assets/js/select2.min.js';


import "../assets/js/bootstrap-datetimepicker.min.js";

import "../assets/js/multiselect.min.js";
import "../assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css";
import "../assets/css/bootstrap-datetimepicker.min.css";
import '../assets/css/style.css';

import Loginpage from '../pages/Login/Login';
import Registrationpage from '../pages/Register/Register';
import CreatePassword from '../pages/Create-password/Create_password';
import Forgotpassword from '../pages/Forgot-Password/Forgot_password';
import OTPscreen from '../pages/OTP/Otp';

// import DefaultLayout from '../pages/Default-layout';
import AppLayout from '../pages/Default-layout';

const Router = () => {

  const RouteWithRole = ({ Element }) => {
    return (
      <>
        <Element />
      </>
    );
  }

  return (
    <div>
      <Routes>
        {/* Initial pages for Login */}
        <Route exact path='/' element={<RouteWithRole Element={Loginpage} />}></Route>
        <Route exact path={ROUTES.Login} element={<RouteWithRole Element={Loginpage} />}></Route>
        <Route exact path={ROUTES.Register} element={<RouteWithRole Element={Registrationpage} />}></Route>
        <Route exact path={ROUTES.CreatePassword} element={<RouteWithRole Element={CreatePassword} />}></Route>
        <Route exact path={ROUTES.ForgotPassword} element={<RouteWithRole Element={Forgotpassword} />}></Route>
        <Route exact path={ROUTES.OTP} element={<RouteWithRole Element={OTPscreen} />}></Route>
        <Route exact path={ROUTES.DefaultLayout} element={<RouteWithRole Element={AppLayout} />}></Route>
      </Routes>
    </div>
  )
}

export default Router