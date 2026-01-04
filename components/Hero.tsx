import React from 'react';
import { ArrowRight, Music4 } from 'lucide-react';

interface HeroProps {
  onOpenPlanner: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPlanner }) => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-sonique-dark text-white">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/7576409/7576409-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-sonique-dark/90 via-sonique-dark/60 to-sonique-dark"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-6 flex justify-center opacity-0 animate-fade-in-up">
          <div className="p-3 border-2 border-sonique-gold rounded-full">
            <Music4 className="w-12 h-12 text-sonique-gold" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sonique-gold to-yellow-200 tracking-wide uppercase opacity-0 animate-fade-in-up delay-200">
          Sonique Studio
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed opacity-0 animate-fade-in-up delay-500">
          We are a network of home-based studios empowering you or your child to learn music in a <span className="text-sonique-gold font-semibold">fun</span> and <span className="text-sonique-gold font-semibold">accessible</span> manner.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-700">
          <button 
            onClick={onOpenPlanner}
            className="group relative px-8 py-4 bg-sonique-gold text-sonique-dark font-bold text-lg rounded-none uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(195,166,101,0.3)]"
          >
            <span className="flex items-center gap-2">
              Get Free Trial & Plan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sonique-dark to-transparent"></div>
    </div>
  );
};

export default Hero;