import React from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/coffees">Coffees</NavLink>
      <NavLink to="/addCoffee">Add Coffee</NavLink>
      <NavLink to="/signUp">Sign Up</NavLink>
      <NavLink to="/signIn">Sign In</NavLink>
    </div>
  );
};

export default Headers;
