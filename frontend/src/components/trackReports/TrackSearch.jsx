import React, { useState } from 'react';
import { useIssues } from '../../context/IssueContext';

const TrackSearch = () => {
  const [trackId, setTrackId] = useState('');
  const [result, setResult] = useState(null);
  const { findIssue } = useIssues();

  const handleSearch = e => {
    e.preventDefault();
    const found = findIssue(trackId);
    if (found) {
      setResult(found);
    } else {
      setResult(null);
      alert('No report found for this Track ID.');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSearch}>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Track ID"
          value={trackId}
          onChange={e => setTrackId(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow transition"
        >
          Search
        </button>
      </div>
      {result && (
        <div className="mt-6 bg-blue-900/80 rounded-lg p-4 text-left shadow">
          <h2 className="text-xl font-bold text-blue-200 mb-2">Report Details</h2>
          <p><span className="font-semibold text-gray-300">ID:</span> {result.id}</p>
          <p><span className="font-semibold text-gray-300">Status:</span> {result.status}</p>
          <p><span className="font-semibold text-gray-300">Category:</span> {result.category}</p>
          <p><span className="font-semibold text-gray-300">Description:</span> {result.description}</p>
          <p><span className="font-semibold text-gray-300">Last Updated:</span> {result.updated}</p>
        </div>
      )}
    </form>
  );
};

export default TrackSearch;