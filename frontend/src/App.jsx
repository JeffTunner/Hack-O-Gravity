import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ReportIssue from './pages/ReportIssue.jsx';
import { TrackReports } from './pages/TrackReports';
import { IssueMap } from './pages/IssueMap';
import { About } from './pages/About';
import { Auth } from './pages/Auth';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { IssueProvider } from './context/IssueContext'; // Import IssueProvider

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  return (
    <IssueProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/track" element={<TrackReports />} />
          <Route path="/map" element={<IssueMap />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </IssueProvider>
  );
};

export default App;