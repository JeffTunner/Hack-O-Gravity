import React from 'react';

const stats = [
  { label: 'Issues Reported', value: '2,340' },
  { label: 'Issues Resolved', value: '1,876' },
  { label: 'Active Citizens', value: '1,120' },
  { label: 'Avg Response Time', value: '3h 24m' },
];

const StatsSection = () => (
  <section className="max-w-4xl w-full mx-auto py-8">
    <h2 className="text-2xl font-bold text-blue-300 mb-6 text-center">App Impact</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map(stat => (
        <div key={stat.label} className="flex flex-col items-center bg-gray-900/80 rounded-xl p-6 shadow">
          <span className="text-3xl md:text-4xl font-extrabold text-blue-400 drop-shadow">{stat.value}</span>
          <span className="text-lg font-medium text-gray-300 mt-2">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;