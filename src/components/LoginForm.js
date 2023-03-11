import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/LoginForm.css";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
if(username && password){
    // Redirect to dashboard screen with greeting message
    history.push(`/dashboard?username=${username}`);
}
else{
  window.alert("provide username and password to proceed")
}
  };

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-wrapper">
            <InputText
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
              className={username || usernameFocus ? "input-filled" : ""}
            />

            <label htmlFor="username" className="input-label">
              Username
            </label>
          </div>
          <div className="input-wrapper">
            <InputText
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              className={password || passwordFocus ? "input-filled" : ""}
            />

            <label htmlFor="password" className="input-label">
              Password
            </label>
          </div>
          <Button label="Log In" className="p-button-primary" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
