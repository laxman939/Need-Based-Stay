import React from "react";

import "./style.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavigationBar from "./Components/Navbar";
import OwnerPage from "./Components/OwnerPage";
import PostProperty from "./Components/PostProperty";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp/Index";
import UserPage from "./Components/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/postproperty" exact element={<PostProperty />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/owner" exact element={<OwnerPage />} />
          <Route path="/user" exact element={<UserPage />} />
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
