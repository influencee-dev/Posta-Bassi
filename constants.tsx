
export const RESTAURANT_CONFIG = {
  name: "Posta Bassi",
  phone: "+39 0881 700155",
  whatsapp: "390881700155",
  email: "info@postabassi.it",
  address: "Via Manfredonia Km.196+200, 71121 Foggia (FG), Italia",
  // Vite utilizza import.meta.env per le variabili d'ambiente
  brevoApiKey: (import.meta as any).env?.VITE_BREVO_API_KEY || "",
  brevoListId: 26,
  hours: [
    { day: "Lunedì", hours: "Chiuso" },
    { day: "Martedì - Sabato", hours: "12:30 - 15:00 | 19:30 - 23:30" },
    { day: "Domenica", hours: "12:30 - 15:00 | 19:30 - 23:30" }
  ],
  socials: {
    instagram: "https://instagram.com/postabassi",
    facebook: "https://facebook.com/postabassi"
  }
};

export const MENU_NOTES = {
  cover: "Coperto: € 2,00",
  gf_pizza: "Pizzeria Senza Glutine: su prenotazione entro le 17:00 (supplemento € 2,00)",
  gf_rest: "Ristorante Senza Glutine (Primi, Secondi, Contorni): supplemento € 1,50",
  lactose: "Mozzarella senza lattosio disponibile su richiesta"
};
