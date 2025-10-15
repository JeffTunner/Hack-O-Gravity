import React from 'react';

const SupportSection = () => (
  <section className="max-w-4xl w-full mx-auto bg-gray-900/80 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center">
    <h2 className="text-2xl font-bold text-blue-300 mb-4">Customer Support & Feedback</h2>
    <p className="text-gray-200 mb-4">
      Need help or want to share feedback? Our support team is here for you 24/7.
      Reach out via email or use the feedback form below.
    </p>
    <a
      href="mailto:support@nagarsetu.com"
      className="px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-semibold shadow transition mb-2"
    >
      Email Support
    </a>
    <form className="w-full max-w-md mt-4 space-y-3">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700"
      />
      <textarea
        placeholder="Your Feedback"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700"
        rows={3}
      />
      <button
        type="submit"
        className="w-full py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg transition"
      >
        Submit Feedback
      </button>
    </form>
  </section>
);

export default SupportSection;