import React from 'react';
import { useIssues } from '../../context/IssueContext';

const statusColor = status =>
  status === 'Resolved'
    ? 'bg-green-700'
    : status === 'Active'
    ? 'bg-red-700'
    : 'bg-yellow-700';

const FilteredReports = ({ filter }) => {
  const { issues } = useIssues();
  const filtered = filter === 'All'
    ? issues
    : issues.filter(issue => issue.category === filter);

  return (
    <section className="bg-gray-900/80 rounded-2xl shadow-2xl p-6 h-[400px] overflow-y-auto">
      <h2 className="text-xl font-bold text-blue-200 mb-4">Filtered Reports</h2>
      <div className="space-y-4">
        {filtered.map(issue => (
          <div
            key={issue.id}
            className="flex flex-col bg-gray-800/80 rounded-lg p-4 shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-blue-300">{issue.category}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(issue.status)} text-white`}>
                {issue.status}
              </span>
            </div>
            <span className="text-gray-300">{issue.description}</span>
            {issue.city && <span className="text-gray-400 text-xs mt-2">City: {issue.city}</span>}
            <span className="text-gray-400 text-xs">Last Updated: {issue.updated}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilteredReports;