import React from "react";
import {  NavLink } from "react-router-dom";

const Header = () => {
  const navNavLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "red" : "white",
      fontSize: "25px",
    };
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "space-around",
        cursor: "pointer",
        backgroundColor: "#50c7a5",
        marginBottom: "50px",
      }}
    >
      <NavLink style={navNavLinkStyles} to={"/app"}>
        Home
      </NavLink>
      <NavLink style={navNavLinkStyles} to={"/about"}>
        About
      </NavLink>
      <NavLink style={navNavLinkStyles} to={"/contact"}>
        Contact
      </NavLink>
    </div>
  );
};

export default Header;
