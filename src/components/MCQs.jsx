import React, { useState, useEffect } from 'react';
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

const MCQs = () => {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(15); // 15 seconds timer
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (timer === 0) {
      setShowAnswer(true);
      setMessage("⏰ Time's up! Focus harder next time!");
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
      spread: 70,
      origin: { y: 0.6 },
      shapes: ['star'],
      colors: ['#FFD700', '#FF69B4', '#00FFFF'],
    });
  };

  const checkAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === mcqs[index].answer) {
      triggerConfetti();
      setMessage("🎯 Correct!");
    } else {
      const randomMsg = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setMessage(randomMsg);
    }
  };

  const nextQuestion = () => {
    setIndex((prev) => (prev + 1) % mcqs.length);
    setSelected(null);
    setShowAnswer(false);
    setTimer(15);
    setMessage('');
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">MCQs</h2>
        <div className={`text-xl font-bold ${timer <= 5 ? 'text-red-600' : 'text-green-600'}`}>
          {timer}s
        </div>
      </div>
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
                  : 'bg-white'
                : ''
            }`}
            onClick={() => !showAnswer && checkAnswer(opt)}
          >
            {opt}
          </li>
        ))}
      </ul>
      {message && (
        <div className="mt-3 text-center font-semibold text-blue-600">{message}</div>
      )}
      {showAnswer && (
        <button
          onClick={nextQuestion}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default MCQs;