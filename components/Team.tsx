import React from 'react';
import { MapPin } from 'lucide-react';
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
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
            Our network of qualified teachers spans across Singapore. From Trinity Rock & Pop to classical paths, we
            match you with the perfect mentor.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            Our teachers run their own dedicated home studios to create a safe and conducive learning environment. They
            guide learners with patience and clarity so that learning stays engaging and at a comfortable pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {TEACHERS.map((teacher, index) => {
            const isJoseph = teacher.name === 'Joseph Law';
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                <div className="h-96 overflow-hidden relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className={`w-full h-full object-cover ${isJoseph ? 'object-top brightness-125 contrast-110' : 'object-center'}`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-sonique-dark/80 via-transparent to-transparent ${isJoseph ? 'opacity-30' : 'opacity-50'}`}
                  ></div>
                </div>

                <div className="p-8 text-center relative flex-grow flex flex-col justify-center bg-white transform -translate-y-4 mx-4 rounded-lg shadow-sm border border-gray-100 transition-shadow duration-300">
                  <h3 className="text-2xl font-bold font-header text-sonique-dark mb-2">{teacher.name}</h3>
                  <p className="text-gray-500 font-semibold text-sm mb-4">{teacher.role}</p>
                  <div className="w-8 h-0.5 bg-gray-200 mx-auto mb-4"></div>
                  <div className="space-y-2 mb-4">
                    {teacher.credentials.map((line) => (
                      <p key={line} className="text-sm text-gray-500 font-medium">
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-sonique-gold font-semibold flex items-center justify-center gap-1.5">
                    <MapPin className="w-4 h-4 shrink-0" aria-hidden />
                    <span>{teacher.location}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
