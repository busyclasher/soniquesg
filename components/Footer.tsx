import React from 'react';
import { Music4, Instagram, Facebook, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sonique-dark text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex items-center gap-4">
          <div className="p-2 border border-sonique-gold rounded-full">
            <Music4 className="w-6 h-6 text-sonique-gold" />
          </div>
          <span className="text-2xl font-header tracking-widest uppercase">Sonique Studio SG</span>
        </div>

        <div className="text-gray-400 text-sm text-center md:text-right">
          <p className="mb-2">Network of Home-Based Studios, Singapore</p>
          <p className="flex items-center justify-center md:justify-end gap-2 hover:text-sonique-gold transition-colors cursor-pointer">
            <Phone className="w-4 h-4" /> +65 9123 4567
          </p>
        </div>

        <div className="flex gap-6">
            <a href="#" className="hover:text-sonique-gold transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-sonique-gold transition-colors"><Facebook className="w-6 h-6" /></a>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-800 text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} Sonique Studio SG. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;