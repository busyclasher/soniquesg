import React from 'react';
import { Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/sonique-logo.png';
import { waMeLink, WHATSAPP_INQUIRY_MESSAGE, WHATSAPP_NUMBERS } from '../whatsapp';

const waPrimary = waMeLink(WHATSAPP_NUMBERS.primary, WHATSAPP_INQUIRY_MESSAGE);

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Why Sonique', id: 'features' },
    { label: 'Our Classes', id: 'lessons' },
    { label: 'Meet the Team', id: 'team' },
    { label: 'Our Philosophy', id: 'philosophy' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-sonique-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <img src={logo} alt="Sonique Studio SG" className="h-16 w-16 object-contain" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A network of home-based music studios empowering students of all ages to learn music in a fun and
              accessible way across Singapore.
            </p>
            <a
              href="https://www.carousell.sg/u/soniquestudio.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm text-gray-300 hover:text-sonique-gold transition-colors"
            >
              Carousell: soniquestudio.sg
            </a>
            <div className="flex gap-4 pt-2 items-center">
              <a
                href="https://www.instagram.com/soniquestudio.sg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:border-sonique-gold hover:text-sonique-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.carousell.sg/u/soniquestudio.sg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sonique Studio on Carousell"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:border-sonique-gold hover:text-sonique-gold transition-colors overflow-hidden bg-white/5"
              >
                <img
                  src="https://www.carousell.sg/favicon.ico"
                  alt=""
                  className="w-5 h-5"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href={waPrimary}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-gray-400 hover:text-sonique-gold transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Contact Us</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <a
                  href={waPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-sonique-gold transition-colors"
                >
                  +65 9822 8518
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:soniquestudiosg@gmail.com"
                  className="text-sm text-gray-400 hover:text-sonique-gold transition-colors break-all"
                >
                  soniquestudiosg@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  Home-Based studios islandwide
                  <br />
                  <span className="text-xs text-gray-600">Novena · Katong · Farrer Park and more</span>
                </p>
              </div>
              <a
                href={waPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-sonique-gold text-sonique-gold font-bold text-xs uppercase tracking-widest hover:bg-sonique-gold hover:text-sonique-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Book a trial
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>&copy; {new Date().getFullYear()} Sonique Studio SG. All rights reserved.</span>
          <span className="font-header tracking-widest uppercase text-gray-700">Sonique Studio SG</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
