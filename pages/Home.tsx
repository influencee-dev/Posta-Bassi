
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  // Lista delle immagini aggiornata con la nuova nomenclatura
  const galleryImages = [
    { url: "/IMG_1622.jpg", title: "Scorci della Masseria" },
    { url: "/IMG_1625.jpg", title: "Il nostro Giardino" },
    { url: "/IMG_1627.jpg", title: "Ingresso Fiorito" },
    { url: "/IMG_1628.jpg", title: "Area Relax" },
    { url: "/IMG_1631.jpg", title: "Parco Giochi" },
    { url: "/IMG_1632.jpg", title: "Angoli di Natura" },
    { url: "/IMG_1635.jpg", title: "Le nostre Camere" },
    { url: "/IMG_1636.jpg", title: "Cena all'Aperto" },
    { url: "/IMG_1639.jpg", title: "Verde e Architettura" },
    { url: "/IMG_1640.jpg", title: "Dettagli Divertimento" },
    { url: "/IMG_1641.jpg", title: "Atmosfere Serali" },
    { url: "/IMG_1642.jpg", title: "Vista Panoramica" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/IMG_1638.jpg" 
            alt="Agriturismo Posta Bassi al Tramonto" 
            className="w-full h-full object-cover animate-slow-zoom brightness-[0.6]"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="mb-8 flex justify-center">
             <img src="/logo.jpg" alt="Logo Posta Bassi" className="w-24 h-24 rounded-full border-2 border-brand shadow-2xl animate-in fade-in zoom-in duration-700" />
          </div>
          <span className="text-brand uppercase tracking-[0.5em] font-black text-xs md:text-sm mb-6 block brightness-[2] drop-shadow-sm">Dal 1948 nel cuore della Daunia</span>
          <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8 drop-shadow-2xl leading-[1] transition-all">
            Posta <span className="text-brand brightness-150">Bassi</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed drop-shadow-lg italic">
            "Saperi e sapori della nostra terra, portati in tavola con amore."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onOpenBooking}
              className="px-14 py-5 bg-brand hover:bg-brand-hover text-white font-black uppercase tracking-widest text-sm rounded-full transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(77,11,43,0.3)]"
            >
              Prenota ora
            </button>
            <Link 
              to="/menu"
              className="px-14 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/40 font-black uppercase tracking-widest text-sm rounded-full transition-all"
            >
              Scopri il Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Storia & Masseria Section */}
      <section className="py-32 bg-stone-50 dark:bg-stone-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="relative group">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand/5 rounded-full blur-[100px]" />
              <img 
                src="/IMG_1634.jpg" 
                alt="Ingresso Masseria Storica" 
                className="rounded-[2.5rem] shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]" 
              />
              <div className="absolute -bottom-8 -right-8 bg-brand p-10 rounded-3xl text-white shadow-2xl z-20 hidden lg:block">
                <p className="text-5xl font-serif font-bold italic mb-1">75+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-80">Anni di Tradizione</p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-brand font-black uppercase tracking-[0.3em] text-xs brightness-125">L'Eredità della Daunia</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-white leading-tight">Un viaggio nel tempo dal 1948</h2>
              </div>
              <div className="space-y-6 text-stone-600 dark:text-stone-400 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  L'Agriturismo **Posta Bassi** è un'autentica testimonianza della cultura rurale foggiana. Nata come masseria nel dopoguerra, la nostra struttura ha conservato intatto il fascino dei suoi mattoni rossi e delle sue radici.
                </p>
                <p>
                  Siamo un'azienda agricola che ha saputo evolversi in un luogo di ospitalità, dove i prodotti della nostra terra diventano i protagonisti di una tavola generosa e sincera.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-200 dark:border-stone-800">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-brand italic">Prodotti</span>
                  <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">A KM 0</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-brand italic">Parco Giochi</span>
                  <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">Per Famiglie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row Menu Teaser */}
      <section className="py-32 bg-white dark:bg-stone-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/IMG_1633.jpg" 
                alt="Tavola Imbandita Posta Bassi" 
                className="rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02]" 
              />
            </div>
            <div className="order-1 md:order-2 space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-white leading-tight">
                Sapori Schietti e <br/> <span className="text-brand brightness-125 font-black italic">Genuini</span>
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-xl font-light leading-relaxed">
                Dal campo alla tavola: la nostra cucina celebra la tradizione pugliese con ingredienti freschi, carni selezionate e specialità di mare preparate secondo le antiche ricette.
              </p>
              <ul className="space-y-6">
                {[
                  'Ampio spazio esterno per cene estive', 
                  'Specialità senza glutine (su prenotazione)', 
                  'Vasta selezione di antipasti tipici', 
                  'Location ideale per piccoli eventi e ricorrenze'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-stone-700 dark:text-stone-300 text-lg transition-colors font-medium">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link to="/menu" className="inline-block px-12 py-5 bg-brand text-white font-black uppercase tracking-widest rounded-2xl hover:bg-brand-hover transition-all shadow-xl">
                  Guarda il Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row Photo Gallery */}
      <section className="py-32 bg-stone-50 dark:bg-stone-900 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold transition-colors">La Nostra Masseria</h2>
            <div className="w-32 h-1.5 bg-brand mx-auto rounded-full" />
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-lg">Esplora gli spazi esterni, i giardini curati e il grande parco giochi dedicato ai bambini.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[2rem] aspect-square cursor-pointer shadow-xl transition-all hover:shadow-2xl">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_1644.jpg" alt="Atmosfera Notturna Posta Bassi" className="w-full h-full object-cover brightness-[0.4]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-8">
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">Vivi l'autenticità di Posta Bassi</h2>
          <p className="text-xl opacity-90 font-light max-w-2xl mx-auto leading-relaxed">Ti aspettiamo per una serata sotto le stelle o un pranzo in famiglia immersi nel verde della nostra terra.</p>
          <div className="pt-6">
            <button 
              onClick={onOpenBooking}
              className="px-16 py-6 bg-white text-brand font-black uppercase tracking-[0.2em] text-sm rounded-full hover:scale-105 transition-transform shadow-2xl"
            >
              Prenota il tuo tavolo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
