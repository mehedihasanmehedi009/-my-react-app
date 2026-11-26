 import React from "react";
import { Header } from "./Componet/header/Header";
import { Outlet } from "react-router";
import { Footer } from "./Componet/Footer/Footer";

export const Rout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};