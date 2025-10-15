import React from 'react';

const LoginForm = ({ onSwitch }) => (
  <form className="space-y-6">
    <div>
      <label className="block text-blue-200 font-semibold mb-2">Email</label>
      <input
        type="email"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
        required
      />
    </div>
    <div>
      <label className="block text-blue-200 font-semibold mb-2">Password</label>
      <input
        type="password"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your password"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg transition transform hover:scale-105"
    >
      Login
    </button>
    <p className="text-gray-300 text-center mt-4">
      Don't have an account?{' '}
      <button
        type="button"
        className="text-blue-400 underline font-semibold"
        onClick={onSwitch}
      >
        Create one
      </button>
    </p>
  </form>
);

export default LoginForm;