
import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../data/menu';
import { MENU_NOTES } from '../constants';

export const Menu: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand font-bold uppercase tracking-widest text-sm">Le nostre specialità</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 dark:text-white">Il Nostro Menu</h1>
          <div className="w-24 h-1 bg-brand mx-auto mt-6" />
        </div>

        {/* Notes */}
        <div className="mb-16 p-8 bg-brand/5 dark:bg-brand/10 border border-brand/20 rounded-3xl shadow-sm">
          <h3 className="text-brand font-bold uppercase tracking-wider text-sm mb-4">Informazioni Utili</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-600 dark:text-stone-400 text-sm italic">
            {Object.values(MENU_NOTES).map((note, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-brand font-bold">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {MENU_DATA.map((category) => (
            <div key={category.title} className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-200 whitespace-nowrap">
                  {category.title}
                </h2>
                <div className="h-px w-full bg-stone-200 dark:bg-stone-800" />
              </div>

              <div className="grid grid-cols-1 gap-x-12 gap-y-10">
                {category.items.map((item) => (
                  <div key={item.id} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-bold text-stone-900 dark:text-white group-hover:text-brand transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-grow mx-4 border-b border-dotted border-stone-300 dark:border-stone-700" />
                      <span className="font-bold text-stone-900 dark:text-brand">
                        € {item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-stone-500 dark:text-stone-400 text-sm italic font-light leading-relaxed">
                      {item.ingredients}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center p-12 bg-brand rounded-3xl text-white shadow-2xl">
          <h3 className="text-3xl font-serif mb-4">Voglia di sapori autentici?</h3>
          <p className="opacity-80 mb-8 max-w-md mx-auto">Prenota il tuo tavolo e assicurati un posto nella nostra masseria storica.</p>
          <Link to="/contatti" className="px-10 py-4 bg-white text-brand font-black uppercase rounded-full hover:scale-105 transition-transform inline-block">
            Contattaci Ora
          </Link>
        </div>
      </div>
    </div>
  );
};
