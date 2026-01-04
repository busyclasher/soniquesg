import React from 'react';
import { TEACHERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-sonique-dark mb-4 uppercase">
            Meet The <span className="text-sonique-gold">Team</span>
          </h2>
          <div className="w-24 h-1 bg-sonique-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our network of qualified teachers spans across Singapore. From Trinity Rock & Pop experts to ABRSM Diploma holders, we match you with the perfect mentor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {TEACHERS.map((teacher, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="h-96 overflow-hidden relative">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sonique-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>
              
              <div className="p-8 text-center relative flex-grow flex flex-col justify-center bg-white transform -translate-y-4 mx-4 rounded-lg shadow-sm border border-gray-100 group-hover:-translate-y-8 transition-transform duration-300">
                <h3 className="text-2xl font-bold font-header text-sonique-dark mb-2">{teacher.name}</h3>
                <p className="text-sonique-gold font-bold uppercase text-xs tracking-widest mb-4">{teacher.role}</p>
                <div className="w-8 h-0.5 bg-gray-200 mx-auto mb-4"></div>
                <p className="text-sm text-gray-500 font-medium italic">{teacher.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;