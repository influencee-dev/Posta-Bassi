
import React from 'react';
import { RESTAURANT_CONFIG } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
        {/* Branding & Info */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <img src="/logo.jpeg" alt="Logo" className="h-16 w-16 rounded-full border-2 border-brand shadow-lg" />
            <h3 className="text-3xl font-serif font-black uppercase tracking-tighter text-stone-900 dark:text-white">
              Posta <span className="text-brand">Bassi</span>
            </h3>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-xs transition-colors">
            Agriturismo, ristorazione e ospitalità nel cuore della Daunia. Produzione agricola propria e sapori di una volta.
          </p>
          <div className="flex gap-4">
             {/* Social Placeholders */}
             <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white cursor-pointer transition-all">FB</div>
             <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white cursor-pointer transition-all">IG</div>
          </div>
        </div>

        {/* Orari */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-stone-400">Orari di Apertura</h4>
          <ul className="space-y-4 text-stone-600 dark:text-stone-400 text-sm w-full max-w-xs">
            {RESTAURANT_CONFIG.hours.map((h, i) => (
              <li key={i} className="flex justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                <span className="font-bold text-stone-900 dark:text-stone-200">{h.day}</span>
                <span className="italic">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contatti Rapidi */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-stone-400">Dove trovarci</h4>
          <div className="space-y-6 text-stone-600 dark:text-stone-400 text-sm">
            <div className="flex items-start justify-center md:justify-start gap-4">
              <div className="mt-1 p-2 bg-brand/10 rounded-lg text-brand">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <p className="max-w-[200px] leading-relaxed text-sm">{RESTAURANT_CONFIG.address}</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="p-2 bg-brand/10 rounded-lg text-brand">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <p className="font-bold">{RESTAURANT_CONFIG.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-stone-200 dark:border-stone-800 text-center">
        <p className="text-[10px] text-stone-400 uppercase tracking-[0.4em] font-bold">
          &copy; {new Date().getFullYear()} {RESTAURANT_CONFIG.name} &bull; P.IVA 02123456789 &bull; All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
