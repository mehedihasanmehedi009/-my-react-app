 import React from "react";
import { NavLink } from "react-router";

export const Header = () => {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#2563eb" : "#111827",
    textDecoration: "none",
  });

  return (
    <header style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
      <nav style={{ display: "flex", gap: "16px" }}>
        <NavLink to="/" end style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/user" style={linkStyle}>
          User
        </NavLink>
        <NavLink to="/users" style={linkStyle}>
          Users
        </NavLink>
      </nav>
    </header>
  );
};