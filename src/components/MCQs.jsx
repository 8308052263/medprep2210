// Inside src/components/MCQs.jsx
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import motivationalMessages from '../motivationalMessages';
import MCQData from './DetailedExplanations/MCQData'; // new import

const MCQs = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [message, setMessage] = useState('');

  const checkAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === MCQData[index].answer) {
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
    setIndex((prev) => (prev + 1) % MCQData.length);
    setSelected(null);
    setShowAnswer(false);
    setMessage('');
  };

  const current = MCQData[index];

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">MCQ Practice</h2>
      <p className="mb-4 font-medium">{current.question}</p>
      <ul>
        {current.options.map((opt, i) => (
          <li
            key={i}
            onClick={() => checkAnswer(opt)}
            className={`p-2 border my-1 cursor-pointer rounded ${
              showAnswer && opt === current.answer ? 'bg-green-200' : 
              showAnswer && opt === selected && opt !== current.answer ? 'bg-red-200' : ''
            } hover:bg-blue-50`}
          >
            {opt}
          </li>
        ))}
      </ul>
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

export default MCQs;