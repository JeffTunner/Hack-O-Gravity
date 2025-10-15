import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md px-8 py-3 flex items-center justify-between w-full">
      <div className="flex items-center gap-8">
        <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">NagarSetu</span>
        <nav>
          <ul className="flex gap-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`px-3 py-2 rounded-md font-medium transition-colors
                    ${location.pathname === link.path
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-300'}
                  `}
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
        className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 text-base font-semibold text-gray-800 dark:text-gray-100 transition flex items-center gap-2"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
};

export default Header;

