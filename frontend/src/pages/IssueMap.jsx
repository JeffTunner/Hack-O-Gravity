import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IssueMapView from '../components/issueMap/IsssueMapView';
import FilteredReports from '../components/issueMap/FilteredReports';

const categories = [
  'All',
  'Pothole',
  'Garbage',
  'Street Light',
  'Water Leakage',
  'Other',
];

export function IssueMap() {
  const [filter, setFilter] = useState('All');
  const [streetView, setStreetView] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 min-h-screen text-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col px-4 py-8">
        <div className="max-w-5xl w-full mx-auto mb-8">
          <h1 className="text-3xl font-extrabold text-blue-300 mb-2 text-center tracking-tight">
            Live Issue Map
          </h1>
          <p className="text-lg text-gray-300 mb-6 text-center">
            Explore civic issues reported across India. Zoom, pan, and click on markers to view details. Use filters and street view for enhanced experience.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <div className="relative">
              <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="appearance-none px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-semibold shadow transition cursor-pointer pr-10"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <span className="material-icons absolute right-3 top-2 text-white pointer-events-none">filter_list</span>
            </div>
            <button
              onClick={() => setStreetView(!streetView)}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-gray-800 hover:bg-blue-700 text-blue-200 font-semibold shadow border border-blue-500 transition"
            >
              <span className="material-icons">streetview</span>
              {streetView ? 'Exit Street View' : 'Street View Mode'}
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <IssueMapView filter={filter} streetView={streetView} />
            </div>
            <div className="flex-1">
              <FilteredReports filter={filter} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}