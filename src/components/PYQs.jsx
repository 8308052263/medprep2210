import '../Firecracker.css';
import React, { useState } from 'react';

const motivationalMessages = [
  "Don’t worry, even legends stumble!",
  "You're one step closer to mastering it!",
  "Keep going! Every mistake is progress.",
  "Not yet, but you're getting there!",
  "Wrong? Nah, just a plot twist!"
];

const correctEffect = () => {
  const fireworks = document.createElement('div');
  fireworks.className = 'firecracker';
  document.body.appendChild(fireworks);
  setTimeout(() => document.body.removeChild(fireworks), 1500);
};

const PYQs = () => {
  const [showMessage, setShowMessage] = useState('');
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const question = {
    text: "Which nerve is affected in wrist drop?",
    options: ["Ulnar nerve", "Median nerve", "Radial nerve", "Musculocutaneous nerve"],
    answer: "Radial nerve"
  };

  const handleSelect = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === question.answer) {
      correctEffect();
      setShowMessage("Correct!");
    } else {
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setShowMessage(randomMessage);
    }
  };

  return (
    <div className="p-6 ml-64 mt-6">
      <h2 className="text-2xl font-bold mb-4">PYQ Practice</h2>
      <p className="mb-4 font-semibold">{question.text}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => !showAnswer && handleSelect(opt)}
            className={`p-3 border rounded-md ${
              showAnswer
                ? opt === question.answer
                  ? 'bg-green-300'
                  : selected === opt
                  ? 'bg-red-300'
                  : ''
                : ''
            } hover:bg-blue-50`}
          >
            {opt}
          </button>
        ))}
      </div>
      {showMessage && (
        <p className={`mt-4 text-lg ${showMessage === "Correct!" ? 'text-green-600' : 'text-red-600'}`}>
          {showMessage}
        </p>
      )}
      {showAnswer && selected !== question.answer && (
        <p className="mt-2 text-gray-700">Correct Answer: {question.answer}</p>
      )}
    </div>
  );
};

export default PYQs;