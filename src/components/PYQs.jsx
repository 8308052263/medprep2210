import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import motivationalMessages from '../motivationalMessages';
import confetti from 'canvas-confetti';

const PYQs = () => {
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
      confetti({ particleCount: 100, spread: 70, shapes: ['star'] });
    }
  };

  const resetQuestion = () => {
    setSelected(null);
    setShowAnswer(false);
  };

  return (
    <div className="p-6 ml-64">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">PYQ Practice</h2>
        <CountdownCircleTimer
          isPlaying
          duration={20}
          colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000', 0.33]]}
          size={60}
          strokeWidth={6}
          onComplete={() => {
            resetQuestion();
            return { shouldRepeat: true, delay: 1 };
          }}
        >
          {({ remainingTime }) => <div className="text-sm font-semibold">{remainingTime}s</div>}
        </CountdownCircleTimer>
      </div>

      <p className="mb-4 font-semibold">{question.text}</p>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt)}
            className={`p-3 border rounded-md ${
              showAnswer
                ? opt === question.answer
                  ? 'bg-green-200'
                  : opt === selected
                  ? 'bg-red-200'
                  : ''
                : ''
            } hover:bg-blue-50`}
          >
            {opt}
          </button>
        ))}
      </div>

      {showAnswer && (
        <p className="mt-4 text-lg font-medium">
          {selected === question.answer
            ? '✅ Correct!'
            : `❌ Wrong! Correct Answer: ${question.answer}`}
        </p>
      )}
    </div>
  );
};

export default PYQs;