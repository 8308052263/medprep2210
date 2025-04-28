import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import motivationalMessages from '../motivationalMessages';
import confetti from 'canvas-confetti';

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

  const checkAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === mcqs[index].answer) {
      confetti({ particleCount: 100, spread: 70, shapes: ['star'] });
    }
  };

  const nextQuestion = () => {
    setIndex((prev) => (prev + 1) % mcqs.length);
    setSelected(null);
    setShowAnswer(false);
  };

  return (
    <div className="p-6 ml-64">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">MCQs</h2>
        <CountdownCircleTimer
          isPlaying
          duration={20}
          colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000', 0.33]]}
          size={60}
          strokeWidth={6}
          onComplete={() => {
            nextQuestion();
            return { shouldRepeat: true, delay: 1 };
          }}
        >
          {({ remainingTime }) => <div className="text-sm font-semibold">{remainingTime}s</div>}
        </CountdownCircleTimer>
      </div>

      <p className="mb-4 font-semibold">{mcqs[index].question}</p>
      <div className="grid grid-cols-2 gap-4">
        {mcqs[index].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => checkAnswer(opt)}
            className={`p-3 border rounded-md ${
              showAnswer
                ? opt === mcqs[index].answer
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
          {selected === mcqs[index].answer
            ? '✅ Correct!'
            : `❌ Wrong! Correct Answer: ${mcqs[index].answer}`}
        </p>
      )}

      <button
        onClick={nextQuestion}
        className="mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default MCQs;