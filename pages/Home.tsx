
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  // Lista delle immagini caricate dal cliente
  const galleryImages = [
    { url: "/DSC02581.jpg", title: "Dettagli Masseria" },
    { url: "/DSC02611.jpg", title: "Il Giardino" },
    { url: "/DSC02614.jpg", title: "L'Ingresso" },
    { url: "/DSC02621.jpg", title: "Atmosfere all'Aperto" },
    { url: "/DSC02641.jpg", title: "Area Giochi" },
    { url: "/DSC02643.jpg", title: "Natura e Relax" },
    { url: "/DSC02646.jpg", title: "Ristorazione" },
    { url: "/DSC02652.jpg", title: "Architettura Storica" },
    { url: "/DSC02655.jpg", title: "Le Nostre Camere" },
    { url: "/DSC02672.jpg", title: "Cene al Tramonto" },
    { url: "/DSC02761.jpg", title: "Divertimento" },
    { url: "/DSC02766.jpg", title: "Posta Bassi di Sera" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/DSC02766.jpg" 
            alt="Agriturismo Posta Bassi al Tramonto" 
            className="w-full h-full object-cover animate-slow-zoom brightness-[0.6]"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="mb-8 flex justify-center">
             <img src="/logo.jpg" alt="Logo" className="w-24 h-24 rounded-full border-2 border-brand shadow-2xl animate-in fade-in zoom-in duration-700" />
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
                src="/DSC02652.jpg" 
                alt="Ingresso Masseria" 
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
                  L'Agriturismo **Posta Bassi** non è solo un ristorante, è un pezzo di storia foggiana. Nata come masseria nel 1948, la nostra struttura conserva il fascino dell'architettura rurale in mattoni rossi.
                </p>
                <p>
                  Dal 2004, abbiamo aperto le porte all'ospitalità, offrendo **6 camere climatizzate** immerse nella quiete di 4 ettari di terreno, dove coltiviamo con orgoglio ciò che troverete nel vostro piatto.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-200 dark:border-stone-800">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-brand italic">4 Ettari</span>
                  <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">Coltivazioni Proprie</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-brand italic">6 Camere</span>
                  <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">Ospitalità Rurale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row Menu Teaser - Usando foto reale */}
      <section className="py-32 bg-white dark:bg-stone-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/DSC02646.jpg" 
                alt="I nostri sapori" 
                className="rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02]" 
              />
            </div>
            <div className="order-1 md:order-2 space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-white leading-tight">
                Cucina della <br/> <span className="text-brand brightness-125 font-black italic">Tradizione</span>
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-xl font-light leading-relaxed">
                Ogni ingrediente parla della nostra terra. Dalle verdure fresche del nostro orto ai piatti di mare e terra tipici della cultura pugliese.
              </p>
              <ul className="space-y-6">
                {[
                  'Ampio parcheggio privato e sicuro', 
                  'Parco giochi per il divertimento dei più piccoli', 
                  'Veranda panoramica per eventi speciali', 
                  'Specialità tradizionali di terra e mare'
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
                  Esplora il Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row Photo Gallery Reale */}
      <section className="py-32 bg-stone-50 dark:bg-stone-900 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold transition-colors">Uno Sguardo sul Locale</h2>
            <div className="w-32 h-1.5 bg-brand mx-auto rounded-full" />
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-lg">Dagli ampi giardini attrezzati alle sale ricavate dalle antiche stalle, ogni angolo di Posta Bassi racconta una storia di passione.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[2rem] aspect-square cursor-pointer shadow-xl transition-all hover:shadow-2xl">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Rimosso overlay testuale su richiesta utente */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/DSC02672.jpg" alt="Outdoor area" className="w-full h-full object-cover brightness-[0.4]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-8">
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">Pronti a vivere un'esperienza autentica?</h2>
          <p className="text-xl opacity-90 font-light max-w-2xl mx-auto leading-relaxed">Ti aspettiamo per cena o per un weekend indimenticabile nella nostra masseria. Parcheggio privato e parco giochi sempre disponibili.</p>
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
