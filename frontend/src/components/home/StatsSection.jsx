import React from 'react';

const stats = [
  { label: 'Issues Reported', value: '2,340', color: 'text-blue-400' },
  { label: 'Issues Resolved', value: '1,876', color: 'text-green-400' },
  { label: 'Active Citizens', value: '1,120', color: 'text-yellow-400' },
  { label: 'Avg Response Time', value: '3h 24m', color: 'text-pink-400' },
];

const StatsSection = () => (
  <section className="py-10 px-4 md:px-12 bg-gradient-to-r from-gray-900 via-blue-950 to-gray-800 rounded-2xl mx-auto shadow-2xl max-w-5xl mb-10 border border-blue-900">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center bg-gray-800/80 rounded-xl p-6 shadow-lg">
          <span className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</span>
          <span className="text-lg font-medium text-blue-100">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;