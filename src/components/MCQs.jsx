import '../Firecracker.css';
import React, { useState } from 'react'

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
]

const MCQs = () => {
  const [selected, setSelected] = useState(null)
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const checkAnswer = (option) => {
    setSelected(option)
    setShowAnswer(true)
  }

  const nextQuestion = () => {
    setIndex((prev) => (prev + 1) % mcqs.length)
    setSelected(null)
    setShowAnswer(false)
  }

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">MCQs</h2>
      <p className="mb-4 font-medium">{mcqs[index].question}</p>
      <ul>
        {mcqs[index].options.map((opt, i) => (
          <li
            key={i}
            className={`p-2 border my-1 cursor-pointer rounded ${
              showAnswer && opt === mcqs[index].answer ? 'bg-green-200' : ''
            }`}
            onClick={() => checkAnswer(opt)}
          >
            {opt}
          </li>
        ))}
      </ul>
      {showAnswer && (
        <p className="mt-2 text-sm text-gray-600">
          Correct Answer: {mcqs[index].answer}
        </p>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={nextQuestion}
      >
        Next
      </button>
    </div>
  )
}

export default MCQs