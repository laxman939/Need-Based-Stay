import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";

import ValidationForSignup from "./validation";

import "antd/dist/antd.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Role from "./Role";
// import fetchApi from "../../Apis/fetchStay";

export default function SignUp() {
  const { role } = useSelector((state) => state.Role);

  // console.log("state role " + role);

  const [inputValues, setInputValues] = useState({
    // roleType: role,
    fName: "",
    lName: "",
    nmbr: "",
    signupMail: "",
    signupPswrd: "",
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

    console.log("inputValues " + inputValues);
  }

  useEffect(() => {
    let data = JSON.stringify({
      username: "username",
      password: "password",
    });

    const response = Axios.post(
      "https://need-based-stay.herokuapp.com/user/signup",
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("response " + response);
    // fetchApi
    //   .post(`/${role}/signup`, {
    //     data: "hello",
    //   })
    //   .then((response) => console.log(response.data))
    //   .catch((err) => console.log(err.response.data));
  }, [role, inputValues]);

  return (
    <>
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
        {/* {error.signupName && <p className="error">{error.signupName}</p>} */}

        <div>
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
        {/* {error.signupName && <p className="error">{error.signupName}</p>} */}

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
    </>
  );
}
