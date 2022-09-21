import React, { useState } from "react";
import "./style.css";

import SignupScreen from "./SignupScreen.js";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="nav">
        <img className="nav_logo" src="logo2.png" alt="logo" />
        <button onClick={() => setSignIn(true)} className="login--button">
          Sign In
        </button>
      </div>

      <div className="login--gradient"></div>

      <div className="login--body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            {" "}
            <h1>Get ready to chill... </h1>
            <h2>Ready? Enter your email</h2>
            <div className="login--input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login--getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
