import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OverviewSection from '../components/about/OverviewSection.jsx';
import FeaturesSection from '../components/about/FeaturesSection.jsx';
import StatsSection from '../components/about/StatsSection.jsx';
import GuidelinesSection from '../components/about/GuidelinesSection.jsx';
import FAQSection from '../components/about/FAQSection.jsx';
import SupportSection from '../components/about/SupportSection.jsx';

export function About() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 min-h-screen text-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-8 space-y-12">
        <OverviewSection />
        <FeaturesSection />
        <StatsSection />
        <GuidelinesSection />
        <FAQSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}