
import React from 'react';
import { RESTAURANT_CONFIG } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Branding & Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-black uppercase tracking-tighter text-stone-900 dark:text-white">
            Posta <span className="text-brand">Bassi</span>
          </h3>
          <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Un luogo dove la tradizione pugliese incontra la freschezza dei nostri campi. Masseria storica del 1948 ad Arpinova.
          </p>
        </div>

        {/* Orari */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-900 dark:text-white">Orari di Apertura</h4>
          <ul className="space-y-2 text-stone-500 dark:text-stone-400 text-sm">
            {RESTAURANT_CONFIG.hours.map((h, i) => (
              <li key={i} className="flex justify-between max-w-xs mx-auto md:mx-0">
                <span className="font-medium text-stone-700 dark:text-stone-300">{h.day}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contatti Rapidi */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-900 dark:text-white">Contatti</h4>
          <div className="space-y-4 text-stone-500 dark:text-stone-400 text-sm">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {RESTAURANT_CONFIG.address}
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              {RESTAURANT_CONFIG.phone}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-stone-200 dark:border-stone-800 text-center">
        <p className="text-xs text-stone-500 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} {RESTAURANT_CONFIG.name}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};
