
import React, { useEffect, useState } from 'react';
import { Theme } from '../types';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || Theme.LIGHT
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === Theme.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
      aria-label="Cambia tema"
    >
      {theme === Theme.LIGHT ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25M4.156 12.134h2.25m11.914-7.424l-1.591 1.591M6.72 17.28l-1.591 1.591m12.727 0l-1.591-1.591M6.72 6.72L5.129 5.129m6.871 6.871A3.375 3.375 0 119.344 14.19a3.375 3.375 0 014.287-4.287z" />
        </svg>
      )}
    </button>
  );
};
