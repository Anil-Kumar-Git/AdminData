import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Button } from "react-bootstrap";
import PasswordModel from "../Components/models/PasswordModel";
import { loginUser } from "../Services/login/actions";
import { middleLogin } from "../Middleware/AxiosApis/apiResponce";
import { validator } from "../Middleware/Validation";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //fetch Api Login
  // const userLogin = async () => {
  //   setLoading(true);
  //   let item = { email, password };
  //   let res = await middleLogin(item);
  //   if (res?.data) {
  //     setLoading(false);
  //     navigate("/");
  //     dispatch(loginUser(res?.data));
  //   } else {
  //     setLoading(false);
  //     setError(res.message);
  //   }
  // };

  //Axios Api Login //Live Bright-swipe-Apis
  const userLogin = async () => {
    if (validator.allValid()) { 
      setError("")
      setLoading(true);
    const allValues = {
      value: email,
      password:password,
      userType: "admin",
      type: "email",
    }
    let res = await middleLogin(allValues);
    if (res?.data) {
      setLoading(false);
      navigate("/");
      dispatch(loginUser(res?.data));
    } else {
      setLoading(false);
      setError(res.message);
    }
  }else {
    setError("please fill all fields")
  }
  };

  return (
    <div>
      <main className="main">
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logoA1.png" alt="" />
                      <span className="d-none d-lg-block">DemoAdmin</span>
                    </a>
                  </div>
                  {/* End Logo */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                        <p className="text-center small">
                          Enter your email &amp; password to login
                        </p>
                      </div>
                      <div className="text-center small error-red">{error}</div>
                      <br />
                      <div className="row g-3 needs-validation" noValidate="">
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Email
                          </label>
                            <input
                              type="text"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              id="yourUsername"
                              required
                              onBlur={()=>validator.showMessageFor('email')}
                            />                         
                        </div>
                        <span className="small error-red">
                          {validator.message("email",email,"required")}
                          </span>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="yourPassword"
                            required
                            onBlur={()=>validator.showMessageFor("password")}
                          />
                        </div>
                        <span className="small error-red">
                        {validator.message("password",password,"required")}
                        </span>
                        <div className="col-12">
                          <input
                            type="checkbox"
                            id="remember-me-checkbox"
                            defaultChecked=""
                          />
                          <label htmlFor="remember-me-checkbox">
                            Stay signed in for 30 days
                          </label>
                           <Link to="/forget-pwd">
                          <Button
                            variant="link"
                          >
                            forgot password
                          </Button>
                          </Link>
                          <Link to="/registration">
                          <Button
                            variant="link"
                          >
                            registration
                          </Button>
                          </Link>
                          <div
                            className="do-not-remember-message"
                            id="do-not-remember-message"
                            style={{ display: "none" }}
                          >
                            <span>
                              You will be logged out after 30 minutes of
                              inactivity.
                            </span>
                          </div>
                        </div>
                        <div className="col-12">
                          {loading ? (
                            <Button
                              className="btn btn-primary w-100"
                              variant="primary"
                              disabled
                            >
                              <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                              Loading...
                            </Button>
                          ) : (
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                              onClick={userLogin}
                            >
                              Login
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <PasswordModel />
    </div>
  );
};

export default Login;
