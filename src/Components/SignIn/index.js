import React, { useState } from "react";
import { Link } from "react-router-dom";

import generateUserName from "generate-username-from-email"; //To get username from mail

import "antd/dist/antd.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./style.css";
import Validation from "./validation";

export default function SignIn(props) {
  const [values, setValues] = useState({
    mail: "",
    password: "",
  });

  const [userName, setUserName] = useState(null);

  const [errors, setErrors] = useState({});

  //Handle functions
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSigninBtn(event) {
    event.preventDefault();

    //validating inputs
    setErrors(Validation(values));

    setUserName(values);

    //To Eliminate numbers and  Extract username
    let extractedName = generateUserName(values.mail).replace(/[0-9]/g, "");

    //Convert first character  to UpperCase
    let capName = extractedName[0].toUpperCase() + extractedName.slice(1);

    //Updating userName with capName.
    setUserName(capName);

    //Passing as parameters to app component;(or) Controlling the state from App component
    props.handleUser(userName);
  }

  return (
    <div className="signinPage">
      <div className="avatar">
        <Avatar
          size={62}
          style={{
            backgroundColor: "#020d1f",
          }}
          icon={<UserOutlined />}
        />
        <h4 className="header">Welcome</h4>
      </div>
      <div>
        <label className="label">
          <span>Email</span>
          <input
            className="input"
            type="email"
            onChange={handleChange}
            name="mail"
            value={values.mail}
          />
        </label>
      </div>
      {errors.mail && <p className="error">{errors.mail}</p>}
      <div>
        <label className="label">
          <span>Password</span>
          <input
            className="input"
            type="password"
            onChange={handleChange}
            name="password"
            value={values.password}
          />
        </label>
      </div>
      {errors.password && <p className="error">{errors.password}</p>}
      {/* <div>
        <p className="forgot-pass">Forget password?</p>
      </div> */}
      <div>
        <button
          className="submit button"
          type="submit"
          onClick={handleSigninBtn}
        >
          Sign In
        </button>
      </div>
      <div>
        <p className="form-link">
          To create an account, just
          <Link to="/signup" style={{ textDecoration: "none" }}>
            &nbsp; Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

// if (props.signupUser.mail === values.mail)
