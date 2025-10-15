import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReportForm from '../components/reportIssue/ReportForm.jsx';

const ReportIssue = () => (
  <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 min-h-screen text-gray-100 flex flex-col">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full bg-gray-900/80 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-blue-300 mb-6 text-center tracking-tight">
          Report a Civic Issue
        </h1>
        <ReportForm />
      </div>
    </main>
    <Footer />
  </div>
);

export default ReportIssue;