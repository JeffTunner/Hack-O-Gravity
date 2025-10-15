import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 py-6 mt-12 text-center text-gray-400 border-t border-blue-900">
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <span>© {new Date().getFullYear()} NagarSetu. All rights reserved.</span>
      <span className="hidden md:inline">|</span>
      <span>
        Made with <span className="text-blue-400">♥</span> for Smart Cities
      </span>
    </div>
  </footer>
);

export default Footer;