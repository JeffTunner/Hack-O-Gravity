import React from 'react';

const steps = [
  'Select the issue category.',
  'Describe the issue clearly.',
  'Detect or enter your location.',
  'Attach media (photo/video) if possible.',
  'Optionally use voice input for description.',
  'Choose anonymous reporting if desired.',
  'Submit your report and track its status.',
];

const GuidelinesSection = () => (
  <section className="max-w-4xl w-full mx-auto bg-gray-900/80 rounded-2xl shadow-2xl p-8">
    <h2 className="text-2xl font-bold text-blue-300 mb-4">Reporting Guidelines</h2>
    <ul className="list-decimal list-inside space-y-3 text-gray-200">
      {steps.map((step, idx) => (
        <li key={idx} className="bg-blue-900/60 rounded-lg px-4 py-2">{step}</li>
      ))}
    </ul>
  </section>
);

export default GuidelinesSection;