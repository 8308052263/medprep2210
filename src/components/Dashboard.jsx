import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const features = [
    {
      title: 'MCQs',
      description: 'Practice clinical multiple choice questions with explanations.',
      link: '/mcqs'
    },
    {
      title: 'PYQs',
      description: 'Previous Year Questions from FMGE, NEET PG, INI-CET.',
      link: '/pyqs'
    },
    {
      title: 'Flashcards',
      description: 'Revise high-yield concepts using flip-based flashcards.',
      link: '/flashcards'
    },
    {
      title: 'AI Doubt Solver',
      description: 'Ask questions and get AI-generated explanations.',
      link: '/ai-doubts'
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-5rem)] px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome to MedPrep</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Link
              to={feature.link}
              key={index}
              className="block p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition border"
            >
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;