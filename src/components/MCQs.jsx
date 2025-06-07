// src/components/MCQs.jsx
import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import MCQData from "./DetailedExplanations/MCQData";

const MCQs = () => {
  const [selectedTopic, setSelectedTopic] = useState(() => {
    return localStorage.getItem("mcqTopic") || "All";
  });
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [bookmarked, setBookmarked] = useState([]);

  const topics = ["All", ...new Set(MCQData.map((q) => q.topic))];
  const filteredData =
    selectedTopic === "All"
      ? MCQData
      : MCQData.filter((q) => q.topic === selectedTopic);
  const current = filteredData[index];

  const handleAnswer = (option) => {
    setSelected(option);
    const isCorrect = option === current.answer;
    if (isCorrect) confetti(); // 🎉 Show confetti
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (!isCorrect ? 1 : 0),
    }));
  };

  const next = () => {
    setSelected(null);
    setIndex((prev) => Math.min(prev + 1, filteredData.length - 1));
  };

  const prev = () => {
    setSelected(null);
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const toggleBookmark = () => {
    const id = current.id;
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const handleTopicChange = (e) => {
    const newTopic = e.target.value;
    setSelectedTopic(newTopic);
    localStorage.setItem("mcqTopic", newTopic);
    setIndex(0);
    setSelected(null);
  };

  useEffect(() => {
    setIndex(0);
  }, [selectedTopic]);

  if (!current)
    return <div className="p-6 md:ml-20 text-center">No MCQs available.</div>;

  return (
    <div className="p-6 md:ml-20 flex justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">MCQs</h2>

        <div className="mb-4">
          <label className="mr-2 font-semibold">Filter by Topic:</label>
          <select
            value={selectedTopic}
            onChange={handleTopicChange}
            className="border px-2 py-1 rounded"
          >
            {topics.map((topic, i) => (
              <option key={i} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <p className="font-semibold mb-2">
            Q{index + 1}. {current.question}
          </p>
          {current.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              className={`block w-full text-left px-4 py-2 mb-2 rounded border ${
                selected === option
                  ? option === current.answer
                    ? "bg-green-100 border-green-400"
                    : "bg-red-100 border-red-400"
                  : "hover:bg-gray-100 border-gray-300"
              }`}
              disabled={selected !== null}
            >
              {option}
            </button>
          ))}
          {selected && (
            <p className="mt-2 text-sm text-gray-700">
              <strong>Explanation:</strong> {current.explanation}
            </p>
          )}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={prev}
              className="px-4 py-2 bg-gray-300 rounded"
              disabled={index === 0}
            >
              Previous
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-purple-500 text-white rounded"
              disabled={index === filteredData.length - 1}
            >
              Next
            </button>
            <button
              onClick={toggleBookmark}
              className="px-4 py-2 bg-yellow-400 text-white rounded"
            >
              {bookmarked.includes(current.id) ? "Bookmarked" : "Bookmark"}
            </button>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Correct: {score.correct} | Wrong: {score.wrong}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQs;