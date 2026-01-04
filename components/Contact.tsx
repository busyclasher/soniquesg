import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle, Check, MessageCircle, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Validation Logic
  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length < 2) error = 'Name must be at least 2 characters.';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Please enter a valid email address.';
        break;
      case 'message':
        if (value.length < 10) error = 'Message must be at least 10 characters.';
        break;
    }
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const error = validateField(id, value);
    setErrors(prev => ({ ...prev, [id]: error }));
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Real-time validation if field has been touched
    if (touched[id as keyof typeof touched]) {
      const error = validateField(id, value);
      setErrors(prev => ({ ...prev, [id]: error }));
    }
  };

  const isFormValid = !errors.name && !errors.email && !errors.message && 
                      formData.name && formData.email && formData.message;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus('submitting');
    
    // --- INTEGRATION NOTE ---
    // To connect this to Google Sheets/Email:
    // 1. Create a Google Form or use Google Apps Script to create a web app endpoint.
    // 2. Use fetch() to POST the formData to that endpoint here.
    // 3. Alternatively, use a service like Formspree or EmailJS.
    // Example: 
    // await fetch('YOUR_GOOGLE_SCRIPT_URL', { method: 'POST', body: new FormData(e.target) });
    
    // Simulating network delay for demo
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
  };

  const handleReset = () => {
    setStatus('idle');
  };

  // Helper to render input class based on state
  const getInputClass = (field: keyof typeof formData) => {
    const baseClass = "w-full p-4 bg-gray-50 border rounded outline-none transition pr-10";
    if (touched[field] && errors[field]) {
      return `${baseClass} border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50`;
    }
    if (touched[field] && !errors[field] && formData[field]) {
      return `${baseClass} border-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-green-50`;
    }
    return `${baseClass} border-gray-200 focus:border-sonique-gold focus:ring-1 focus:ring-sonique-gold`;
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-sonique-dark mb-4 uppercase">
            Contact <span className="text-sonique-gold">Us</span>
          </h2>
          <div className="w-24 h-1 bg-sonique-gold mx-auto"></div>
          
          {/* WhatsApp Banner */}
          <div className="mt-8 max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-center gap-3 shadow-sm animate-pulse">
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
            <p className="text-green-800 font-bold text-sm md:text-base">
                For the fastest replies, reach out to us via <a href="https://wa.me/6591234567" target="_blank" rel="noreferrer" className="underline hover:text-green-600">WhatsApp</a>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-sonique-gold h-full">
              <h3 className="text-2xl font-header mb-8 text-sonique-dark">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-sonique-dark/5 rounded-full text-sonique-gold flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sonique-dark text-lg">WhatsApp / Mobile</h4>
                    <p className="text-gray-600 mt-1">+65 9123 4567</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Sun, 9am - 9pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-sonique-dark/5 rounded-full text-sonique-gold flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sonique-dark text-lg">Email</h4>
                    <p className="text-gray-600 mt-1">isaac2lookj@gmail.com</p>
                    <p className="text-sm text-gray-400 mt-1">We typically reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-sonique-dark/5 rounded-full text-sonique-gold flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sonique-dark text-lg">Locations</h4>
                    <p className="text-gray-600 mt-1">Network of Home-Based Studios</p>
                    <p className="text-sm text-gray-400 mt-1">Islandwide locations in Singapore including Tampines, Jurong, and Bishan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-sonique-dark/5 rounded-full text-sonique-gold flex-shrink-0">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sonique-dark text-lg">Frequently Asked Questions</h4>
                    <p className="text-gray-600 mt-1 mb-3">
                        Have questions about fees, trial lessons, or instruments?
                    </p>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); alert("FAQ page coming soon!"); }} 
                      className="inline-flex items-center gap-2 px-5 py-2 bg-gray-100 text-sonique-dark font-bold text-xs uppercase tracking-widest rounded hover:bg-sonique-gold hover:text-white transition-all duration-300 group"
                    >
                        Visit FAQ Page
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="bg-white p-8 rounded-lg shadow-lg relative min-h-[480px]">
            {status === 'success' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-header text-sonique-dark mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for reaching out, {formData.name}. We'll get back to you shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-gray-100 text-gray-700 font-bold uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors rounded"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className={`transition-opacity duration-300 ${status === 'submitting' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                <h3 className="text-2xl font-header mb-6 text-sonique-dark">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  
                  {/* Name Field */}
                  <div className="mb-8 relative">
                    <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide" htmlFor="name">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className={getInputClass('name')}
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {touched.name && errors.name && <AlertCircle className="w-5 h-5 text-red-500" />}
                        {touched.name && !errors.name && formData.name && <Check className="w-5 h-5 text-green-500" />}
                      </div>
                    </div>
                    {/* Absolute positioned error message to prevent layout shift */}
                    {touched.name && errors.name && (
                      <p className="absolute -bottom-5 left-0 text-red-500 text-xs animate-in fade-in slide-in-from-top-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-8 relative">
                    <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide" htmlFor="email">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className={getInputClass('email')}
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {touched.email && errors.email && <AlertCircle className="w-5 h-5 text-red-500" />}
                        {touched.email && !errors.email && formData.email && <Check className="w-5 h-5 text-green-500" />}
                      </div>
                    </div>
                    {touched.email && errors.email && (
                      <p className="absolute -bottom-5 left-0 text-red-500 text-xs animate-in fade-in slide-in-from-top-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="mb-8 relative">
                    <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide" htmlFor="message">Message</label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={4}
                        className={getInputClass('message')}
                        placeholder="Tell us about your musical goals..."
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      <div className="absolute right-3 top-6">
                        {touched.message && errors.message && <AlertCircle className="w-5 h-5 text-red-500" />}
                        {touched.message && !errors.message && formData.message && <Check className="w-5 h-5 text-green-500" />}
                      </div>
                    </div>
                    {touched.message && errors.message && (
                      <p className="absolute -bottom-5 left-0 text-red-500 text-xs animate-in fade-in slide-in-from-top-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting' || !isFormValid}
                    className="w-full py-4 bg-sonique-dark text-white font-bold hover:bg-black transition-colors rounded flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 disabled:transform-none disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>Sending <Loader2 className="w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;