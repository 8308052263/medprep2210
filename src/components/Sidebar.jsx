// src/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  BookOpenIcon,
  ClipboardListIcon,
  FileTextIcon,
  MessageSquareIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: <HomeIcon size={20} /> },
  { path: '/flashcards', label: 'Flashcards', icon: <BookOpenIcon size={20} /> },
  { path: '/mcqs', label: 'MCQs', icon: <ClipboardListIcon size={20} /> },
  { path: '/pyqs', label: 'PYQs', icon: <FileTextIcon size={20} /> },
  { path: '/ai-doubts', label: 'AI Doubts', icon: <MessageSquareIcon size={20} /> }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // Persist sidebar state in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('sidebarOpen');
    if (stored !== null) setIsOpen(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <div className={`transition-all duration-300 bg-white shadow-md h-screen fixed md:static z-50 ${isOpen ? 'w-64' : 'w-16'} p-4`}>      
      {/* Toggle button */}
      <button
        className="mb-6 text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? 'Collapse' : 'Expand'}
      >
        {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      <h2 className={`text-xl font-bold mb-8 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>MedPrep</h2>

      <nav className="flex flex-col gap-4">
        {navItems.map(item => (
          <Link
            to={item.path}
            key={item.path}
            title={item.label}
            className={`flex items-center gap-3 p-2 rounded hover:bg-gray-200 transition-colors ${
              location.pathname === item.path ? 'bg-gray-200 font-semibold' : ''
            }`}
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;