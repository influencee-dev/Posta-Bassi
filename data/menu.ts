
import { MenuCategory } from '../types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Gli Antipasti di Mare",
    items: [
      { id: "am1", name: "Frittini gamberi e zucchine", ingredients: "", price: 8.00 },
      { id: "am2", name: "Filetti di baccalà pastellato", ingredients: "", price: 9.00 },
      { id: "am3", name: "Salmone marinato", ingredients: "salmone, sale, zucchero di canna, bucce di limone, olio evo, prezzemolo", price: 11.00 },
      { id: "am4", name: "Gamberi al rum", ingredients: "gamberi, olio evo, prezzemolo, sale, rum", price: 12.00 },
      { id: "am5", name: "Insalata di polpo", ingredients: "", price: 14.00 },
      { id: "am6", name: "Antipasto misto di mare (a persona)", ingredients: "può variare in base alla disponibilità", price: 18.00 }
    ]
  },
  {
    title: "Gli Antipasti di Terra",
    items: [
      { id: "at1", name: "Mozzarella di bufala (1 pz.)", ingredients: "", price: 3.50 },
      { id: "at2", name: "Bruschette (4 pz.)", ingredients: "pane, pomodoro, rucola, olio evo, origano, sale", price: 4.00 },
      { id: "at3", name: "Verdure grigliate", ingredients: "", price: 6.00 },
      { id: "at4", name: "Caciocavallo in padella", ingredients: "", price: 8.00 },
      { id: "at5", name: "Mortadella alla piastra con scaglie di grana e balsamico", ingredients: "", price: 8.50 },
      { id: "at6", name: "Prosciutto crudo", ingredients: "", price: 9.00 },
      { id: "at7", name: "Affettati misti", ingredients: "", price: 9.00 },
      { id: "at8", name: "Terrina di caciocavallo con pomodorini", ingredients: "", price: 9.50 },
      { id: "at9", name: "Formaggi misti", ingredients: "", price: 10.00 },
      { id: "at10", name: "Prosciutto crudo alla carrettiera", ingredients: "", price: 11.00 },
      { id: "at11", name: "Prosciutto crudo e bufalina", ingredients: "", price: 11.00 },
      { id: "at12", name: "Affettati e formaggi misti", ingredients: "", price: 11.50 },
      { id: "at13", name: "Antipasto della casa (a persona)", ingredients: "", price: 14.50 },
      { id: "at14", name: "Tagliere di affettati e formaggi misti", ingredients: "n.4 salumi + n.2 formaggi + salsine", price: 20.00 }
    ]
  },
  {
    title: "I Primi Piatti Mare",
    items: [
      { id: "pm1", name: "Fusilli con vellutata di ceci e calamari", ingredients: "ceci, calamari, aglio, sale, prezzemolo, pomodorino, olio EVO, vino bianco", price: 12.00 },
      { id: "pm2", name: "Chitarrini gamberi e pistacchi", ingredients: "olio evo, aglio, gamberi, pomodorini, pistacchi, sale", price: 14.00 },
      { id: "pm3", name: "Ravioli ripieni di polpo e patate", ingredients: "pomodorino e patate", price: 14.00 },
      { id: "pm4", name: "Calamarata verde mare", ingredients: "pomodorino, zucchine, seppie, calamari, gamberi, pepe, vino bianco, vongole, cozze, prezzemolo, aglio", price: 15.00 }
    ]
  },
  {
    title: "I Primi Piatti Terra",
    items: [
      { id: "pt1", name: "Orecchiette con cime di rapa", ingredients: "vino bianco, olio evo, aglio, cime di rapa, sale", price: 8.00 },
      { id: "pt2", name: "Favetta con cicoria", ingredients: "fave secche, olio evo, aglio, sale, cicoria, pomodorino, basilico", price: 8.50 },
      { id: "pt3", name: "Maccheroncini alla bresaola e caciocavallo", ingredients: "julienne di bresaola, pomodorino e caciocavallo", price: 9.00 },
      { id: "pt4", name: "Orecchiette speck e salsiccia", ingredients: "speck, salsiccia, pomodoro pelato, olio evo, aglio", price: 9.00 },
      { id: "pt5", name: "Maccheroncini melanzane e caciocavallo", ingredients: "melanzane, pomodoro, caciocavallo, aglio, olio evo, basilico", price: 9.00 },
      { id: "pt6", name: "Calamarata speck, radicchio e caciocavallo", ingredients: "", price: 9.50 },
      { id: "pt7", name: "Trofie vellutata di zucca e salsiccia", ingredients: "", price: 10.00 },
      { id: "pt8", name: "Cuori rossi ripieni (bufala e basilico)", ingredients: "ricotta di bufala, bufala campana, pomodoro, pangrattato, sale, olio EVO, pepe", price: 10.00 }
    ]
  },
  {
    title: "I Secondi Piatti Mare",
    items: [
      { id: "sm1", name: "Filetto di branzino in umido", ingredients: "aglio, olio evo, vino bianco, pomodorino, basilico, prezzemolo, olive", price: 12.00 },
      { id: "sm2", name: "Trancio di pesce spada alla piastra", ingredients: "", price: 12.00 },
      { id: "sm3", name: "Seppie e gamberi alla piastra", ingredients: "", price: 15.00 },
      { id: "sm4", name: "Frittura calamari", ingredients: "", price: 17.00 },
      { id: "sm5", name: "Frittura di seppie, calamari e gamberoni", ingredients: "", price: 18.00 }
    ]
  },
  {
    title: "I Secondi Piatti Terra",
    items: [
      { id: "st1", name: "Paccanelli alla piastra", ingredients: "pancetta maiale, formaggio grattugiato, pepe", price: 9.00 },
      { id: "st2", name: "Torcinelli alla piastra", ingredients: "budella di agnello, pancetta, sale, pepe, prezzemolo", price: 12.00 },
      { id: "st3", name: "Salsiccia e torcinelli alla piastra", ingredients: "", price: 12.00 },
      { id: "st4", name: "Entrecote di manzo in padella", ingredients: "aceto balsamico o pepe verde", price: 17.00 },
      { id: "st5", name: "Tagliata di entrecote con rucola e grana", ingredients: "", price: 18.00 },
      { id: "st6", name: "Arrosto misto di carne", ingredients: "", price: 19.00 },
      { id: "st7", name: "Bistecca di manzo (a porzione)", ingredients: "", price: 20.00 }
    ]
  },
  {
    title: "Pizzeria (Le Rosse)",
    items: [
      { id: "pzr1", name: "Marinara", ingredients: "pomodoro, aglio, basilico, origano, olio EVO", price: 5.00 },
      { id: "pzr2", name: "Margherita", ingredients: "pomodoro, fior di latte, basilico", price: 6.00 },
      { id: "pzr3", name: "Diavola", ingredients: "pomodoro, fior di latte, salsiccia piccante, basilico", price: 8.00 },
      { id: "pzr4", name: "Provola e Pepe", ingredients: "pomodoro, provola affumicata, basilico, pepe", price: 8.00 },
      { id: "pzr5", name: "Wudy", ingredients: "pomodoro, fior di latte, wurstel, patatine fritte, basilico", price: 8.00 },
      { id: "pzr6", name: "Milanese", ingredients: "pomodoro, fior di latte, ventricina piccante, gorgonzola, basilico", price: 9.00 },
      { id: "pzr7", name: "Peperoni e Salsiccia", ingredients: "pomodoro, mozzarella, peperoni grigliati, salsiccia fresca", price: 9.00 },
      { id: "pzr8", name: "Capricciosa", ingredients: "pomodoro, fior di latte, cotto, funghi, olive, carciofi, basilico", price: 10.00 },
      { id: "pzr9", name: "La Regina", ingredients: "pomodoro, fior di latte, bufala, grana padano, basilico", price: 10.00 },
      { id: "pzr10", name: "Napoli", ingredients: "pomodoro, bufala, olive, capperi, alici, basilico", price: 10.00 },
      { id: "pzr11", name: "Caciocavallo e Speck", ingredients: "pomodoro, fior di latte, caciocavallo podolico, speck, basilico", price: 10.00 },
      { id: "pzr12", name: "Tonno e Cipolla", ingredients: "pomodoro, fior di latte, tonno, cipolla, basilico", price: 11.00 },
      { id: "pzr13", name: "Burratina", ingredients: "pomodoro, fior di latte, burratina, crudo S. Daniele, scaglie di grana, basilico", price: 13.00 }
    ]
  },
  {
    title: "Pizzeria (Le Bianche)",
    items: [
      { id: "pzb1", name: "Focaccia", ingredients: "olio d’oliva, sale, origano", price: 4.00 },
      { id: "pzb2", name: "Crudaiola", ingredients: "focaccia, rucola, pomodoro semidry, bocconcini, grana, basilico", price: 8.00 },
      { id: "pzb3", name: "Bufalina Rivisitata", ingredients: "crema datterino giallo, bufala, grana padano, basilico", price: 9.00 },
      { id: "pzb4", name: "Funghi e Salsiccia", ingredients: "fior di latte, funghi porcini, salsiccia fresca, basilico", price: 10.00 },
      { id: "pzb5", name: "Friarielli", ingredients: "fior di latte, friarielli, salsiccia fresca, tarallo sbriciolato, basilico", price: 10.00 },
      { id: "pzb6", name: "5 Formaggi", ingredients: "fior di latte, emmental, caciocavallo, gorgonzola, grana, basilico", price: 11.00 },
      { id: "pzb7", name: "Vegetariana", ingredients: "fior di latte, melanzane, zucchine, peperoni, basilico", price: 11.00 },
      { id: "pzb8", name: "Valtellina", ingredients: "fior di latte, rucola, bresaola Rigamonti, grana, basilico", price: 12.00 },
      { id: "pzb9", name: "Mortazza", ingredients: "fior di latte, mortadella, burratina, granella di pistacchio, basilico", price: 12.00 }
    ]
  },
  {
    title: "Dessert & Frutta",
    items: [
      { id: "d1", name: "Dolci della casa (Cannolo, Cassata, etc.)", ingredients: "", price: 5.00 },
      { id: "d2", name: "Gelati Cafè Noir", ingredients: "croccantino amarena/pistacchio, Bueno, Cremino", price: 5.00 },
      { id: "d3", name: "Sorbetto (limone o cocco)", ingredients: "", price: 5.00 },
      { id: "d4", name: "Coppa Amarena o Cioccolato", ingredients: "", price: 5.00 },
      { id: "d5", name: "Rocher (bianco o pistacchio)", ingredients: "", price: 5.00 },
      { id: "d6", name: "Ananas", ingredients: "", price: 4.00 },
      { id: "d7", name: "Composta di frutta fresca", ingredients: "", price: 6.00 }
    ]
  },
  {
    title: "Bevande, Birre & Amari",
    items: [
      { id: "b1", name: "Caffè", ingredients: "", price: 1.00 },
      { id: "b2", name: "Acqua 0,75lt", ingredients: "", price: 1.50 },
      { id: "b3", name: "Bibite lattina/bottiglia", ingredients: "Coca, Fanta, Sprite, Estathè", price: 3.00 },
      { id: "b4", name: "Amari", ingredients: "", price: 4.00 },
      { id: "b5", name: "Grappa (Bianca/Barricata)", ingredients: "", price: 5.00 },
      { id: "b6", name: "Moretti/Ichnusa/Messina 0,40 cl", ingredients: "Birra alla spina", price: 5.50 },
      { id: "b7", name: "Rum (Diplomatico, Zacapa, etc.)", ingredients: "", price: 7.50 }
    ]
  }
];
