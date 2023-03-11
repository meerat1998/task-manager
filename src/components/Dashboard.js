import React from "react";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Hi {username}!</p>
    </div>
  );
};

export default Dashboard;
