
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FaFacebookF } from "react-icons/fa";
import { faFacebookF,faGoogle,faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons";
import { logosignup } from "../assets";
import { Link } from "react-router-dom";
const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="text-center text-lg-start">
      <div className="container py-4">
        <div className="row g-0 vh-100 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card bg-body-tertiary shadow-lg p-5">
              <div className="card-body text-center">
                <h2 className="fw-bold text-warning mb-4">Sign up now</h2>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <span className="text-light">Allready have an account? </span>
                  <Link to={"/login"} href="#" className="text-warning   rounded-pill text-decoration-none">Login</Link><br />
                  <button type="submit" className="btn btn-primary btn-block mb-3">
                    Sign up
                  </button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating fs-5 mx-1">
                      {/* <i className="fab fa-facebook-f "></i> */}
                      {/* <FontAwesomeIcon icon={FaFacebookF} /> */}
                      <FontAwesomeIcon icon={faFacebookF} />
                     
                    </button>
                    <button type="button" className="btn btn-link btn-floating fs-5 mx-1">
                      {/* <i className="fab fa-google"></i> */}
                      <FontAwesomeIcon icon={faGoogle} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      {/* <i className="fab fa-twitter"></i> */}
                      <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      {/* <i className="fab fa-github"></i> */}
                      <FontAwesomeIcon icon={faYoutube} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src={logosignup}
              height={400}
              className="w-100 rounded-4 shadow-4"
              alt="Signup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
