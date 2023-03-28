import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from 'react-router-dom'

const Login = () => {
  const [pass, setPass] = useState("");
  const [email, setemail] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const password = "priyanka@123";
  const loginmail = "priyanka@gmail.com";

  const handleEvaluation = () => {
    if (password === pass && loginmail === email) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      alert("Please enter valid details");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1>Welcome back to Pretty Login</h1>
        <p>It's great to have you back!</p>
        <form className="form">
          <label>EMAIL</label>
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="email-input"
            type={"email"}
          />
          <label>PASSWORD</label>
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="password-input"
            type={"password"}
          />
          <div className="rememberme">
            <div>
              <input type={"checkbox"} className='check-box' />
              <label>Remember me?</label>
            </div>
            <p>Forget password?</p>
          </div>
          <div className="login-button-container">
            {isCorrect ? (
              <Link to='/Home' onClick={handleEvaluation} className="login-button" type="submit">
                LOGIN
              </Link>
            ) : (
              <div>{alert("Please enter valid details")}</div>
            )}
            <button className="createaccount-button">CREATE ACCOUNT</button>
          </div>
          <p className="login-with">Or login with</p>
          <p className="facebook">Facebook Google</p>
        </form>
      </div>
      <div className="image-part">
        <img
          className="wallpaper"
          alt="loading"
          src="https://images.unsplash.com/photo-1679850133197-ab3b3dd0d41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        />
      </div>
    </div>
  );
};

export default Login;
