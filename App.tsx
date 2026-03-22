import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from './assets/sonique-logo.png';
import Hero from './components/Hero';
import Features from './components/Features';
import Lessons from './components/Lessons';
import Philosophy from './components/Philosophy';
import Team from './components/Team';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

interface DropdownItem {
  label: string;
  sectionId: string;
}

interface NavItem {
  id: string;
  label: string;
  dropdown?: DropdownItem[];
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const WA_URL = 'https://wa.me/6591234567?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20trial%20lesson!';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setMobileExpandedItem(null);
    }
  };

  const handleDropdownEnter = (id: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setOpenDropdown(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isNavItemActive = (item: NavItem) => {
    if (item.dropdown) {
      return item.dropdown.some(d => d.sectionId === activeSection);
    }
    return activeSection === item.id;
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowScrollTop(y > 500);

      const sections = ['home', 'features', 'lessons', 'philosophy', 'team', 'testimonials', 'contact'];
      const scrollPosition = y + window.innerHeight / 3;

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

  useEffect(() => {
    const els = document.querySelectorAll<Element>('.reveal');

    // Fallback: ensure nothing stays invisible if the observer misfires
    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add('visible'));
    }, 800);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    {
      id: 'lessons',
      label: 'Lessons',
      dropdown: [
        { label: 'Acoustic Guitar', sectionId: 'lessons' },
        { label: 'Electric Guitar', sectionId: 'lessons' },
        { label: 'Piano & Keyboard', sectionId: 'lessons' },
        { label: 'Violin', sectionId: 'lessons' },
      ],
    },
    {
      id: 'about',
      label: 'About',
      dropdown: [
        { label: 'Our Philosophy', sectionId: 'philosophy' },
        { label: 'Meet the Team', sectionId: 'team' },
      ],
    },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body antialiased relative">
      <header className="fixed w-full z-50 bg-sonique-dark shadow-lg border-b border-white/5">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div 
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => scrollToSection('home')}
                aria-label="Sonique Studio"
              >
                  <img 
                    src={logo} 
                    alt="Sonique Studio logo" 
                    className="h-12 w-12 md:h-16 md:w-16 object-contain"
                  />
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-8">
                <nav className="flex items-center gap-6">
                  {navItems.map((item) => (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => item.dropdown ? handleDropdownEnter(item.id) : undefined}
                      onMouseLeave={() => item.dropdown ? handleDropdownLeave() : undefined}
                    >
                      <button
                        onClick={() => item.dropdown ? handleDropdownEnter(item.id) : scrollToSection(item.id)}
                        className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-sonique-gold relative group flex items-center gap-1 ${
                          isNavItemActive(item) ? 'text-sonique-gold' : 'text-gray-300'
                        }`}
                      >
                        {item.label}
                        {item.dropdown && (
                          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                        )}
                        <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-sonique-gold transform transition-transform duration-300 origin-left ${
                          isNavItemActive(item) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}></span>
                      </button>

                      {/* Dropdown Panel */}
                      {item.dropdown && (
                        <div
                          className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 z-50 ${
                            openDropdown === item.id ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                          }`}
                        >
                          {/* Small arrow */}
                          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-sonique-dark border-l border-t border-white/10 rotate-45 z-10"></div>
                          <div className="bg-sonique-dark border border-white/10 shadow-2xl min-w-[200px] overflow-hidden">
                            {item.dropdown.map((child) => (
                              <button
                                key={child.label}
                                onClick={() => { scrollToSection(child.sectionId); setOpenDropdown(null); }}
                                className="w-full text-left px-5 py-3 text-xs uppercase tracking-widest text-gray-300 hover:text-sonique-gold hover:bg-white/5 transition-colors font-bold flex items-center gap-2 border-b border-white/5 last:border-0"
                              >
                                <ChevronRight className="w-3 h-3 text-sonique-gold opacity-60" />
                                {child.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-sonique-gold text-sonique-dark border border-sonique-gold px-6 py-2.5 hover:bg-white hover:border-white transition-all uppercase font-bold tracking-wider shadow-[0_0_15px_rgba(195,166,101,0.3)]"
                >
                  Free Trial
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center gap-4">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-sonique-gold text-sonique-dark border border-sonique-gold px-3 py-2 font-bold uppercase tracking-wider"
                >
                  Trial
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white hover:text-sonique-gold transition-colors"
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
          </div>

          {/* Mobile Nav Dropdown */}
          <div className={`lg:hidden bg-sonique-dark border-t border-gray-800 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
             <nav className="flex flex-col p-6 gap-1">
                {navItems.map((item) => (
                  <div key={item.id}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setMobileExpandedItem(mobileExpandedItem === item.id ? null : item.id)}
                          className={`text-left text-sm uppercase tracking-widest font-bold py-3 border-b border-gray-800 flex justify-between items-center w-full transition-colors ${
                            isNavItemActive(item) ? 'text-sonique-gold' : 'text-gray-300'
                          }`}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedItem === item.id ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-200 ${mobileExpandedItem === item.id ? 'max-h-60' : 'max-h-0'}`}>
                          {item.dropdown.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => { scrollToSection(child.sectionId); setMobileMenuOpen(false); setMobileExpandedItem(null); }}
                              className="text-left text-xs uppercase tracking-widest text-gray-400 hover:text-sonique-gold py-2.5 pl-5 border-b border-gray-800/40 w-full flex items-center gap-2 transition-colors"
                            >
                              <ChevronRight className="w-3 h-3 text-sonique-gold opacity-50" />
                              {child.label}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left text-sm uppercase tracking-widest font-bold py-3 border-b border-gray-800 w-full transition-colors ${
                          activeSection === item.id ? 'text-sonique-gold' : 'text-gray-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
             </nav>
          </div>
      </header>

      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        <div id="features" className="reveal">
          <Features />
        </div>
        <div id="lessons" className="reveal">
          <Lessons />
        </div>
        <div id="philosophy" className="reveal">
          <Philosophy />
        </div>
        <div id="team" className="reveal">
          <Team />
        </div>
        <div id="testimonials" className="reveal">
          <Testimonials />
        </div>
        <div id="contact" className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
      
      {/* Scroll-to-top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-28 right-8 z-40 bg-sonique-dark/80 border border-sonique-gold/40 text-sonique-gold p-3 rounded-full shadow-lg hover:bg-sonique-gold hover:text-sonique-dark transition-all duration-300 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

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
