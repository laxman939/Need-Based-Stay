import React from "react";

import "responsive-navbar-react/dist/index.css";

import "./style.css";

import {
  Nav,
  NavLink,
  NavMenu,
  Bars,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements.js";

const NavigationBar = () => {
  return (
    <>
      <Nav>
        <NavBtn>
          {/* <NavLink to="/">Logo</NavLink> */}
          <NavBtnLink to="/">Need Based Stay</NavBtnLink>
        </NavBtn>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/postproperty" activeStyle>
            Post Property
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/signin" activeStyle>
            Sign In
          </NavLink>
          <NavLink to="/owner" activeStyle>
            Owner
          </NavLink>
          <NavLink to="/user" activeStyle>
            User
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavigationBar;
