/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from 'react-router-dom';

function Error404() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Error 404 - qBotica</title>
          <meta name="description" content="Login page" />
        </Helmet>
      </HelmetProvider>
      <div className="error-box">
        <h1>404</h1>
        <h3><i className="fa fa-warning" /> Oops! Page not found!</h3>
        <p>The page you requested was not found.</p>
        <Link onClick={() => localStorage.setItem("firstload", "true")} to="/login" className="btn btn-custom">Back to Home</Link >
      </div>
    </>

  );

}

export default Error404;
