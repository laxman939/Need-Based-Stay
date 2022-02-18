import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ValidationForSignup from "./validation";

import "antd/dist/antd.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Role from "./Role";
import fetchApi from "../../Apis/fetchStay";

export default function SignUp() {
  const { role } = useSelector((state) => state.Role);

  // console.log("state role " + role);

  const dispatcher = useDispatch();

  const [ownerName, setOwnerName] = useState();

  const [inputValues, setInputValues] = useState({
    // roleType: role,
    fName: "",
    lName: "",
    nmbr: "",
    signupMail: "",
    signupPswrd: "",
  });

  //To convert first character to uppercase
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

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

    console.log("inputValues " + inputValues.fName);

    // To convert  first
    setOwnerName(
      capitalizeFirstLetter(inputValues.fName) +
        " " +
        capitalizeFirstLetter(inputValues.lName)
    );

    postData();
  }
  // https://need-based-stay.herokuapp.com/api/user/signup
  function postData() {
    fetchApi
      .post(`/${role}/signup`, {
        data: inputValues,
      })
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
      </form>
    </>
  );
}
