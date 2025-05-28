import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <div className="flex-1 md:ml-64"> {/* Apply left margin for sidebar space on desktop */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Optional duplicate for safety */}
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/mcqs" element={<MCQs />} />
          <Route path="/pyqs" element={<PYQs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;