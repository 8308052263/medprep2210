// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <div className="md:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="text-xl font-bold border px-3 py-1 rounded"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-full bg-white shadow-md w-64 p-4 transition-transform duration-300 transform
          ${open ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-2xl font-bold mb-4">MedPrep</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" onClick={closeSidebar}>Dashboard</Link>
          <Link to="/flashcards" onClick={closeSidebar}>Flashcards</Link>
          <Link to="/mcqs" onClick={closeSidebar}>MCQs</Link>
          <Link to="/pyqs" onClick={closeSidebar}>PYQs</Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;