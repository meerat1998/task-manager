import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import SignupForm from "./components/SignupForm"
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
