import React from 'react';
import philosophyPhoto from '../assets/pianobts.jpg';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-sonique-dark text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sonique-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Mission */}
        <div>
          <h2 className="text-4xl md:text-5xl text-sonique-gold mb-8 uppercase">Our Mission</h2>
          <p className="text-2xl font-light leading-snug mb-12 border-l-4 border-sonique-gold pl-6">
            To make learning music <span className="font-bold text-white">fun</span> and <span className="font-bold text-white">accessible</span> in every corner of Singapore.
          </p>

          <img 
            src={philosophyPhoto}
            alt="Piano mentoring session"
            className="rounded-lg shadow-2xl opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Right Column: Philosophy */}
        <div className="space-y-8">
            <div>
                 <h2 className="text-3xl md:text-4xl text-white mb-6 uppercase">Our Teaching Philosophy</h2>
                 <p className="text-lg italic text-sonique-gold mb-6">
                    “How can our students enjoy learning music and grow at the same time?” 
                </p>
                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                    <p>
                        This question is at the core of Sonique Studio’s teaching philosophy.
                    </p>
                    <p>
                        Our founder, <strong className="text-white">Isaac Loo</strong>, found himself dreading learning the guitar during his younger days, complaining that it was “just noise”. However, that dread turned into a passion for the guitar ever since discovering metal music. 
                    </p>
                    <p>
                        It was through this passion that he reopened himself to appreciate music holistically. What began as a desire to play the songs he liked led him to build confidence, win music awards, and be accepted into his <strong className="text-white">Direct-School Admissions</strong> program.
                    </p>
                    <p>
                        It was through this experience that he realised fun and growth are not mutually exclusive. Regardless of age, we learn best when we see intrinsic meaning in our learning - leading to motivation and natural progress.
                    </p>
                    <div className="bg-white/5 p-6 rounded-r-lg border-l-2 border-sonique-gold">
                        <p className="font-medium text-white">
                            Be it classical or contemporary, it is thus the philosophy of Sonique Studio to empower learners to grow while having fun learning music.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
