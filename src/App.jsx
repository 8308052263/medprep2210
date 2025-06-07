// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Flashcards from './components/Flashcards';
import MCQs from './components/MCQs';
import PYQs from './components/PYQs';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/mcqs" element={<MCQs />} />
          <Route path="/pyqs" element={<PYQs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;