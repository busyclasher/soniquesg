import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  return (
    <section className="py-24 bg-sonique-dark text-white relative" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl mb-3 uppercase text-white">
            What our <span className="text-sonique-gold">Community</span> Says
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-light mb-2">Hear from parents and learners!</p>
          <p className="text-sm text-gray-400 font-light tracking-wide">Taken from Google and Carousell</p>
          <div className="w-24 h-1 bg-sonique-gold mx-auto mt-6"></div>
        </div>

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
                    <Quote className="w-10 h-10 text-white mb-4 opacity-20" />

                    <div className="flex items-center gap-0.5 mb-6" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-sonique-gold fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-lg md:text-2xl text-gray-200 italic leading-relaxed font-light mb-10">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="w-full mt-auto pt-8 border-t border-white/10 text-center">
                      <h4 className="font-bold text-white font-header text-lg leading-none mb-1">{t.name}</h4>
                      {t.role ? <p className="text-xs text-gray-400">{t.role}</p> : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;
