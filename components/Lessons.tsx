import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LESSON_TYPES } from '../constants';

interface LessonsProps {
  onOpenPlanner: (instrument?: string) => void;
}

const Lessons: React.FC<LessonsProps> = ({ onOpenPlanner }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-sonique-dark mb-4 uppercase">
            Our <span className="text-sonique-gold">Classes</span>
          </h2>
          <div className="w-24 h-1 bg-sonique-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your instrument and begin your journey. Whether you are a beginner or looking to grade, we have a path for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LESSON_TYPES.map((lesson) => (
            <div 
              key={lesson.id} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={lesson.image} 
                  alt={lesson.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sonique-dark uppercase tracking-wider shadow-sm opacity-90">
                    Open for Intake
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-header text-sonique-dark mb-3 uppercase tracking-wide group-hover:text-sonique-gold transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                  {lesson.description}
                </p>
                
                <button 
                  onClick={() => onOpenPlanner(lesson.instrumentValue)}
                  className="w-full py-3.5 bg-sonique-gold text-sonique-dark font-bold uppercase text-xs tracking-widest hover:bg-sonique-dark hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg rounded-sm transform group-hover:translate-y-0"
                >
                  Book Free Trial 
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lessons;