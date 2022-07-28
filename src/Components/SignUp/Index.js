import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

//Errors
import ValidationForSignup from "./validation";

// antd
import "antd/dist/antd.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { signupClick, roleCheck } from "../../Redux/Actions/stayActions";
import fetchApi from "../../Apis/fetchStay";

// Main component
export default function SignUp() {
  const { role } = useSelector((state) => state.Role);
  const isSignup = useSelector((state) => state.Signup.signup);

  console.log("role " + role);

  // console.log("role " + role);
  const dispatch = useDispatch();

  const [visitor, setVisitor] = useState();
  const [inputValues, setInputValues] = useState({
    roleType: role,
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    userName: "",
    signUpPswrd: "",
  });

  //State for Error Validation
  const [error, setError] = useState({});

  // Navigation
  const navigate = useNavigate();

  // handlers
  function handleChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  //To handle Signup button
  function handleSignupBtn() {
    //Error validation
    setError(ValidationForSignup(inputValues));

    if (inputValues.signUpPaswrd !== "" && inputValues.emailId !== "") {
      dispatch(signupClick(!isSignup));
      dispatch(roleCheck(visitor));
      postData();
      navigate("/signin");
    }
  }
  //https://need-based-stay.herokuapp.com/api/user/signup
  function postData() {
    fetchApi
      .post(`/${role}/signup`, inputValues)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.response.data));
  }
  return (
    <>
      <form className="form">
        <div className="avatar">
          <Avatar
            size={62}
            style={{
              backgroundColor: "#020d1f",
            }}
            icon={<UserOutlined />}
          />

          <h4 className="header">Create your Account</h4>
        </div>
        <div className="role">
          <div className="role_select">
            <input
              className="role_input"
              type="radio"
              name="myRadio"
              value="user"
              id="myRadio1"
              onClick={(event) => setVisitor(event.target.value)}
            />
            <label className="role_label" htmlFor="myRadio1">
              User
            </label>
          </div>
          <div className="role_select">
            <input
              className="role_input"
              type="radio"
              name="myRadio"
              value="owner"
              id="myRadio2"
              onClick={(event) => setVisitor(event.target.value)}
            />
            <label className="role_label" htmlFor="myRadio2">
              Owner
            </label>
          </div>
        </div>
        <div className="signupPage">
          <div className="sp-1">
            <div className="single-form">
              <label className="label">
                <span>First Name</span>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  value={inputValues.firstName}
                  onChange={handleChange}
                />
              </label>
              {error.firstName && <p className="error">{error.firstName}</p>}
            </div>
            <div className="single-form">
              <label className="label">
                <span>Last Name</span>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  value={inputValues.lastName}
                  onChange={handleChange}
                />
              </label>
              {error.lastName && <p className="error">{error.lastName}</p>}
            </div>
          </div>

          <div className="sp-2">
            <div className="single-form">
              <label className="label">
                <span>Phone Number</span>
                <input
                  className="input"
                  type="tel"
                  name="phoneNumber"
                  value={inputValues.phoneNumber}
                  onChange={handleChange}
                />
              </label>
              {error.phoneNumber && (
                <p className="error">{error.phoneNumber}</p>
              )}
            </div>
            <div className="single-form">
              <label className="label">
                <span>User Name</span>
                <input
                  className="input"
                  type="text"
                  name="userName"
                  value={inputValues.userName}
                  onChange={handleChange}
                />
              </label>
              {error.userName && <p className="error">{error.userName}</p>}
            </div>
          </div>

          <div className="sp-3">
            <div className="single-form">
              <label className="label">
                <span>Email</span>
                <input
                  className="input"
                  type="email"
                  name="emailId"
                  value={inputValues.emailId}
                  onChange={handleChange}
                />
              </label>
              {error.emailId && <p className="error">{error.emailId}</p>}
            </div>
            <div className="single-form">
              <label className="label">
                <span>Password</span>
                <input
                  className="input"
                  type="password"
                  name="signUpPswrd"
                  value={inputValues.signUpPswrd}
                  onChange={handleChange}
                />
              </label>
              {error.signUpPswrd && (
                <p className="error">{error.signUpPswrd}</p>
              )}
            </div>
          </div>
          <div className="sp-5">
            <button
              type="submit"
              className="btn signup-btn"
              onClick={handleSignupBtn}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="sp-6">
          <p className="form-link">
            If you already have an account, just
            <Link className="link-signup" to="/signin">
              &nbsp;Sign In
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
