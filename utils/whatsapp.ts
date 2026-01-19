
import { RESTAURANT_CONFIG } from '../constants';
import { BookingData } from '../types';

export const openWhatsAppBooking = (data: BookingData) => {
  const message = encodeURIComponent(
    `Ciao Posta Bassi! Vorrei prenotare un tavolo.\n\n` +
    `*Nome:* ${data.firstName} ${data.lastName}\n` +
    `*Data:* ${data.date}\n` +
    `*Orario:* ${data.time}\n` +
    `*Persone:* ${data.guests}\n` +
    `*Telefono:* ${data.phone}\n` +
    `*Email:* ${data.email}\n\n` +
    `In attesa di vostra conferma, grazie!`
  );

  const url = `https://wa.me/${RESTAURANT_CONFIG.whatsapp}?text=${message}`;
  window.open(url, '_blank');
};
