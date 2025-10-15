import React from 'react';
import { Link } from 'react-router-dom';

const TrackSection = () => (
  <section className="py-10 px-4 md:px-12 max-w-4xl mx-auto">
    <div className="bg-gradient-to-r from-pink-900 via-blue-900 to-blue-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center border border-pink-800">
      <h2 className="text-2xl font-bold text-pink-300 mb-2">Track Your Reports</h2>
      <p className="text-lg text-blue-100 mb-4">
        Stay updated on the status of your submitted issues. View progress, responses, and resolutions in real-time.
      </p>
      <Link
        to="/track"
        className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-gray-900 font-semibold shadow transition"
      >
        Track Reports
      </Link>
    </div>
  </section>
);

export default TrackSection;