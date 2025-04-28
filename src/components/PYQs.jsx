import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import motivationalMessages from '../motivationalMessages';

const fireStars = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    shapes: ['star'],
    colors: ['#ffd700', '#ff6347', '#00bfff'],
  });
};

const PYQs = () => {
  const [selected, setSelected] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [message, setMessage] = useState('');

  const question = {
    text: 'Which nerve is affected in wrist drop?',
    options: ['Ulnar nerve', 'Median nerve', 'Radial nerve', 'Musculocutaneous nerve'],
    answer: 'Radial nerve',
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === question.answer) {
      fireStars();
      setMessage('Correct!');
    } else {
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setMessage(randomMessage);
    }
  };

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">PYQ Practice</h2>
      <p className="mb-4 font-semibold">{question.text}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(option)}
            className={`p-3 border rounded-md 
              ${showAnswer && option === question.answer ? 'bg-green-200' : ''}
              ${showAnswer && option === selected && option !== question.answer ? 'bg-red-200' : ''}
              hover:bg-blue-50`}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      {showAnswer && <p className="mt-4 text-lg font-semibold">{message}</p>}
    </div>
  );
};

export default PYQs;