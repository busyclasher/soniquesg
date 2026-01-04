import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-sonique-dark mb-4 uppercase">
            Why <span className="text-sonique-gold">Sonique?</span>
          </h2>
          <div className="w-24 h-1 bg-sonique-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 border border-gray-100 bg-gray-50 hover:bg-sonique-dark hover:text-white transition-all duration-300 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-default"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide group-hover:text-sonique-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;