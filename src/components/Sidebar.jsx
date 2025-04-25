import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Flashcards", path: "/flashcards" },
    { name: "MCQs", path: "/mcqs" },
    { name: "AI Doubts", path: "/ai-doubts" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-full">
      <nav className="p-4">
        <ul className="space-y-2">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-gray-700 hover:text-blue-500 block"
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