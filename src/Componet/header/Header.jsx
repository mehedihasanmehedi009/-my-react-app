 import React from "react";
import { NavLink } from "react-router";

export const Header = () => {
  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm transition-colors border ${
      isActive
        ? "text-[#1e1b6b] font-semibold border-[#4f46e5] bg-white"
        : "text-slate-700 font-medium border-transparent hover:text-[#1e1b6b] hover:bg-slate-50"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        {/* Brand */}
        <NavLink
          to="/"
          end
          className="text-2xl font-bold text-[#1e1b6b] no-underline"
        >
          Book Vibe
        </NavLink>

        {/* Center Nav Links */}
        <nav className="flex items-center gap-2">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/listed-books" className={navClass}>
            Listed Books
          </NavLink>
          <NavLink to="/pages-to-read" className={navClass}>
            Pages to Read
          </NavLink>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/signin"
            className="px-4.5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#3730a3] hover:opacity-90 transition-opacity no-underline"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="px-4.5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#ec268f] hover:opacity-90 transition-opacity no-underline"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};