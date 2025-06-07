import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Flashcards from './components/Flashcards';
import MCQs from './components/MCQs';
import PYQs from './components/PYQs';
import AIDoubts from './components/AIDoubts'; // ✅ AI Doubt Solver component

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/mcqs" element={<MCQs />} />
          <Route path="/pyqs" element={<PYQs />} />
          <Route path="/ai-doubts" element={<AIDoubts />} /> {/* ✅ AI Doubt Route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;