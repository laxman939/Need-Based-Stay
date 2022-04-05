import React from "react";

import "./style.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import NavigationBar from "./Components/Navbar";
import OwnerPage from "./Components/OwnerPage";
import PostProperty from "./Components/PostProperty";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp/Index";
import UserPage from "./Components/UserPage";

import { useSelector } from "react-redux";
import Favourites from "./Components/Favourites/Favourites";

function App() {
  const { role } = useSelector((state) => state.Role);
  const isSignup = useSelector((state) => state.Signup.signup);
  const isSignin = useSelector((state) => state.Signin.signin);
  console.log(
    "APp.js " + role + "isSignup " + isSignup + "isSignin " + isSignin
  );

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/postproperty" element={<PostProperty />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/owner" exact element={<OwnerPage />} />
          <Route path="/user" element={<UserPage />} />

          {/* {role === "owner" && (
            <Route path="/postproperty" element={<PostProperty />} />
          )}

          {role === "user" && (
            <Route path="/favourites" element={<Favourites />} />
          )}

          <Route path="/signup" element={<SignUp />} />

          {isSignup === true && (
            <Route path="/signin" exact element={<SignIn />} />
          )}

          {role === "owner" ? (
            <Route path="/owner" exact element={<OwnerPage />} />
          ) : role === "user" ? (
            <Route path="/user" element={<UserPage />} />
          ) : (
            <Route path="/signup" element={<SignUp />} />
          )} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/* <Route exact path="/signup">
  {!isSignup ? (
    <SignUp handleSignupUser={handleSignupUser} />
  ) : (
    <Redirect to="/signin" />
  )}
</Route>; */
