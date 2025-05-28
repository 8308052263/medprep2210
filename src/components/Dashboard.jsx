import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex justify-center md:ml-64 pt-8 px-4">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome to MedPrep</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to="/mcqs">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-1">MCQs</h2>
              <p className="text-sm text-gray-600">Practice clinical multiple choice questions with explanations.</p>
            </div>
          </Link>

          <Link to="/pyqs">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-1">PYQs</h2>
              <p className="text-sm text-gray-600">Previous Year Questions from FMGE, NEET PG, INI-CET.</p>
            </div>
          </Link>

          <Link to="/flashcards">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-1">Flashcards</h2>
              <p className="text-sm text-gray-600">Revise high-yield concepts using flip-based flashcards.</p>
            </div>
          </Link>

          <Link to="/ai-doubts">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-1">AI Doubt Solver</h2>
              <p className="text-sm text-gray-600">Ask questions and get AI-generated explanations.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;