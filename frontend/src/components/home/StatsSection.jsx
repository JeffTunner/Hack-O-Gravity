import React from 'react';

const stats = [
  { label: 'Issues Reported', value: '2,340' },
  { label: 'Issues Resolved', value: '1,876' },
  { label: 'Active Citizens', value: '1,120' },
  { label: 'Avg Response Time', value: '3h 24m' },
];

const StatsSection = () => (
  <section className="py-12 px-4 md:px-16 bg-gradient-to-r from-blue-950/80 to-gray-900/80 rounded-xl mx-auto mt-[-4rem] mb-8 shadow-2xl max-w-5xl">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-extrabold text-blue-400 drop-shadow">{stat.value}</span>
          <span className="text-lg font-medium text-gray-300 mt-2">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;