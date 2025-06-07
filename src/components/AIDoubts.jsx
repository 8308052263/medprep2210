import React, { useState } from 'react';

const AIDoubts = () => {
  const [doubt, setDoubt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!doubt.trim()) return;

    setLoading(true);
    setResponse('');

    // Simulated AI Response — Replace this with real backend later
    setTimeout(() => {
      setResponse(
        `AI Explanation:\n\n"${doubt}" is a valid clinical doubt. Based on standard exam prep material, the answer can be reasoned as follows...\n\n✅ Key point: Always approach such questions with pathophysiological logic and treatment protocols in mind.`
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 md:ml-20 flex justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-700">AI Doubt Solver</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            className="w-full border p-3 rounded resize-none"
            rows={4}
            placeholder="Type your medical doubt here..."
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? 'Thinking...' : 'Submit Doubt'}
          </button>
        </form>

        {response && (
          <div className="bg-gray-100 p-4 rounded shadow-md whitespace-pre-wrap">
            {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIDoubts;