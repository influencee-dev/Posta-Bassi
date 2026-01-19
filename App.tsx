
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contacts } from './pages/Contacts';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-brand/10 selection:text-brand dark:selection:bg-brand/30">
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={() => setIsBookingOpen(true)} />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contatti" element={<Contacts onOpenBooking={() => setIsBookingOpen(true)} />} />
          </Routes>
        </main>

        <Footer />
        
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
        />

        {/* Floating Action Button for Mobile */}
        <button
          onClick={() => setIsBookingOpen(true)}
          className="md:hidden fixed bottom-6 right-6 z-40 bg-brand text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </Router>
  );
};

export default App;
