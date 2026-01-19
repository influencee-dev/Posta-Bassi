
import { RESTAURANT_CONFIG } from '../constants';
import { BookingData } from '../types';

export const saveContactToBrevo = async (data: BookingData): Promise<boolean> => {
  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': RESTAURANT_CONFIG.brevoApiKey
      },
      body: JSON.stringify({
        email: data.email,
        attributes: {
          FIRSTNAME: data.firstName,
          LASTNAME: data.lastName,
          SMS: data.phone,
          BOOKING_DATE: data.date,
          BOOKING_TIME: data.time,
          GUESTS: data.guests
        },
        listIds: [RESTAURANT_CONFIG.brevoListId],
        updateEnabled: true
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to save to Brevo:', error);
    return false;
  }
};
