import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Lessons from './components/Lessons';
import Philosophy from './components/Philosophy';
import Team from './components/Team';
import Footer from './components/Footer';
import AIPlannerModal from './components/AIPlannerModal';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [plannerInstrument, setPlannerInstrument] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const togglePlanner = (instrument?: string) => {
    if (typeof instrument === 'string') {
        setPlannerInstrument(instrument);
        setIsPlannerOpen(true);
    } else {
        if (isPlannerOpen) {
            setPlannerInstrument(undefined); 
        }
        setIsPlannerOpen(!isPlannerOpen);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'lessons', 'philosophy', 'team', 'testimonials', 'contact'];
      
      // Calculate center of viewport
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'lessons', label: 'Lessons' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'team', label: 'Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body antialiased relative">
      <header className="fixed w-full z-50 transition-all duration-300 bg-sonique-dark/95 backdrop-blur-md shadow-lg border-b border-white/5">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div 
                className="text-xl md:text-2xl font-header text-white tracking-widest uppercase cursor-pointer hover:text-sonique-gold transition-colors"
                onClick={() => scrollToSection('home')}
              >
                  Sonique Studio
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-8">
                <nav className="flex items-center gap-6">
                  {navItems.map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-sonique-gold relative group ${
                        activeSection === item.id ? 'text-sonique-gold' : 'text-gray-300'
                      }`}
                    >
                      {item.label}
                      <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-sonique-gold transform transition-transform duration-300 origin-left ${
                        activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                    </button>
                  ))}
                </nav>

                <button 
                  onClick={() => togglePlanner()}
                  className="text-xs bg-sonique-gold text-sonique-dark border border-sonique-gold px-6 py-2.5 hover:bg-white hover:border-white transition-all uppercase font-bold tracking-wider shadow-[0_0_15px_rgba(195,166,101,0.3)]"
                >
                    Free Trial
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center gap-4">
                 <button 
                  onClick={() => togglePlanner()}
                  className="text-xs bg-sonique-gold text-sonique-dark border border-sonique-gold px-3 py-2 font-bold uppercase tracking-wider"
                >
                    Trial
                </button>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white hover:text-sonique-gold transition-colors"
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
          </div>

          {/* Mobile Nav Dropdown */}
          <div className={`lg:hidden bg-sonique-dark border-t border-gray-800 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
             <nav className="flex flex-col p-6 gap-4">
                {navItems.map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left text-sm uppercase tracking-widest font-bold py-2 border-b border-gray-800 ${
                        activeSection === item.id ? 'text-sonique-gold' : 'text-gray-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
             </nav>
          </div>
      </header>

      <main className="flex-grow">
        <div id="home">
          <Hero onOpenPlanner={() => togglePlanner()} />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="lessons">
          <Lessons onOpenPlanner={togglePlanner} />
        </div>
        <div id="philosophy">
          <Philosophy />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
      
      {/* AI Modal */}
      <AIPlannerModal 
        isOpen={isPlannerOpen} 
        onClose={() => setIsPlannerOpen(false)} 
        initialInstrument={plannerInstrument}
      />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/6591234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_6px_16px_rgba(37,211,102,0.4)] transition-all duration-300 group flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>
    </div>
  );
};

export default App;