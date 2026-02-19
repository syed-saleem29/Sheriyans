import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/course"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Course
      </NavLink>
      {/* <NavLink
        to="/course/kodex"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Kodex
      </NavLink> */}
    </div>
  );
};

export default Navbar;
