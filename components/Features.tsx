import React from 'react';
import { FEATURES } from '../constants';

const NUMBERS = ['01', '02', '03', '04'];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-sonique-dark mb-4 uppercase">
            Why <span className="text-sonique-gold">Sonique?</span>
          </h2>
          <div className="w-24 h-1 bg-sonique-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The right setup at every stage — we guide you in choosing the right instrument so you don’t have to worry about buying the wrong one. Enjoy maintenance services and exclusive discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-6 p-10 bg-white hover:bg-gray-50 transition-colors duration-200 overflow-hidden
                ${index % 2 === 0 ? 'md:border-r border-gray-100' : ''}
                ${index < 2 ? 'border-b border-gray-100' : ''}
              `}
            >
              {/* Faint number watermark */}
              <span className="absolute -top-3 right-4 text-8xl font-bold text-gray-100 select-none pointer-events-none leading-none">
                {NUMBERS[index]}
              </span>

              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 bg-sonique-dark rounded-lg flex items-center justify-center z-10">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="z-10">
                <h3 className="text-lg font-bold text-sonique-dark mb-1 uppercase tracking-wide">
                  {feature.title}
                </h3>
                {feature.tagline && (
                  <p className="text-sm font-semibold text-sonique-gold mb-2">{feature.tagline}</p>
                )}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
