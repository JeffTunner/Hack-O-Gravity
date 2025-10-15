import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Report Issue', path: '/report' },
  { name: 'Track Reports', path: '/track' },
  { name: 'Issue Map', path: '/map' },
  { name: 'About', path: '/about' },
  { name: 'Auth', path: '/auth' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header
      className="
        relative backdrop-blur-lg bg-white/70 dark:bg-gray-900/60
        border-b border-gray-300/30 dark:border-gray-700/50
        shadow-[0_0_15px_rgba(59,130,246,0.15)]
        px-6 md:px-10 py-3 flex items-center justify-between
        transition-all duration-500
      "
    >
      {/* Left Section - Logo & Title */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative group">
          <img
            src={logo}
            alt="NagarSetu Logo"
            className="h-10 w-10 rounded-full object-cover border border-blue-500/70
                       group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                       transition-all duration-300"
          />
        </div>

        <span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
          NagarSetu
        </span>
      </div>

      {/* Center - Navigation Links */}
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`
                  relative px-3 py-2 font-semibold tracking-wide text-sm uppercase
                  transition-all duration-300 ease-in-out
                  ${
                    location.pathname === link.path
                      ? 'text-blue-500 dark:text-blue-400 after:w-full'
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-400'
                  }
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px]
                  after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full
                `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  );
};

export default Header;
