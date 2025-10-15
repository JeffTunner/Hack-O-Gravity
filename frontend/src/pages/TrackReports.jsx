import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrackSearch from '../components/trackReports/TrackSearch.jsx';
import RecentReports from '../components/trackReports/RecentReports.jsx';

export function TrackReports() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 min-h-screen text-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="max-w-2xl w-full bg-gray-900/80 rounded-2xl shadow-2xl p-8 mb-8">
          <h1 className="text-3xl font-extrabold text-blue-300 mb-2 text-center tracking-tight">
            Track Your Reports
          </h1>
          <p className="text-lg text-gray-300 mb-6 text-center">
            Enter your Track ID to view the status and details of your submitted civic issues.
          </p>
          <TrackSearch />
        </div>
        <RecentReports />
      </main>
      <Footer />
    </div>
  );
}