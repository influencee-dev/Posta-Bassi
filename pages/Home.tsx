
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  const images = [
    "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop" 
            alt="Agriturismo Posta Bassi" 
            className="w-full h-full object-cover animate-slow-zoom brightness-[0.7]"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <span className="text-brand uppercase tracking-[0.4em] font-bold text-sm mb-6 block brightness-[1.8] drop-shadow-sm">Dal 1948 ad Arpinova</span>
          <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8 drop-shadow-2xl leading-[1.1]">
            Posta <span className="text-brand brightness-150">Bassi</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto opacity-95 leading-relaxed drop-shadow-md">
            L'autentico agriturismo foggiano, dove la tradizione del Tavoliere incontra la freschezza dei nostri campi.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={onOpenBooking}
              className="px-12 py-5 bg-brand hover:bg-brand-hover text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl"
            >
              Prenota un Tavolo
            </button>
            <Link 
              to="/menu"
              className="px-12 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-full transition-all"
            >
              Scopri il Menu
            </Link>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-stone-50 dark:bg-stone-900 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl" />
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" alt="Campagna Foggiana" className="rounded-3xl shadow-2xl relative z-10" />
              <div className="absolute -bottom-6 -right-6 bg-brand p-8 rounded-2xl text-white shadow-xl z-20 hidden md:block">
                <p className="text-4xl font-serif font-bold italic">1948</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Fondazione</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-brand font-bold uppercase tracking-widest text-sm brightness-125">La Nostra Storia</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-white transition-colors">Dalla Masseria all'Agriturismo</h2>
              </div>
              <div className="space-y-4 text-stone-600 dark:text-stone-400 text-lg leading-relaxed transition-colors">
                <p>
                  L'Agriturismo Posta Bassi nasce dalla ristrutturazione di una masseria del 1948. Posto alla periferia di Arpinova, nei pressi di Foggia, è situato nella contrada da cui prende il nome.
                </p>
                <p>
                  Sorgiamo su un'area di 4 ettari, nella quale coltiviamo prodotti orticoli utilizzati all'interno dell'agriturismo stesso. 
                </p>
                <p>
                  La struttura dispone di 6 camere climatizzate con WI-FI gratuito e una palazzina ristorazione ricavata da una vecchia stalla, con un'ampia veranda affacciata su un parco giochi e un giardino attrezzato.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-200 dark:border-stone-800 transition-colors">
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white transition-colors">Cucina KM 0</h4>
                  <p className="text-sm text-stone-500">Dall'orto alla tavola</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white transition-colors">Ospitalità</h4>
                  <p className="text-sm text-stone-500">6 Camere climatizzate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row Menu Teaser */}
      <section className="py-24 bg-white dark:bg-stone-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800&auto=format&fit=crop" alt="Piatti tipici" className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]" />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-white transition-colors">
                Sapori Autentici della <br/> <span className="text-brand brightness-125">Daunia</span>
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed transition-colors">
                Utilizziamo prodotti orticoli coltivati nei nostri 4 ettari di terreno per garantirti freschezza e genuinità in ogni portata.
              </p>
              <ul className="space-y-4">
                {['Ampio parcheggio a vista', 'Parco giochi per bambini', 'Veranda per eventi', 'Specialità mare e terra'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 dark:text-stone-300 transition-colors">
                    <svg className="w-5 h-5 text-brand brightness-125" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/menu" className="inline-block px-10 py-4 border-2 border-brand text-brand font-bold rounded-xl hover:bg-brand hover:text-white transition-all">
                Esplora il Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Row Photo Gallery */}
      <section className="py-24 bg-stone-50 dark:bg-stone-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold transition-colors">L'Agriturismo in Foto</h2>
            <div className="w-20 h-1 bg-brand mx-auto" />
            <p className="text-stone-500 dark:text-stone-400 transition-colors">Posta Bassi: tra natura e buona tavola.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {images.map((url, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg">
                <img 
                  src={url} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-brand/20 transition-all duration-300 flex items-center justify-center">
                   <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                   </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
