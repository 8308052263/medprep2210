// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/flashcards', label: 'Flashcards' },
    { path: '/mcqs', label: 'MCQs' },
    { path: '/pyqs', label: 'PYQs' }
  ];

  return (
    <>
      {/* Mobile Hamburger */}
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
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-6 z-40 transition-transform transform 
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-2xl font-bold mb-6">MedPrep</h2>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-2 py-1 rounded hover:bg-purple-100 ${
                location.pathname === link.path ? 'bg-purple-200 font-semibold' : ''
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;