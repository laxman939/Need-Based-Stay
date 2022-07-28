import React from "react";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  signupClick,
  signinClick,
  roleCheck,
} from "../../Redux/Actions/stayActions";

import "./style.css";

const NavigationBar = () => {
  const { role } = useSelector((state) => state.Role);

  const dispatcher = useDispatch();

  function resetPage() {
    dispatcher(signinClick(false));
    dispatcher(signupClick(false));
    dispatcher(roleCheck(""));
  }

  return (
    <>
      <div className="Nav-section">
        <NavLink to="/" className="nav-head">
          Need Based Stay
        </NavLink>
        <div className="nav-links">
          {role === "owner" && (
            <NavLink to="/postproperty" className="link">
              Post Property
            </NavLink>
          )}

          {role === "user" && (
            <NavLink to="/favourites" className="link">
              Favourites
            </NavLink>
          )}

          <NavLink to="/signup" className="link" onClick={resetPage}>
            New account
          </NavLink>

          {role === "owner" ? (
            <NavLink to="/owner" className="link">
              Profile
            </NavLink>
          ) : (
            <NavLink to="/user" className="link">
              Profile
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
