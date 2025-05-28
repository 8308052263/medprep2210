import React, { useState, useEffect } from 'react';
import PYQData from './DetailedExplanations/PYQData';
import confetti from 'canvas-confetti';

const PYQs = () => {
  const [bookmarks, setBookmarks] = useState(() => JSON.parse(localStorage.getItem('pyqBookmarks')) || []);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  const topics = ['All', ...new Set(PYQData.map((q) => q.topic))];
  const filteredPYQs = selectedTopic === 'All' ? PYQData : PYQData.filter(q => q.topic === selectedTopic);
  const currentQuestion = filteredPYQs[currentIndex];

  useEffect(() => {
    localStorage.setItem('pyqBookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleOptionClick = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    setShowExplanation(true);

    if (option === currentQuestion.answer) {
      confetti({ particleCount: 80, spread: 70 });
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore(prev => ({ ...prev, wrong: prev.wrong + 1 }));
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredPYQs.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption('');
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedOption('');
      setShowExplanation(false);
    }
  };

  const toggleBookmark = () => {
    const id = currentQuestion.id;
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter(b => b !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  const progress = ((currentIndex + 1) / filteredPYQs.length) * 100;

  return (
    <div className="p-6 ml-64 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">PYQs</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded mb-4">
        <div className="h-2 bg-purple-500 rounded" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Topic Filter */}
      <div className="mb-4 text-center">
        <label className="mr-2 font-medium">Filter by Topic:</label>
        <select
          className="border border-gray-300 px-3 py-1 rounded"
          value={selectedTopic}
          onChange={(e) => {
            setSelectedTopic(e.target.value);
            setCurrentIndex(0);
            setSelectedOption('');
            setShowExplanation(false);
          }}
        >
          {topics.map((topic, index) => (
            <option key={index} value={topic}>{topic}</option>
          ))}
        </select>
      </div>

      {/* Question */}
      <div className="bg-white border rounded-xl shadow-md p-6">
        <div className="mb-4">
          <p className="font-semibold text-lg">Q{currentIndex + 1}. {currentQuestion.question}</p>
        </div>
        <div className="space-y-2">
          {currentQuestion.options.map((option, idx) => {
            const isCorrect = selectedOption && option === currentQuestion.answer;
            const isWrong = selectedOption === option && option !== currentQuestion.answer;

            return (
              <div
                key={idx}
                onClick={() => handleOptionClick(option)}
                className={`p-3 rounded cursor-pointer border transition
                  ${selectedOption ? (
                    isCorrect ? 'bg-green-100 border-green-400 text-green-800 font-semibold'
                    : isWrong ? 'bg-red-100 border-red-400 text-red-700'
                    : 'bg-gray-100 border-gray-300 text-gray-600'
                  ) : 'hover:bg-blue-50 border-gray-300'}
                `}
              >
                {option}
              </div>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 text-sm rounded">
            <strong className="text-blue-700">Explanation:</strong> {currentQuestion.explanation}
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
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
            disabled={currentIndex === filteredPYQs.length - 1}
            className={`px-4 py-2 rounded ${
              currentIndex === filteredPYQs.length - 1
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            Next
          </button>

          <button
            onClick={toggleBookmark}
            className={`px-4 py-2 rounded ${
              bookmarks.includes(currentQuestion.id)
                ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                : 'bg-yellow-300 text-black hover:bg-yellow-400'
            }`}
          >
            {bookmarks.includes(currentQuestion.id) ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>
      </div>

      {/* Score */}
      <div className="mt-6 text-center text-gray-700 text-lg">
        <p><strong>Correct:</strong> {score.correct} &nbsp; | &nbsp; <strong>Wrong:</strong> {score.wrong}</p>
      </div>
    </div>
  );
};

export default PYQs;