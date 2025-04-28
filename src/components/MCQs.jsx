import '../Firecracker.css';
import React, { useState } from 'react';

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

const correctEffect = () => {
  const fireworks = document.createElement('div');
  fireworks.className = 'firecracker';
  document.body.appendChild(fireworks);
  setTimeout(() => document.body.removeChild(fireworks), 1500);
};

const MCQs = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === mcqs[index].answer) {
      correctEffect();
    }
  };

  const nextQuestion = () => {
    setIndex((prev) => (prev + 1) % mcqs.length);
    setSelected(null);
    setShowAnswer(false);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto ml-64 mt-6">
      <h2 className="text-2xl font-semibold mb-4">MCQs</h2>
      <p className="mb-4 font-medium">{mcqs[index].question}</p>
      <ul>
        {mcqs[index].options.map((opt, i) => (
          <li
            key={i}
            className={`p-2 border my-1 cursor-pointer rounded ${
              showAnswer
                ? opt === mcqs[index].answer
                  ? 'bg-green-300'
                  : selected === opt
                  ? 'bg-red-300'
                  : ''
                : ''
            }`}
            onClick={() => !showAnswer && handleSelect(opt)}
          >
            {opt}
          </li>
        ))}
      </ul>
      {showAnswer && (
        <div className="mt-4">
          <p className="text-gray-700">Correct Answer: {mcqs[index].answer}</p>
          <button
            onClick={nextQuestion}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MCQs;