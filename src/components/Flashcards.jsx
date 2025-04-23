import React, { useState } from 'react'

const sampleFlashcards = [
  { question: 'What is the most common site of metastasis in prostate cancer?', answer: 'Bone' },
  { question: 'Which vitamin deficiency causes night blindness?', answer: 'Vitamin A' },
]

const Flashcards = () => {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % sampleFlashcards.length)
    setFlipped(false)
  }

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Flashcards</h2>
      <div
        className="border p-6 text-center cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        {flipped ? sampleFlashcards[index].answer : sampleFlashcards[index].question}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={nextCard}
      >
        Next
      </button>
    </div>
  )
}

export default Flashcards