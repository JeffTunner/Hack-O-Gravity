import React from 'react';

const issues = [
  {
    title: 'Potholes',
    count: 542,
    location: 'Sector 21, Main Road',
    status: 'Active',
    color: 'bg-gradient-to-r from-red-600 to-red-400',
  },
  {
    title: 'Street Light Outage',
    count: 312,
    location: 'Sector 14, Park Lane',
    status: 'Resolved',
    color: 'bg-gradient-to-r from-yellow-500 to-yellow-300',
  },
  {
    title: 'Garbage Overflow',
    count: 278,
    location: 'Sector 7, Market Area',
    status: 'Active',
    color: 'bg-gradient-to-r from-green-600 to-green-400',
  },
  {
    title: 'Water Leakage',
    count: 190,
    location: 'Sector 3, Near School',
    status: 'Active',
    color: 'bg-gradient-to-r from-blue-600 to-blue-400',
  },
];

const IssuesSection = () => (
  <section className="py-10 px-4 md:px-12 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-pink-300 mb-8 text-center">Most Reported Issues</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {issues.map((issue) => (
        <div
          key={issue.title}
          className={`rounded-xl shadow-lg p-6 flex flex-col items-start ${issue.color} bg-opacity-90 border border-gray-900`}
        >
          <h3 className="text-xl font-bold text-white mb-2">{issue.title}</h3>
          <span className="text-lg text-white mb-1">Reports: {issue.count}</span>
          <span className="text-sm text-blue-100 mb-2">Location: {issue.location}</span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              issue.status === 'Resolved' ? 'bg-green-700' : 'bg-gray-900'
            } text-white`}
          >
            {issue.status}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default IssuesSection;