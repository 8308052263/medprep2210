import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import motivationalMessages from '../motivationalMessages'; // Assuming your 100 messages are here!

const mcqs = [
  {
    question: 'What is the antidote for paracetamol poisoning?',
    options: ['N-acetylcysteine', 'Vitamin K', 'Naloxone', 'Atropine'],
    answer: 'N-acetylcysteine',
  },
  {
    question: 'Which hormone is secreted by corpus luteum?',
    options: ['Estrogen', 'Progesterone', 'FSH', 'LH'],
    answer: 'Progesterone',
  },
];

const fireStars = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    shapes: ['star'],
    colors: ['#ffd700', '#ff6347', '#00bfff'],
  });
};

const MCQs = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [message, setMessage] = useState('');

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === mcqs[index].answer) {
      fireStars();
      setMessage('Correct!');
    } else {
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setMessage(randomMessage);
    }
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % mcqs.length);
    setSelected('');
    setShowAnswer(false);
    setMessage('');
  };

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">MCQ Practice</h2>
      <p className="mb-4 font-semibold">{mcqs[index].question}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {mcqs[index].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(option)}
            className={`p-3 border rounded-md 
              ${showAnswer && option === mcqs[index].answer ? 'bg-green-200' : ''}
              ${showAnswer && option === selected && option !== mcqs[index].answer ? 'bg-red-200' : ''}
              hover:bg-blue-50`}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      {showAnswer && <p className="mt-4 text-lg font-semibold">{message}</p>}
      {showAnswer && (
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default MCQs;