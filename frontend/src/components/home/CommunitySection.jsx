import React from 'react';

const CommunitySection = () => (
  <section className="py-12 px-4 md:px-16 max-w-4xl mx-auto">
    <div className="bg-gradient-to-r from-blue-900/80 to-gray-800/80 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center gap-8">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Community"
        className="w-32 h-32 object-contain rounded-full border-4 border-blue-500 shadow-lg"
      />
      <div>
        <h2 className="text-3xl font-bold text-blue-300 mb-2">Join the Civic Community</h2>
        <p className="text-lg text-gray-200 mb-4">
          NagarSetu connects citizens and authorities for a smarter, cleaner, and safer city. Collaborate, discuss, and resolve civic issues together.
        </p>
        <button className="px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-semibold shadow transition">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default CommunitySection;