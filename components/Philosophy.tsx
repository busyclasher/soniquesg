import React from 'react';
import philosophyPhoto from '../assets/pianobts.jpg';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-sonique-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sonique-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl text-sonique-gold mb-6 uppercase">Our Mission</h2>
          <p className="text-2xl font-light leading-snug mb-10 border-l-4 border-sonique-gold pl-6">
            Grow young learners into confident musicians
          </p>

          <img
            src={philosophyPhoto}
            alt="Piano mentoring session"
            className="rounded-lg shadow-2xl w-full"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl text-white mb-6 uppercase">Our Teaching Philosophy</h2>
            <p className="text-lg italic text-sonique-gold mb-6">
              “How can our students enjoy learning music and grow at the same time?”
            </p>
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                Some children spend years learning an instrument, yet don’t continue with it later in life as the
                experience never truly connected with them.
              </p>
              <p>
                This often happens when learning feels irrelevant to what the learner actually enjoys.
              </p>
              <p>
                Our founder, <strong className="text-white">Isaac</strong>, experienced this firsthand. Losing interest
                early on, before rediscovering music through the songs he wanted to play. What began as a desire to
                play the songs he enjoyed gradually grew into a deeper appreciation for music, building his confidence
                and shaping his growth beyond the instrument.
              </p>
              <p>
                At Sonique, we carry this belief forward. When learners connect with what they play, they stay engaged,
                and meaningful progress follows. Over time, this not only develops their musical ability, but
                character as well.
              </p>
              <div className="bg-white/5 p-6 rounded-r-lg border-l-2 border-sonique-gold">
                <p className="font-medium text-white">
                  Be it classical or contemporary, it is thus the philosophy of Sonique Studio to empower learners to
                  grow while having fun learning music.
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
