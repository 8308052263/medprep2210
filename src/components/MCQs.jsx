import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import motivationalMessages from '../motivationalMessages';

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

const launchStars = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    shapes: ['star'],
    colors: ['#FFD700', '#FF69B4', '#00BFFF'],
  });
};

const MCQs = () => {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showMessage, setShowMessage] = useState('');

  const checkAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === mcqs[index].answer) {
      launchStars();
      setShowMessage('Correct!');
    } else {
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setShowMessage(randomMessage);
    }
  };

  const nextQuestion = () => {
    setIndex((prev) => (prev + 1) % mcqs.length);
    setSelected(null);
    setShowAnswer(false);
    setShowMessage('');
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">MCQs</h2>
      <p className="mb-4 font-medium">{mcqs[index].question}</p>
      <ul>
        {mcqs[index].options.map((opt, i) => (
          <li
            key={i}
            onClick={() => checkAnswer(opt)}
            className={`p-2 border my-1 cursor-pointer rounded ${
              selected === opt ? (opt === mcqs[index].answer ? 'bg-green-200' : 'bg-red-200') : ''
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>

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

export default MCQs;