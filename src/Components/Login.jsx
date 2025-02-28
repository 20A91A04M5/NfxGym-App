import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { loginlogo } from "../assets";
import { Link, useNavigate } from "react-router-dom";

import {signInWithPopup, GoogleProvider, auth, signInAnonymously} from "../Firbase/Firebase_Config"
import { LiaLinkedin } from "react-icons/lia";

const LoginForm = () => {

  const navigate = useNavigate();

  const handleGoogleLogin = async() => {

    await signInWithPopup(auth, GoogleProvider)
    .then(() => {
      alert("loggedin with google")
      navigate("/")
    })
    .catch((err) => {
      alert(err)
    })

  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src={loginlogo}
              className="img-fluid"
              alt="Phone image"
            />
          </div>
        

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <h2 className="fw-bold text-warning mb-4">Sign In now</h2>
            <form>
              {/* Email input with icon */}
              <div data-mdb-input-init className="form-outline mb-4 position-relative">
                <span className="input-icon">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
                <label className="form-label text-primary" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              {/* Password input with icon */}
              <div data-mdb-input-init className="form-outline mb-4 position-relative">
                <span className="input-icon">
                  <FaLock />
                </span>
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                />
                <label className="form-label text-primary" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    defaultChecked
                  />
                  <label className="form-check-label text-light" htmlFor="form1Example3">
                    Remember me
                  </label>
                </div >
                <a style={{textDecoration:"none"}} href="#!">Forgot password?</a>
              </div>

              {/* Submit button */}

              <div className="signup-link text-center mt-1">
              <span className="text-light">Don't have an account? </span>
                <Link to={"/signup"} href="#" className="text-primary text-decoration-none">Sign Up</Link><br />
              <Link to={"/Nfxapp"}
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-lg btn-block"
              >
                Login in
              </Link>
                
            </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <a
                data-mdb-ripple-init
                className="btn  btn-danger btn-lg btn-block"
                style={{ backgroundColor: "red" }}
                href="#!"
                role="button"
                onClick={handleGoogleLogin}
              >
                <i className="fab fa-Google me-2"></i>Continue with Google
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
