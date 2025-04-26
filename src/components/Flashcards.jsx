import React, { useState } from 'react';

const Flashcards = () => {
  const flashcards = [
    { question: 'What is the first line treatment for anaphylaxis?', answer: 'Epinephrine' },
    { question: 'What is the antidote for acetaminophen overdose?', answer: 'N-acetylcysteine' }
  ];

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-6">Flashcards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flashcards.map((card, index) => (
          <Flashcard key={index} question={card.question} answer={card.answer} />
        ))}
      </div>
    </div>
  );
};

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className="p-6 border rounded-lg shadow-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <p className="font-semibold">{question}</p>
      {showAnswer && <p className="mt-2 text-green-700">{answer}</p>}
      {!showAnswer && <p className="mt-2 text-gray-500 italic">Click to reveal answer</p>}
    </div>
  );
};

export default Flashcards;