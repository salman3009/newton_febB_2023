import React, { useState } from "react";
import { Redirect,useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "newton_school") {
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
    else{
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-div">
        <h1>Login Form</h1>
        <form  onSubmit={handleLogin} className="form">
          <div className="username-div">
              <label className="username-label">Username:</label>
              <input
                  className="username-input"
                  type="text"
                  onChange={(e)=>setUsername(e.target.value)}
              />
          </div>
          <div className="password-div">
              <label className="password-label">Password:</label>
              <input
                  className="password-input"
                  type="password"
                   onChange={(e)=>setPassword(e.target.value)}
              />
          </div>
          <button type="submit" className="login-btn">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
