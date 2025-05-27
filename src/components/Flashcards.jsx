import React, { useState, useEffect } from 'react';
import FlashcardDataOriginal from './DetailedExplanations/FlashcardData';

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState([...FlashcardDataOriginal]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('All');

  const topics = ['All', ...new Set(flashcards.map((card) => card.topic))];

  const filteredCards = selectedTopic === 'All'
    ? flashcards
    : flashcards.filter((card) => card.topic === selectedTopic);

  const currentCard = filteredCards[currentIndex] || {};

  // Shuffle logic
  useEffect(() => {
    if (shuffle) {
      const shuffled = [...FlashcardDataOriginal].sort(() => Math.random() - 0.5);
      setFlashcards(shuffled);
    } else {
      setFlashcards([...FlashcardDataOriginal]);
    }
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [shuffle]);

  // Auto-advance timer
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentIndex, autoPlay]);

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowAnswer(false);
    }
  };

  const toggleBookmark = () => {
    const id = currentCard.id;
    let updated = [...bookmarks];
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter((b) => b !== id);
    } else {
      updated.push(id);
    }
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  const markCorrect = () => {
    setCorrectCount((prev) => prev + 1);
    handleNext();
  };

  const markWrong = () => {
    setWrongCount((prev) => prev + 1);
    handleNext();
  };

  const progressPercent = ((currentIndex + 1) / filteredCards.length) * 100;

  return (
    <div className="p-6 ml-64 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Flashcards</h2>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 h-2 rounded mb-4">
        <div className="h-2 bg-blue-600 rounded" style={{ width: `${progressPercent}%` }}></div>
      </div>

      {/* Topic Filter */}
      <div className="mb-4 text-center">
        <label className="font-medium mr-2">Filter by Topic:</label>
        <select
          className="border border-gray-300 rounded px-3 py-1"
          value={selectedTopic}
          onChange={(e) => {
            setSelectedTopic(e.target.value);
            setCurrentIndex(0);
            setShowAnswer(false);
          }}
        >
          {topics.map((topic, i) => (
            <option key={i} value={topic}>{topic}</option>
          ))}
        </select>
      </div>

      {/* Flashcard */}
      {currentCard && (
        <div
          className="bg-white border rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <p className="font-semibold text-lg">{currentCard.question}</p>
          {showAnswer ? (
            <>
              <p className="mt-4 text-green-700 font-medium">{currentCard.answer}</p>
              {currentCard.explanation && (
                <div className="mt-4 text-sm text-gray-700 bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-left">
                  <strong className="text-blue-700">Explanation:</strong> {currentCard.explanation}
                </div>
              )}
            </>
          ) : (
            <p className="mt-2 text-gray-500 italic">Click to reveal answer</p>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded ${
            currentIndex === 0
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === filteredCards.length - 1}
          className={`px-4 py-2 rounded ${
            currentIndex === filteredCards.length - 1
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
        </button>

        <button
          onClick={toggleBookmark}
          className={`px-4 py-2 rounded ${
            bookmarks.includes(currentCard.id)
              ? 'bg-yellow-500 text-white hover:bg-yellow-600'
              : 'bg-yellow-300 text-black hover:bg-yellow-400'
          }`}
        >
          {bookmarks.includes(currentCard.id) ? 'Bookmarked' : 'Bookmark'}
        </button>

        <button
          onClick={markCorrect}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          ✅ Correct
        </button>

        <button
          onClick={markWrong}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          ❌ Wrong
        </button>
      </div>

      {/* Toggles */}
      <div className="mt-6 flex justify-center gap-6 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={shuffle}
            onChange={() => setShuffle(!shuffle)}
          />
          Shuffle
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={autoPlay}
            onChange={() => setAutoPlay(!autoPlay)}
          />
          Auto-Advance
        </label>
      </div>

      {/* Final Score */}
      {currentIndex === filteredCards.length - 1 && (
        <div className="mt-6 text-center text-lg text-gray-700">
          <p><strong>Correct:</strong> {correctCount}</p>
          <p><strong>Wrong:</strong> {wrongCount}</p>
        </div>
      )}
    </div>
  );
};

export default Flashcards;