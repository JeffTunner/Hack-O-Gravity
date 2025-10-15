import React, { useState } from 'react';

const faqs = [
  {
    q: 'How do I report an issue?',
    a: 'Go to the Report Issue page, fill in the details, and submit your report.',
  },
  {
    q: 'Can I report anonymously?',
    a: 'Yes, just check the anonymous reporting option in the form.',
  },
  {
    q: 'How do I track my report?',
    a: 'Use your Track ID on the Track Reports page to view status and updates.',
  },
  {
    q: 'Who can see my report?',
    a: 'Reports are visible to authorities and the community, unless marked anonymous.',
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-4xl w-full mx-auto bg-gradient-to-r from-blue-900/80 to-gray-800/80 rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-blue-300 mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-gray-800/80 rounded-lg p-4 shadow cursor-pointer" onClick={() => setOpen(open === idx ? null : idx)}>
            <h3 className="text-lg font-semibold text-blue-200">{faq.q}</h3>
            {open === idx && <p className="text-gray-300 mt-2">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;