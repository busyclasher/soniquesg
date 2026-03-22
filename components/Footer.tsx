import React from 'react';
import { Instagram, Layers, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/sonique-logo.png';

const WA_URL = 'https://wa.me/6591234567?text=Hi%2C%20I%27m%20interested%20in%20enquiring%20about%20music%20lessons%20at%20Sonique%20Studio!';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Why Sonique', id: 'features' },
    { label: 'Our Classes', id: 'lessons' },
    { label: 'Our Philosophy', id: 'philosophy' },
    { label: 'Meet the Team', id: 'team' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-sonique-dark text-white">

      {/* Main footer body */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1 — Brand */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="Sonique Studio SG"
              className="h-16 w-16 object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A network of home-based music studios empowering students of all ages to learn music in a fun and accessible way across Singapore.
            </p>
            <div className="flex gap-4 pt-2">
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
                href="#"
                aria-label="Carousel"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:border-sonique-gold hover:text-sonique-gold transition-colors"
              >
                <Layers className="w-4 h-4" />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 — Site links */}
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

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-sonique-gold transition-colors"
                  >
                    +65 9123 4567
                  </a>
                  <p className="text-xs text-gray-600 mt-0.5">Mon – Sun, 9am – 9pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:isaac2lookj@gmail.com"
                  className="text-sm text-gray-400 hover:text-sonique-gold transition-colors break-all"
                >
                  isaac2lookj@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  Home-Based Studios Islandwide<br />
                  <span className="text-xs text-gray-600">Tampines · Jurong · Bishan</span>
                </p>
              </li>
            </ul>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-sonique-gold text-sonique-dark font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Book a Free Trial
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
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
