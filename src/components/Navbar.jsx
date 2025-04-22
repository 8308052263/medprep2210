import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">MedPrep</h1>
      <div className="text-sm text-gray-600">Welcome, User</div>
    </header>
  );
};

export default Navbar;