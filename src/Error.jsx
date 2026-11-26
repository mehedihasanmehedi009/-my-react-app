 import React from "react";
import { Link, useNavigate, useRouteError } from "react-router";

export const Error = () => {
  const navigate = useNavigate();
  const routeError = useRouteError?.();

  const statusCode = routeError?.status || 404;
  const message =
    routeError?.statusText ||
    "Looks like this chapter hasn't been written yet or the page was moved.";

  return (
    <section className="min-h-[80vh] bg-white px-6 py-16 flex items-center justify-center relative overflow-hidden">
      {/* Subtle Decorative Background Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-indigo-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-pink-100/70 blur-3xl" />

      <div className="relative z-10 max-w-2xl w-full bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
        {/* Unique Book-Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold tracking-wide text-[#3730a3] shadow-2xs mb-6 animate-bounce">
          <span>Missing Page</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ec268f]" />
          <span>Book Vibe</span>
        </div>

        {/* Big Gradient Error Code */}
        <h1 className="text-7xl sm:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-[#3730a3] via-[#4f46e5] to-[#ec268f] bg-clip-text text-transparent select-none">
          {statusCode}
        </h1>

        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#131313]">
          Chapter Not Found
        </h2>

        <p className="mt-3 max-w-md mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
          {message}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#3730a3] hover:bg-[#2e278c] text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-xs no-underline"
          >
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-sm font-semibold transition-colors cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};