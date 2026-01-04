import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Touch state for swipe detection
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Min swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  const getShareUrl = (platform: string, text: string) => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://soniquestudio.sg';
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(currentUrl);

    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
      case 'linkedin':
        return `https://www.linkedin.com/feed/?shareActive=true&text=${encodedText} ${encodedUrl}`;
      default:
        return '#';
    }
  };

  return (
    <section className="py-24 bg-sonique-dark text-white relative" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl mb-4 uppercase text-white">
            What Our <span className="text-sonique-gold">Community</span> Says
          </h2>
          <div className="w-24 h-1 bg-sonique-gold mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div 
            className="max-w-4xl mx-auto relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            role="region"
            aria-roledescription="carousel"
            aria-label="Student testimonials"
        >
            {/* Main Slide Display */}
            <div className="overflow-hidden relative min-h-[400px] flex items-center">
                <div 
                    className="w-full flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {TESTIMONIALS.map((t, index) => (
                        <div 
                            key={index}
                            className="w-full flex-shrink-0 px-4 md:px-12 select-none"
                            role="group" 
                            aria-roledescription="slide"
                            aria-label={`${index + 1} of ${TESTIMONIALS.length}`}
                        >
                             <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-xl relative flex flex-col items-center text-center transform transition-all hover:bg-white/10 hover:shadow-2xl h-full">
                                <Quote className="w-10 h-10 text-sonique-gold mb-6 opacity-40" />
                                
                                <p className="text-lg md:text-2xl text-gray-200 italic leading-relaxed font-light mb-10">
                                  "{t.quote}"
                                </p>

                                {/* Footer: User Info & Share Buttons */}
                                <div className="w-full mt-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <img 
                                        src={t.image} 
                                        alt=""
                                        aria-hidden="true"
                                        className="w-12 h-12 rounded-full object-cover border-2 border-sonique-gold shadow-md"
                                        loading="lazy"
                                        />
                                        <div className="text-left">
                                        <h4 className="font-bold text-sonique-gold font-header tracking-wide text-lg leading-none mb-1">{t.name}</h4>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider">{t.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold hidden sm:block">Share Story</span>
                                        <div className="flex gap-2">
                                            <a 
                                                href={getShareUrl('twitter', `"${t.quote}" - ${t.name}`)} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/5 rounded-full hover:bg-sonique-gold hover:text-sonique-dark transition-all text-gray-400"
                                                aria-label="Share on Twitter"
                                            >
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                            <a 
                                                href={getShareUrl('facebook', `"${t.quote}" - ${t.name}`)} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/5 rounded-full hover:bg-sonique-gold hover:text-sonique-dark transition-all text-gray-400"
                                                aria-label="Share on Facebook"
                                            >
                                                <Facebook className="w-4 h-4" />
                                            </a>
                                            <a 
                                                href={getShareUrl('linkedin', `"${t.quote}" - ${t.name}`)} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/5 rounded-full hover:bg-sonique-gold hover:text-sonique-dark transition-all text-gray-400"
                                                aria-label="Share on LinkedIn"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button 
                onClick={handlePrev}
                className="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 p-3 bg-white/10 hover:bg-sonique-gold hover:text-sonique-dark rounded-full transition-all text-white focus:outline-none focus:ring-2 focus:ring-sonique-gold z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={handleNext}
                className="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 p-3 bg-white/10 hover:bg-sonique-gold hover:text-sonique-dark rounded-full transition-all text-white focus:outline-none focus:ring-2 focus:ring-sonique-gold z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-8">
                {TESTIMONIALS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-sonique-gold' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        aria-current={index === activeIndex}
                    />
                ))}
            </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;