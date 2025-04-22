import React from 'react';

const Sidebar = () => {
  const menu = ["Dashboard", "Flashcards", "Tests", "AI Doubts", "Profile"];

  return (
    <aside className="w-64 bg-white shadow-md h-full">
      <nav className="p-4">
        <ul className="space-y-2">
          {menu.map((item, index) => (
            <li key={index} className="text-gray-700 hover:text-blue-500 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;