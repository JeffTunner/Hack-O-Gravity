import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ReportIssue } from './pages/ReportIssue';
import { TrackReports } from './pages/TrackReports';
import { IssueMap } from './pages/IssueMap';
import { About } from './pages/About';
import { Auth } from './pages/Auth';

const App = () => {
  return (
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
  );
};

export default App;