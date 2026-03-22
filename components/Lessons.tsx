import React from 'react';
import { Sparkles, Tag, ArrowRight } from 'lucide-react';
import { LESSON_TYPES } from '../constants';

const WA_URL = 'https://wa.me/6591234567?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20trial%20lesson!';

const Lessons: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl text-sonique-dark mb-4 uppercase">
              Our <span className="text-sonique-gold">Classes</span>
            </h2>
            <div className="w-24 h-1 bg-sonique-gold mb-6"></div>
            <p className="text-gray-600 max-w-xl">
              Choose your instrument and begin your journey. Whether you are a beginner or looking to grade, we have a path for you.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sonique-gold text-sonique-dark font-bold uppercase text-xs tracking-widest hover:bg-sonique-dark hover:text-white transition-all duration-300 shadow-lg"
            >
              Book a Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LESSON_TYPES.map((lesson) => (
            <div 
              key={lesson.id} 
              className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${lesson.popular ? 'border-2 border-sonique-gold' : 'border border-gray-100'}`}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={lesson.image} 
                  alt={lesson.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                
                {/* Most Popular badge */}
                {lesson.popular && (
                  <div className="absolute top-4 left-4 bg-sonique-gold text-sonique-dark px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                {/* Open for Intake badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sonique-dark uppercase tracking-wider shadow-sm opacity-90">
                    Open for Intake
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-header text-sonique-dark mb-2 uppercase tracking-wide">
                  {lesson.title}
                </h3>

                {/* Price anchor */}
                <div className="flex items-center gap-1.5 mb-3">
                  <Tag className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs font-semibold text-gray-500">{lesson.price}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {lesson.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lessons;