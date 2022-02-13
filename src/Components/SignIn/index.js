import React, { useState } from "react";
import { Link } from "react-router-dom";

import generateUserName from "generate-username-from-email";

import "antd/dist/antd.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./style.css";
import Validation from "./validation";

export default function SignIn(props) {
  //States
  const [values, setValues] = useState({
    mail: "",
    password: "",
  });

  const [userName, setUserName] = useState(null);

  const [errors, setErrors] = useState({});

  //Handle functions
  //To update state with user inputs
  function handleChange(event) {
    //Updating state based on name
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSigninBtn(event) {
    event.preventDefault();

    //validating inputs
    setErrors(Validation(values));

    //updating state when signin button clicked
    setUserName(values);

    //To Eliminate numbers and  Extract username
    let extractedName = generateUserName(values.mail).replace(/[0-9]/g, "");

    //Convert first character  to UpperCase
    let capName = extractedName[0].toUpperCase() + extractedName.slice(1);

    //Updating userName with capName.
    setUserName(capName);

    //Passing as parameters to app component;(or) Controlling the state in App component
    props.handleUser(userName);
  }

  return (
    <div className="sign-in">
      <div className="avatar">
        <Avatar
          size={70}
          style={{
            backgroundColor: "#020d1f",
          }}
          icon={<UserOutlined />}
        />
        <h2 className="welcome-header">Welcome</h2>
      </div>
      <div>
        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={handleChange}
            name="mail"
            value={values.mail}
          />
        </label>
      </div>
      {errors.mail && <p className="error">{errors.mail}</p>}
      <div>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={values.password}
          />
        </label>
      </div>
      {errors.password && <p className="error">{errors.password}</p>}
      <div>
        <p className="forgot-pass">Forget password?</p>
      </div>
      <div>
        <button className="submit" type="submit" onClick={handleSigninBtn}>
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
