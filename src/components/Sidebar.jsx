import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Flashcards", path: "/flashcards" },
    { name: "MCQs", path: "/mcqs" },
    { name: "PYQs", path: "/pyqs" },
    { name: "AI Doubts", path: "/ai-doubts" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-screen fixed top-0 left-0">
      <div className="p-4 font-bold text-xl border-b">MedPrep</div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block text-gray-700 hover:text-blue-500 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;