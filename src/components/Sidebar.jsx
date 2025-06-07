// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => setOpen(!open);

  const links = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Flashcards', path: '/flashcards' },
    { label: 'MCQs', path: '/mcqs' },
    { label: 'PYQs', path: '/pyqs' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="p-2 bg-white border rounded shadow">
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`bg-white h-full shadow-md transition-all fixed md:static z-40 ${
          open ? 'w-64' : 'w-0 md:w-64'
        }`}
      >
        {open && (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">MedPrep</h2>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded hover:bg-purple-100 ${
                    location.pathname === link.path
                      ? 'bg-purple-200 font-semibold'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;