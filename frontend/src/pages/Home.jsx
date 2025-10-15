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
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 min-h-screen text-gray-100">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <CommunitySection />
        <IssuesSection />
        <TrackSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;