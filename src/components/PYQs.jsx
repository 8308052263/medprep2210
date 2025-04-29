// src/components/PYQs.jsx

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import motivationalMessages from '../motivationalMessages';
import PYQData from './DetailedExplanations/PYQData'; // new import

const PYQs = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [message, setMessage] = useState('');

  const handleSelect = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === PYQData[index].answer) {
      confetti({
        particleCount: 100,
        spread: 70,
        shapes: ['star'],
        colors: ['#ffd700', '#ff6347', '#00bfff'],
      });
      setMessage("Correct!");
    } else {
      const randomMsg = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setMessage(randomMsg);
    }
  };

  const nextQuestion = () => {
    setIndex((prev) => (prev + 1) % PYQData.length);
    setSelected(null);
    setShowAnswer(false);
    setMessage('');
  };

  const current = PYQData[index];

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">PYQ Practice</h2>
      <p className="mb-4 font-semibold">{current.question}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {current.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt)}
            disabled={showAnswer}
            className={`p-3 border rounded-md ${
              showAnswer && opt === current.answer
                ? 'bg-green-200'
                : showAnswer && opt === selected && opt !== current.answer
                ? 'bg-red-200'
                : 'bg-white hover:bg-blue-50'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {showAnswer && (
        <div className="mt-4">
          <p className="text-lg font-semibold">
            {selected === current.answer
              ? "✅ Correct!"
              : `❌ Wrong! Correct Answer: ${current.answer}`}
          </p>
          <div className="mt-2 text-sm">
            <strong>Explanation:</strong>
            <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap">{current.explanation}</pre>
          </div>
        </div>
      )}

      {showAnswer && (
        <button
          onClick={nextQuestion}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-transform transform hover:scale-105 animate-bounce"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PYQs;