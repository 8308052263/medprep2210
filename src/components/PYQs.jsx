import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import motivationalMessages from '../motivationalMessages';

const launchStars = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    shapes: ['star'],
    colors: ['#FFD700', '#FF69B4', '#00BFFF'],
  });
};

const questions = [
  {
    text: "Which nerve is affected in wrist drop?",
    options: ["Ulnar nerve", "Median nerve", "Radial nerve", "Musculocutaneous nerve"],
    answer: "Radial nerve",
  },
  {
    text: "What is the first antibody produced in response to infection?",
    options: ["IgA", "IgG", "IgM", "IgE"],
    answer: "IgM",
  },
];

const PYQs = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showMessage, setShowMessage] = useState('');

  const handleSelect = (option) => {
    setSelected(option);
    if (option === questions[index].answer) {
      launchStars();
      setShowMessage('Correct!');
    } else {
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setShowMessage(randomMessage);
    }
  };

  const nextQuestion = () => {
    setIndex((prev) => (prev + 1) % questions.length);
    setSelected(null);
    setShowMessage('');
  };

  const currentQuestion = questions[index];

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">PYQ Practice</h2>
      <p className="mb-4 font-semibold">{currentQuestion.text}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {currentQuestion.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt)}
            className={`p-3 border rounded-md ${
              selected === opt ? (opt === currentQuestion.answer ? 'bg-green-200' : 'bg-red-200') : 'bg-white'
            } hover:bg-blue-50`}
          >
            {opt}
          </button>
        ))}
      </div>

      {showMessage && (
        <p className={`mt-4 ${showMessage === 'Correct!' ? 'text-green-600 animate-pulse font-bold' : 'text-red-600'}`}>
          {showMessage}
        </p>
      )}

      {selected && (
        <button
          onClick={nextQuestion}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform transform hover:scale-105 animate-bounce"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PYQs;