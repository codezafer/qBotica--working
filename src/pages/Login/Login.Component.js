import React, { useEffect, useState } from 'react';
import { HelmetProvider ,Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form'
import { emailrgx } from '../../constant/index'
import { setTempEmailId, clearTempEmailId } from '../../utils/storageConstants'
import IMAGEROUTER from '../../routes/imgRouter';
import { connect } from 'react-redux';


const Loginpage = (props) => {
console.log(props, 'props')
  const [eye, seteye] = useState(true);
  const [successMsg, setSuccessMsg] = useState("")

  const {
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (emailId) {
      setTempEmailId(emailId)
    }
  }, [emailId])


  // async function loginApi() {
  //   const url = "http://localhost:3000/login";
  //   const inputs = JSON.stringify({ emailId, password })
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //     },
  //     body: inputs,
  //   }
  //   try {
  //     const req = await fetch(url, options);
  //     const res = await req.json();
  //     console.log(req);
  //     return res;
  //   } catch (err) { console.log(err) }

  // }

  const LoginSubmit = async (e) => {
    e.preventDefault();
    if (emailId === "" || password === "") {
      return setError('error', {
        message: "The required field is empty"
      })
    }

    if (!emailrgx.test(emailId)) {
      setError('email', {
        message: "Invalid email"
      })
    }


    const loginRequest = await loginApi();
    if (loginRequest.times === 2) {
      setSuccessMsg("Logged in successfull")
      clearErrors(['email', 'password', 'error'])
      setTimeout(() => {
        props.history.push('/app/administrator/requisition')
      }, 500)
      clearTempEmailId(emailId)
    } else if (loginRequest.times === 1 && emailrgx.test(emailId)) {
      props.history.push('/createpassword')
    } else {
      setError('error', {
        message: loginRequest.msg,
      })
      return props.history.push('/login')
    }
  }

  const onEyeClick = () => {
    seteye(!eye)
  }

  return (


    //format: shift+Alt+F
    <>
      <HelmetProvider>
        <div>
          <Helmet>
            <title>Login - qBotica</title>
            <meta name="description" content="Login page" />
          </Helmet>
        </div>
      </HelmetProvider>
      <div className="account-content">
        {/* <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</Link> */}
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <Link to="/login"><img src={IMAGEROUTER.AppLogo} alt="Qbotica" /></Link>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle"></p>
              {/* Account Form */}
              <div>
                <form onSubmit={LoginSubmit}>
                  {successMsg && <div className='task-success'>{successMsg}</div>}
                  <small>{errors?.error?.message}</small>
                  <div className="form-group">
                    <label>Email Address</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input className={`form-control  ${errors?.email ? "error-input" : ""}`} type="text" value={value} onChange={(e) => setEmailId(e.target.value)} />

                      )}
                    />
                    <small>{errors?.email?.message}</small>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Password</label>
                      </div>
                      <div className="col-auto">
                        <Link className="text-muted" to="/forgotpassword">
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <div className="pass-group">
                          <input type={eye ? "password" : "text"} className={`form-control  ${errors?.password ? "error-input" : ""}`} value={value} onChange={(e) => setPassword(e.target.value)} autoComplete="false" />
                          <span onClick={onEyeClick} className={`fa toggle-password" ${eye ? "fa-eye-slash" : "fa-eye"}`} />
                        </div>
                      )}

                    />
                    <small>{errors?.password?.message}</small>
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="btn btn-primary account-btn"
                      type="submit"
                    >
                      Login
                    </button>

                  </div>
                </form>
                <div className="account-footer">
                  <p>Don't have an account yet? <Link to="/register">Register</Link></p>
                </div>
              </div>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Loginpage;