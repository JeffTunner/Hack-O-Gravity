import React from 'react';
import { Link } from 'react-router-dom';

const GuestLogin = () => (
  <div className="bg-blue-900/80 rounded-xl p-4 text-center shadow">
    <h2 className="text-lg font-bold text-blue-200 mb-2">Report as Guest</h2>
    <p className="text-gray-300 mb-3">
      You can report issues anonymously without logging in. <br />
      <span className="text-yellow-400 font-semibold">Note:</span> You will not be able to track or view your reports later.
    </p>
    <Link
      to="/report"
      className="px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-semibold shadow transition"
    >
      Continue as Guest
    </Link>
  </div>
);

export default GuestLogin;