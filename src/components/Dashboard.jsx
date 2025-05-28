import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-4 md:ml-64">
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <Link to="/mcqs">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold">MCQs</h2>
            <p className="text-sm text-gray-600">Practice clinical multiple choice questions with explanations.</p>
          </div>
        </Link>

        <Link to="/pyqs">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold">PYQs</h2>
            <p className="text-sm text-gray-600">Previous Year Questions from FMGE, NEET PG, INI-CET.</p>
          </div>
        </Link>

        <Link to="/flashcards">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold">Flashcards</h2>
            <p className="text-sm text-gray-600">Revise high-yield concepts using flip-based flashcards.</p>
          </div>
        </Link>

        <Link to="/ai-doubts">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold">AI Doubt Solver</h2>
            <p className="text-sm text-gray-600">Ask questions and get AI-generated explanations.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;