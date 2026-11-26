import React, { useState } from "react";
import { NavLink } from "react-router";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm transition-colors border no-underline ${
      isActive
        ? "text-white font-semibold border-[#ec268f] bg-slate-800"
        : "text-slate-200 font-medium border-transparent hover:text-white hover:bg-slate-800/80"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-lg text-sm transition-colors no-underline ${
      isActive
        ? "bg-[#3730a3] text-white font-semibold"
        : "text-slate-700 font-medium hover:bg-indigo-50 hover:text-[#1e1b6b]"
    }`;

  return (
    <header className="relative sticky top-0 z-50 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Mobile Dropdown Trigger + Brand h1 */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <h1 className="text-xl sm:text-2xl font-bold text-white leading-none m-0">
            <NavLink to="/" end className="text-inherit no-underline">
              Book <span className="text-[#ec268f]">Vibe</span>
            </NavLink>
          </h1>
        </div>

        {/* Center (Desktop): NavLinks */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/listed" className={navClass}>
            Listed Books
          </NavLink>
          <NavLink to="/wishliste" className={navClass}>
            Pages to Read
          </NavLink>
        </nav>

        {/* Right: Sign In & Sign Up */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <NavLink
            to="/signin"
            className="px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#3730a3] hover:opacity-90 transition-opacity no-underline whitespace-nowrap"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#ec268f] hover:opacity-90 transition-opacity no-underline whitespace-nowrap"
          >
            Sign Up
          </NavLink>
        </div>
      </div>

      {/* Compact Mobile Dropdown NavLinks */}
      {menuOpen && (
        <nav className="md:hidden absolute left-4 sm:left-6 mt-2 w-52 bg-white border border-slate-200 rounded-xl p-1.5 shadow-lg flex flex-col gap-1 z-50">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={mobileNavClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/listed"
            onClick={() => setMenuOpen(false)}
            className={mobileNavClass}
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/wishliste"
            onClick={() => setMenuOpen(false)}
            className={mobileNavClass}
          >
            Pages to Read
          </NavLink>
        </nav>
      )}
    </header>
  );
};