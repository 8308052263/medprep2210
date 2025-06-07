// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Flashcards", path: "/flashcards" },
    { name: "MCQs", path: "/mcqs" },
    { name: "PYQs", path: "/pyqs" },
  ];

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-xl font-bold border px-3 py-1 rounded"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 p-4 bg-white shadow-md transition-transform duration-300 transform 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-2xl font-bold mb-6">MedPrep</h2>
        <nav className="flex flex-col space-y-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`p-2 rounded ${
                location.pathname === item.path
                  ? "bg-purple-600 text-white font-semibold"
                  : "hover:bg-purple-100 text-gray-800"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;