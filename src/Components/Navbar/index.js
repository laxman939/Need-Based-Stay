import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const NavigationBar = () => {
  return (
    <>
      <div className="Nav-section">
        <NavLink to="/" className="nav-head">
          Need Based Stay
        </NavLink>
        <div className="nav-links">
          <NavLink to="/postproperty" className="link">
            Post Property
          </NavLink>
          <NavLink to="/signup" className="link">
            Sign Up
          </NavLink>
          <NavLink to="/signin" className="link">
            Sign In
          </NavLink>
          {/* <NavLink to="/owner" className="link">
            Owner
          </NavLink> */}
          <NavLink to="/user" className="link">
            Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
