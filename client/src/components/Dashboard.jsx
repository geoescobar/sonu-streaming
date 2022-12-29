import React from "react";
import useAuth from "../context/useAuth";

function Dashboard({ code }) {
  const accessToken = useAuth(code);
  return <div>{code}</div>;
}

export default Dashboard;
