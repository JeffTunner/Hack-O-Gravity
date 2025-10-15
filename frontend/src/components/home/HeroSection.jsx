import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero_section_bg_img.jpeg';

const HeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center h-[60vh] md:h-[70vh] overflow-hidden"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 w-full" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-300 drop-shadow-lg tracking-tight">
        NagarSetu
      </h1>
      <p className="text-xl md:text-2xl font-medium mb-8 text-gray-200 max-w-2xl mx-auto">
        Crowdsourced Civic Issue Reporting & Resolution. Empowering citizens, transforming cities.
      </p>
      <div className="flex gap-6">
        <Link
          to="/report"
          className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg shadow-lg transition transform hover:scale-105"
        >
          Report Issue
        </Link>
        <Link
          to="/map"
          className="px-8 py-3 rounded-full bg-gray-800 hover:bg-blue-700 text-blue-200 font-semibold text-lg shadow-lg border border-blue-500 transition transform hover:scale-105"
        >
          View Map
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;