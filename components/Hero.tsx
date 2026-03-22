import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import heroOne from '../assets/guitar.jpg';
import heroTwo from '../assets/piano-lesson.jpg';
import heroThree from '../assets/violin.jpg';
import heroFour from '../assets/jamming-sesh.jpg';

const HERO_IMAGES = [heroOne, heroTwo, heroThree, heroFour];
const SLIDE_DURATION = 6000;
const WA_URL = 'https://wa.me/6591234567?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20trial%20lesson!';

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Bump this key every time the slide changes to restart the CSS progress animation
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setProgressKey((k) => k + 1);
  };

  const scrollToLessons = () => {
    document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-sonique-dark text-white">
      {/* Background Photos with Overlay */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-40' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-sonique-dark/90 via-sonique-dark/60 to-sonique-dark"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sonique-gold to-yellow-200 tracking-wide uppercase opacity-0 animate-fade-in-up">
          Sonique Studio
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed opacity-0 animate-fade-in-up delay-500">
          We are a network of home-based studios empowering you or your child to learn music in a <span className="text-sonique-gold font-semibold">fun</span> and <span className="text-sonique-gold font-semibold">accessible</span> manner.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-700">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-sonique-gold text-sonique-dark font-bold text-lg rounded-none uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(195,166,101,0.3)] flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Book a Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={scrollToLessons}
            className="group px-8 py-4 border border-white/30 text-white font-bold text-lg uppercase tracking-widest hover:border-sonique-gold hover:text-sonique-gold transition-all duration-300 flex items-center gap-2"
          >
            See Our Classes
            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Progress Bar Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative h-1 rounded-full overflow-hidden cursor-pointer transition-all duration-300"
            style={{ width: index === activeIndex ? '52px' : '20px', background: 'rgba(255,255,255,0.2)' }}
          >
            {index === activeIndex && (
              <span
                key={progressKey}
                className="progress-bar-fill absolute inset-y-0 left-0 bg-sonique-gold rounded-full"
              />
            )}
          </button>
        ))}
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sonique-dark to-transparent"></div>
    </div>
  );
};

export default Hero;
/*  */
