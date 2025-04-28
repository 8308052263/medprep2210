import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import motivationalMessages from '../motivationalMessages';

const question = {
  text: "Which nerve is affected in wrist drop?",
  options: ["Ulnar nerve", "Median nerve", "Radial nerve", "Musculocutaneous nerve"],
  answer: "Radial nerve"
};

const PYQs = () => {
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(20);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (timer === 0) {
      setShowAnswer(true);
      setMessage("⏰ Time's up! Revise again!");
    }
    const countdown = setInterval(() => {
      if (timer > 0 && !showAnswer) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer, showAnswer]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      shapes: ['star'],
      colors: ['#FFD700', '#FF69B4', '#00FFFF'],
    });
  };

  const handleSelect = (opt) => {
    setSelected(opt);
    setShowAnswer(true);
    if (opt === question.answer) {
      triggerConfetti();
      setMessage("🎯 Correct!");
    } else {
      const randomMsg = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setMessage(randomMsg);
    }
  };

  return (
    <div className="p-6 ml-64">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">PYQ Practice</h2>
        <div className={`text-xl font-bold ${timer <= 5 ? 'text-red-600' : 'text-green-600'}`}>
          {timer}s
        </div>
      </div>
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
                  : 'bg-white'
                : 'hover:bg-blue-50'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {message && (
        <div className="mt-3 text-center font-semibold text-blue-600">{message}</div>
      )}
    </div>
  );
};

export default PYQs;