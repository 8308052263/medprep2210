import React, { useState } from 'react';
import confetti from 'canvas-confetti'; // NEW

const motivationalMessages = [
  "Don’t worry, even legends stumble!",
  "You're one step closer to mastering it!",
  "Keep going! Every mistake is progress.",
  "Not yet, but you're getting there!",
  "Wrong? Nah, just a plot twist!"
];

const celebrateWithStars = () => {
  confetti({
    particleCount: 100,
    spread: 120,
    startVelocity: 40,
    scalar: 1.2,
    shapes: ['star'],
    colors: ['#FFCC00', '#FF6666', '#66CCFF', '#99FF99'],
    origin: { y: 0.6 },
  });
};

const PYQs = () => {
  const [showMessage, setShowMessage] = useState('');
  const [selected, setSelected] = useState(null);

  const question = {
    text: "Which nerve is affected in wrist drop?",
    options: ["Ulnar nerve", "Median nerve", "Radial nerve", "Musculocutaneous nerve"],
    answer: "Radial nerve"
  };

  const handleSelect = (option) => {
    setSelected(option);
    if (option === question.answer) {
      celebrateWithStars();
      setShowMessage("Correct!");
    } else {
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setShowMessage(randomMessage);
    }
  };

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">PYQ Practice</h2>
      <p className="mb-4 font-semibold">{question.text}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt)}
            className={`p-3 border rounded-md ${
              selected === opt && opt !== question.answer ? 'bg-red-200' : ''
            } ${
              selected === opt && opt === question.answer ? 'bg-green-200' : ''
            } hover:bg-blue-50`}
          >
            {opt}
          </button>
        ))}
      </div>
      {showMessage && (
        <p className={`mt-4 text-${showMessage === 'Correct!' ? 'green' : 'red'}-600`}>
          {showMessage}
        </p>
      )}
    </div>
  );
};

export default PYQs;