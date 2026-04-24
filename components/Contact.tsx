import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { waMeLink, WHATSAPP_INQUIRY_MESSAGE, WHATSAPP_NUMBERS } from '../whatsapp';

const WA_PRIMARY = waMeLink(WHATSAPP_NUMBERS.primary, WHATSAPP_INQUIRY_MESSAGE);

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-sonique-dark mb-4 uppercase">
            Get In <span className="text-sonique-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-sonique-gold mx-auto mb-8"></div>
          <h3 className="text-2xl md:text-3xl font-header text-sonique-dark mb-4">Find the Right Fit</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-2">
            Share with us your music goals for you or your child. We’ll recommend a suitable teacher to get you started!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-sonique-dark rounded-xl p-10 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-xl mb-8">
                <MessageCircle className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-3xl font-header text-white uppercase mb-4">Chat on WhatsApp</h3>
              <p className="text-gray-400 leading-relaxed mb-3">
                The fastest way to reach us. We’ll get back to you as soon as we can.
              </p>
            </div>
            <a
              href={WA_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-full py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold uppercase text-sm tracking-widest flex items-center justify-center gap-3 transition-colors duration-200 rounded-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Send a message
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100 overflow-hidden">
            <div className="flex items-start gap-5 p-8">
              <div className="flex-shrink-0 p-3 bg-sonique-dark/5 rounded-full">
                <Phone className="w-5 h-5 text-sonique-dark" />
              </div>
              <div>
                <h4 className="font-bold text-sonique-dark mb-1">WhatsApp / Mobile</h4>
                <a
                  href={WA_PRIMARY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sonique-gold transition-colors"
                >
                  +65 8775 9250
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 p-8">
              <div className="flex-shrink-0 p-3 bg-sonique-dark/5 rounded-full">
                <Mail className="w-5 h-5 text-sonique-dark" />
              </div>
              <div>
                <h4 className="font-bold text-sonique-dark mb-1">Email</h4>
                <a
                  href="mailto:soniquestudiosg@gmail.com"
                  className="text-gray-600 hover:text-sonique-gold transition-colors break-all"
                >
                  soniquestudiosg@gmail.com
                </a>
                <p className="text-xs text-gray-400 mt-1">We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-8">
              <div className="flex-shrink-0 p-3 bg-sonique-dark/5 rounded-full">
                <MapPin className="w-5 h-5 text-sonique-dark" />
              </div>
              <div>
                <h4 className="font-bold text-sonique-dark mb-1">Locations</h4>
                <p className="text-gray-600">Network of Home-Based Studios</p>
                <p className="text-xs text-gray-400 mt-1">Islandwide — Novena, Katong, Farrer Park &amp; more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
