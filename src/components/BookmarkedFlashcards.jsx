import React, { useState } from 'react';
import FlashcardData from './DetailedExplanations/FlashcardData';

const BookmarkedFlashcards = () => {
  const bookmarkedIds = JSON.parse(localStorage.getItem('bookmarks') || '[]');
  const bookmarkedCards = FlashcardData.filter(card => bookmarkedIds.includes(card.id));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    if (currentIndex < bookmarkedCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  if (bookmarkedCards.length === 0) {
    return <div className="ml-64 p-6 text-center text-gray-500">No bookmarked flashcards found.</div>;
  }

  const card = bookmarkedCards[currentIndex];

  return (
    <div className="p-6 ml-64 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6 text-yellow-600">Bookmarked Flashcards</h2>
      <p className="text-sm text-gray-600 mb-2">Card {currentIndex + 1} of {bookmarkedCards.length}</p>

      <div
        className="bg-white border rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <p className="font-semibold text-lg">{card.question}</p>
        {showAnswer ? (
          <>
            <p className="mt-3 text-green-700 font-medium">{card.answer}</p>
            {card.explanation && (
              <div className="mt-3 text-sm text-gray-700 bg-blue-50 border-l-4 border-blue-400 p-3 rounded text-left">
                <strong className="text-blue-700">Explanation:</strong> {card.explanation}
              </div>
            )}
          </>
        ) : (
          <p className="mt-2 text-gray-500 italic">Click to reveal answer</p>
        )}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-600 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === bookmarkedCards.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookmarkedFlashcards;