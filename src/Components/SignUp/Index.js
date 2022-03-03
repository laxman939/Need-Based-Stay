import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ValidationForSignup from "./validation";

import "antd/dist/antd.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Role from "./Role";
import fetchApi from "../../Apis/fetchStay";

export default function SignUp() {
  const { role } = useSelector((state) => state.Role);

  // console.log("state role " + role);

  const [inputValues, setInputValues] = useState({
    // roleType: role,
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    userName: "",
    password: "",
  });

  //State for Error Validation
  const [error, setError] = useState({});

  function handleChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  //To handle Signup
  function handleSignupBtn(event) {
    event.preventDefault();

    //Error validation
    setError(ValidationForSignup(inputValues));

    console.log("inputValues " + inputValues.firstName);

    postData();
  }
  // https://need-based-stay.herokuapp.com/api/user/signup
  function postData() {
    fetchApi
      .post(`/${role}/signup`, inputValues)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.response.data));
  }
  return (
    <>
      <form>
        <div className="signupPage">
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
          <Role />

          <div>
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
          </div>
          {/* {error.signupName && <p className="error">{error.signupName}</p>} */}

          <div>
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
          </div>
          {/* {error.signupName && <p className="error">{error.signupName}</p>} */}

          <div>
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
          </div>
          {/* {error.signupCPswrd && <p className="error">{error.signupCPswrd}</p>} */}
          <div>
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
          </div>

          <div>
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
          </div>
          {error.emailId && <p className="error">{error.emailId}</p>}

          <div>
            <label className="label">
              <span>Password</span>
              <input
                className="input"
                type="password"
                name="password"
                value={inputValues.password}
                onChange={handleChange}
              />
            </label>
          </div>
          {error.password && <p className="error">{error.password}</p>}

          <div>
            <button
              type="submit"
              className="submit button"
              onClick={handleSignupBtn}
            >
              Sign Up
            </button>
          </div>
          <div>
            <p className="form-link">
              If you already have an account, just
              <Link to="/signin" style={{ textDecoration: "none" }}>
                &nbsp;Sign In
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
