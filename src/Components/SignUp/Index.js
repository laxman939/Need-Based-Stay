import React, { useState } from "react";
import { Link } from "react-router-dom";

import ValidationForSignup from "./validation";
// import "./style.css";

import "antd/dist/antd.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Role from "./Role";

export default function SignUp(props) {
  //States
  const [inputValues, setInputValues] = useState({
    fName: "",
    lName: "",
    nmbr: "",
    signupMail: "",
    signupPswrd: "",
  });

  //States to pass to App component
  // const [userData, setUserData] = useState({});

  //State for Error Validation
  const [error, setError] = useState({});

  //To update state
  function handleChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  //To handle Signup
  function handleSignupBtn(event) {
    event.preventDefault();
    if (inputValues.signupPswrd === inputValues.signupCPswrd) {
      //Error validation
      setError(ValidationForSignup(inputValues));

      //To update state
      // setUserData(inputValues);
      //console.log("Signup" + userData.signupMail + userData.signupPswrd);

      //To pass to App component
      // props.handleSignupUser(userData);
    } else {
      alert("Password and Confirm password are must be same");
    }
  }

  return (
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
            name="fName"
            value={inputValues.fName}
            onChange={handleChange}
          />
        </label>
      </div>
      {error.signupName && <p className="error">{error.signupName}</p>}

      <div>
        2
        <label className="label">
          <span>Last Name</span>
          <input
            className="input"
            type="text"
            name="lName"
            value={inputValues.lName}
            onChange={handleChange}
          />
        </label>
      </div>
      {error.signupName && <p className="error">{error.signupName}</p>}

      <div>
        <label className="label">
          <span>Phone Number</span>
          <input
            className="input"
            type="tel"
            name="nmbr"
            value={inputValues.nmbr}
            onChange={handleChange}
          />
        </label>
      </div>
      {/* {error.signupCPswrd && <p className="error">{error.signupCPswrd}</p>} */}

      <div>
        <label className="label">
          <span>Email</span>
          <input
            className="input"
            type="email"
            name="signupMail"
            value={inputValues.signupMail}
            onChange={handleChange}
          />
        </label>
      </div>
      {error.signupMail && <p className="error">{error.signupMail}</p>}

      <div>
        <label className="label">
          <span>Password</span>
          <input
            className="input"
            type="password"
            name="signupPswrd"
            value={inputValues.signupPswrd}
            onChange={handleChange}
          />
        </label>
      </div>
      {error.signupPswrd && <p className="error">{error.signupPswrd}</p>}

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
          If you already has an account, just
          <Link to="/signin" style={{ textDecoration: "none" }}>
            &nbsp;Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
