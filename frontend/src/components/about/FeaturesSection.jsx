import React from 'react';

const features = [
  {
    icon: '📝',
    title: 'Easy Reporting',
    desc: 'Report civic issues in seconds with location, media, and voice input.',
  },
  {
    icon: '📍',
    title: 'Live Issue Map',
    desc: 'Visualize reported issues across the city in real time.',
  },
  {
    icon: '🔔',
    title: 'Track & Notify',
    desc: 'Track your reports and get instant updates on resolutions.',
  },
  {
    icon: '🤝',
    title: 'Community Collaboration',
    desc: 'Discuss, upvote, and resolve issues together as a community.',
  },
];

const FeaturesSection = () => (
  <section className="max-w-4xl w-full mx-auto bg-gradient-to-r from-blue-900/80 to-gray-800/80 rounded-2xl p-8 shadow-xl">
    <h2 className="text-2xl font-bold text-blue-300 mb-6 text-center">Platform Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map(f => (
        <div key={f.title} className="flex items-center gap-4 bg-gray-800/80 rounded-xl p-6 shadow">
          <span className="text-4xl">{f.icon}</span>
          <div>
            <h3 className="text-lg font-bold text-blue-200">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;