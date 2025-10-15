import React from 'react';
import { Link } from 'react-router-dom';

const TrackSection = () => (
  <section className="py-12 px-4 md:px-16 max-w-4xl mx-auto">
    <div className="bg-gradient-to-r from-blue-900/80 to-gray-800/80 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold text-blue-300 mb-2">Track Your Reports</h2>
      <p className="text-lg text-gray-200 mb-4">
        Stay updated on the status of your submitted issues. View progress, responses, and resolutions in real-time.
      </p>
      <Link
        to="/track"
        className="px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-semibold shadow transition"
      >
        Track Reports
      </Link>
    </div>
  </section>
);

export default TrackSection;