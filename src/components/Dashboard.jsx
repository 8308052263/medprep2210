// Dashboard.jsx (Tailwind-only working version — no external UI components)

import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">MedPrep Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MCQs */}
          <Link to="/mcqs" className="block bg-white shadow rounded-lg p-6 hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold text-blue-600">MCQs</h2>
            <p className="text-gray-600 mt-2">Practice medical multiple choice questions with explanations.</p>
          </Link>

          {/* PYQs */}
          <Link to="/pyqs" className="block bg-white shadow rounded-lg p-6 hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold text-blue-600">PYQs</h2>
            <p className="text-gray-600 mt-2">Previous Year Questions from FMGE, NEET PG, INI-CET.</p>
          </Link>

          {/* Flashcards */}
          <Link to="/flashcards" className="block bg-white shadow rounded-lg p-6 hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold text-blue-600">Flashcards</h2>
            <p className="text-gray-600 mt-2">Revise high-yield concepts using flip-based flashcards.</p>
          </Link>

          {/* AI Doubt Solver */}
          <Link to="/ai-doubts" className="block bg-white shadow rounded-lg p-6 hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold text-blue-600">AI Doubt Solver</h2>
            <p className="text-gray-600 mt-2">Ask questions and get AI-generated explanations.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
