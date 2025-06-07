// src/components/AIDoubts.jsx
import React, { useState } from "react";
import axios from "axios";

const AIDoubts = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setResponse("Thinking...");

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      console.log("Loaded API Key:", apiKey); // for debugging

      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo-0125", // ✅ UPDATED MODEL
          messages: [{ role: "user", content: question }],
          temperature: 0.6,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const answer = res.data.choices[0].message.content;
      setResponse(answer);
    } catch (err) {
      console.error("OpenAI error:", err);
      setResponse("Error: Too many requests. Try again in a few seconds.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 md:ml-64">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">AI Doubts</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your medical doubt here..."
          className="w-full border rounded p-4 h-32 mb-4"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          {loading ? "Generating..." : "Get AI Answer"}
        </button>
      </form>

      {response && (
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">AI Answer:</h3>
          <p className="whitespace-pre-line text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIDoubts;