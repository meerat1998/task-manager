import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";

import "../styles/SignupForm.css";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Redirect to login page
    history.push("/login");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-wrapper">
          <InputText
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={username ? "input-filled" : ""}
          />
          <label htmlFor="username" className="input-label">
            Username
          </label>
        </div>
        <div className="input-wrapper">
          <InputText
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={email ? "input-filled" : ""}
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
        </div>
        <div className="input-wrapper">
          <InputText
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={password ? "input-filled" : ""}
          />
          <label htmlFor="password" className="input-label">
            Password
          </label>
        </div>
        <div className="input-wrapper">
          <InputText
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={confirmPassword ? "input-filled" : ""}
          />
          <label htmlFor="confirm-password" className="input-label">
            Confirm Password
          </label>
        </div>
        <Button label="Sign Up" className="p-button-primary" />
      </form>
    </div>
  );
};

export default SignupForm;
