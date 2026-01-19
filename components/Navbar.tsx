
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { RESTAURANT_CONFIG } from '../constants';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter text-stone-900 dark:text-white uppercase font-serif">
              Posta <span className="text-brand">Bassi</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={onOpenBooking}
                className="bg-brand hover:bg-brand-hover text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-tighter transition-all shadow-md hover:shadow-lg"
              >
                Prenota
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 dark:text-stone-300 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-stone-700 dark:text-stone-200 border-b border-stone-50 dark:border-stone-800"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  onOpenBooking();
                  setIsOpen(false);
                }}
                className="w-full bg-brand text-white py-4 rounded-xl font-bold uppercase"
              >
                Prenota un Tavolo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
