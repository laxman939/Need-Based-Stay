import React from "react";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";

import "./style.css";

function NavigationBar() {
  const props = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Post Property",
        link: "/postproperty",
      },
      {
        text: "Sign Up",
        link: "/signup",
      },
      {
        text: "Sign In",
        link: "/signin",
      },
      {
        text: "Owner",
        link: "/owner",
      },
      {
        text: "User",
        link: "/user",
      },
    ],
    logo: {
      text: "Need Based Stay",
      link: "/",
    },
    style: {
      barStyles: {
        background: "green",
      },
      sidebarStyles: {
        background: "blue",
        buttonColor: "white",
      },
    },
  };
  return <Navbar {...props} />;
}

export default NavigationBar;
