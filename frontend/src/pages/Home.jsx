import React from 'react';
import Header from '../components/Header.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import StatsSection from '../components/home/StatsSection.jsx';
import CommunitySection from '../components/home/CommunitySection.jsx';
import IssuesSection from '../components/home/IssuesSection.jsx';
import TrackSection from '../components/home/TrackSection.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 min-h-screen text-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
          <HeroSection />
        </div>
        <div className="rounded-2xl bg-gray-900/80 shadow-lg p-6">
          <StatsSection />
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-blue-900/80 to-gray-800/80 shadow-lg p-6">
          <CommunitySection />
        </div>
        <div className="rounded-2xl bg-gray-900/80 shadow-lg p-6">
          <IssuesSection />
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-blue-900/80 to-gray-800/80 shadow-lg p-6">
          <TrackSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;