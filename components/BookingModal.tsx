
import React, { useState } from 'react';
import { BookingData } from '../types';
import { saveContactToBrevo } from '../services/brevoService';
import { openWhatsAppBooking } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '20:00',
    guests: 2
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveContactToBrevo(formData);
      openWhatsAppBooking(formData);
      onClose();
    } catch (err) {
      console.error(err);
      alert('Si è verificato un errore. Per favore prova a chiamarci direttamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="px-6 py-4 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center bg-stone-50 dark:bg-stone-800/50">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-white">Prenota un Tavolo</h2>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input required name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus:ring-2 focus:ring-brand outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Cognome</label>
              <input required name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus:ring-2 focus:ring-brand outline-none transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus:ring-2 focus:ring-brand outline-none transition-all" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Telefono</label>
            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus:ring-2 focus:ring-brand outline-none transition-all" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1">Data</label>
              <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus:ring-2 focus:ring-brand outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Orario</label>
              <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus:ring-2 focus:ring-brand outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Persone</label>
              <input required type="number" min="1" max="20" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus:ring-2 focus:ring-brand outline-none transition-all" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-brand hover:bg-brand-hover text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            {loading ? (
              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
            ) : (
              <>
                Prenota su WhatsApp
              </>
            )}
          </button>
          <p className="text-xs text-center text-stone-500 italic">
            La prenotazione sarà confermata solo dopo nostra risposta.
          </p>
        </form>
      </div>
    </div>
  );
};
