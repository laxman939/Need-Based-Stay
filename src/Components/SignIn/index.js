import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// antd
import "antd/dist/antd.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { signinClick, getUserName } from "../../Redux/Actions/stayActions";
import "./style.css";
import Validation from "./validation";

// Main Component
export default function SignIn() {
  const { role } = useSelector((state) => state.Role);
  const isSignup = useSelector((state) => state.Signup.signup);
  const isSignin = useSelector((state) => state.Signin.signin);

  console.log("SignIn Page isSignup " + isSignup + "isSignin " + isSignin);

  const [values, setValues] = useState({
    userName: "",
    mail: "",
    password: "",
  });
  // Errors
  const [errors, setErrors] = useState({});

  const dispatcher = useDispatch();

  // Navigation
  const navigate = useNavigate();

  //Handle functions
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  // Signin Button
  function handleSigninBtn(event) {
    event.preventDefault();

    //validating inputs
    setErrors(Validation(values));

    if (values.mail || values.password || values.userName) {
      //Convert first character  to UpperCase
      let capName = values.userName[0].toUpperCase() + values.userName.slice(1);
      console.log("capName " + capName);

      dispatcher(signinClick(!isSignin));
      dispatcher(getUserName(capName));

      //Navigate based on role
      if (role === "owner") {
        navigate("/owner");
      } else {
        navigate("/user");
      }
    }
  }

  return (
    <form className="form">
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
      <div className="signinPage">
        <div className="sn-1">
          <label className="label">
            <span>User Name</span>
            <input
              className="input"
              type="text"
              name="userName"
              value={values.userName}
              onChange={handleChange}
            />
          </label>
        </div>
        {errors.userName && <p className="error">{errors.userName}</p>}

        <div className="sn-2">
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
        <div className="sn-3">
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

        <div className="sn-4">
          <button
            className="btn signin-btn"
            type="submit"
            onClick={handleSigninBtn}
          >
            Sign In
          </button>
        </div>

        <div className="sn-5">
          <p className="form-link">
            To create an account, just
            <Link
              className="link-signin"
              to="/signup"
              style={{ textDecoration: "none" }}
            >
              &nbsp; Signup
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

// if (props.signupUser.mail === values.mail)
