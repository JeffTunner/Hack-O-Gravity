import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Report Issue', path: '/report' },
  { name: 'Track Reports', path: '/track' },
  { name: 'Issue Map', path: '/map' },
  { name: 'About', path: '/about' },
  { name: 'Auth', path: '/auth' },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">NagarSetu</span>
        <nav>
          <ul className="flex gap-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 dark:text-gray-100 transition"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
};

export default Header;

