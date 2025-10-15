import React from 'react';
import logo from '../../assets/logo.jpg'; // Use your city image

const OverviewSection = () => (
  <section className="max-w-4xl w-full mx-auto bg-gray-900/80 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8">
    <img
      src={logo}
      alt="City"
      className="w-48 h-48 object-cover rounded-xl border-4 border-blue-500 shadow-lg"
    />
    <div>
      <h2 className="text-3xl font-bold text-blue-300 mb-2">About NagarSetu</h2>
      <p className="text-lg text-gray-200 mb-4">
        NagarSetu is a crowdsourced civic issue reporting and resolution platform, connecting citizens and authorities for smarter, cleaner, and safer cities. Our mission is to empower every citizen to make a difference, streamline civic communication, and accelerate urban transformation.
      </p>
      <div className="flex gap-4">
        <span className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold shadow">Empower</span>
        <span className="px-4 py-2 rounded-full bg-blue-800 text-blue-200 font-semibold shadow">Connect</span>
        <span className="px-4 py-2 rounded-full bg-blue-900 text-blue-300 font-semibold shadow">Transform</span>
      </div>
    </div>
  </section>
);

export default OverviewSection;