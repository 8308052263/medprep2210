import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Connect to backend email OTP handler
    console.log('Logging in:', email, otp);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="OTP"
          className="w-full border p-2 rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;