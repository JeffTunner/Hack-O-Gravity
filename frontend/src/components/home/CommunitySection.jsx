import React from 'react';

const CommunitySection = () => (
  <section className="py-10 px-4 md:px-12 max-w-4xl mx-auto">
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8 shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-blue-800">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Community"
        className="w-32 h-32 object-contain rounded-full border-4 border-blue-400 shadow-lg bg-blue-950"
      />
      <div>
        <h2 className="text-3xl font-bold text-yellow-300 mb-2">Join the Civic Community</h2>
        <p className="text-lg text-blue-100 mb-4">
          NagarSetu connects citizens and authorities for a smarter, cleaner, and safer city. Collaborate, discuss, and resolve civic issues together.
        </p>
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-semibold shadow transition">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default CommunitySection;