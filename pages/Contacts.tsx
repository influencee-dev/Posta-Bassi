
import React from 'react';
import { RESTAURANT_CONFIG } from '../constants';

interface ContactsProps {
  onOpenBooking: () => void;
}

export const Contacts: React.FC<ContactsProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 dark:text-white mb-4">Contatti & Sede</h1>
          <p className="text-stone-500 dark:text-stone-400">Ti aspettiamo ad Arpinova, tra i campi dorati del Tavoliere.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Card */}
          <div className="bg-white dark:bg-stone-900 p-8 md:p-12 rounded-3xl shadow-xl space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold mb-6">Informazioni</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand/10 text-brand rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white">Indirizzo</h4>
                  <p className="text-stone-500 dark:text-stone-400">{RESTAURANT_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand/10 text-brand rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white">Telefono</h4>
                  <p className="text-stone-500 dark:text-stone-400">{RESTAURANT_CONFIG.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand/10 text-brand rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white">Email</h4>
                  <p className="text-stone-500 dark:text-stone-400">{RESTAURANT_CONFIG.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold mb-6">Orari della Settimana</h3>
              <div className="space-y-3">
                {RESTAURANT_CONFIG.hours.map((h, i) => (
                  <div key={i} className="flex justify-between border-b border-stone-100 dark:border-stone-800 pb-3 text-sm">
                    <span className="font-bold text-stone-700 dark:text-stone-200">{h.day}</span>
                    <span className="text-stone-500 dark:text-stone-400">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onOpenBooking}
              className="w-full py-5 bg-brand hover:bg-brand-hover text-white font-bold rounded-2xl shadow-xl transition-all"
            >
              Prenota Ora
            </button>
          </div>

          {/* Map Embed - Foggia Arpinova region */}
          <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11956.321456789!2d15.6500000!3d41.5166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13396789abcd123!2sVia%20Manfredonia%2C%20Foggia%20FG!5e0!3m2!1sit!2sit!4v1715421234567!5m2!1sit!2sit" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
