import React, { useState, useEffect } from 'react';
import { X, Loader2, Sparkles, CheckCircle, BookOpen, Music, Target, ArrowRight } from 'lucide-react';
import { generateLessonPlan, isGeminiConfigured } from '../services/geminiService';
import { GeneratedPlan, LessonPlanRequest } from '../types';

interface AIPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInstrument?: string;
}

const AIPlannerModal: React.FC<AIPlannerModalProps> = ({ isOpen, onClose, initialInstrument }) => {
  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form');
  const [formData, setFormData] = useState<LessonPlanRequest>({
    age: '7-10',
    instrument: 'Piano',
    goal: ''
  });
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);

  // Reset form or set initial instrument when modal opens
  useEffect(() => {
    if (isOpen) {
        setStep('form');
        setFormData(prev => ({
            ...prev,
            instrument: initialInstrument || 'Piano',
            goal: ''
        }));
    }
  }, [isOpen, initialInstrument]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isGeminiConfigured()) {
      alert('Missing Gemini API key. Set GEMINI_API_KEY in .env.local and restart the dev server.');
      return;
    }
    setStep('loading');
    const result = await generateLessonPlan(formData);
    if (result) {
      setPlan(result);
      setStep('result');
    } else {
      setStep('form'); // Fallback on error
      alert("Something went wrong. Please try again.");
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi Sonique! I'm interested in the "${plan?.title}" for my child (Age: ${formData.age}, Instrument: ${formData.instrument}).\n\nGoal: ${formData.goal}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6591234567?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-sonique-dark p-6 flex justify-between items-center border-b border-sonique-gold flex-shrink-0">
          <h2 className="text-2xl text-white flex items-center gap-2 font-header tracking-wide">
            <Sparkles className="text-sonique-gold" />
            {step === 'result' ? 'Your Tailored Plan' : 'Generate Lesson Plan'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-sonique-gold scrollbar-track-gray-100">
          
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-gray-600 text-lg">
                    Tell us a bit about yourself, and our AI will draft a detailed 4-week roadmap including exercises and goals instantly.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Age Group</label>
                    <select 
                    className="w-full p-4 border border-gray-200 bg-gray-50 rounded-lg focus:border-sonique-gold focus:ring-1 focus:ring-sonique-gold outline-none transition cursor-pointer"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    >
                    <option value="5-8">Kids (5-8 years)</option>
                    <option value="9-16">Youths (9-16 years)</option>
                    <option value="Adult">Adults (17+ years)</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Instrument</label>
                    <select 
                    className="w-full p-4 border border-gray-200 bg-gray-50 rounded-lg focus:border-sonique-gold focus:ring-1 focus:ring-sonique-gold outline-none transition cursor-pointer"
                    value={formData.instrument}
                    onChange={(e) => setFormData({...formData, instrument: e.target.value})}
                    >
                    <option value="Acoustic Guitar">Acoustic Guitar</option>
                    <option value="Electric Guitar">Electric Guitar</option>
                    <option value="Piano">Piano / Keyboard</option>
                    <option value="Violin">Violin</option>
                    </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">What are your goals?</label>
                <textarea 
                  className="w-full p-4 border border-gray-200 bg-gray-50 rounded-lg focus:border-sonique-gold focus:ring-1 focus:ring-sonique-gold outline-none transition resize-none h-32"
                  placeholder="e.g. I want to learn Taylor Swift songs, or I want to get Grade 5 theory..."
                  value={formData.goal}
                  onChange={(e) => setFormData({...formData, goal: e.target.value})}
                  required
                />
              </div>

              <div className="pt-4">
                  <button type="submit" className="w-full py-4 bg-sonique-dark text-white font-bold text-lg hover:bg-black transition-all rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-sonique-gold" />
                    Generate My Plan
                  </button>
              </div>
            </form>
          )}

          {step === 'loading' && (
            <div className="flex flex-col items-center justify-center py-20 h-full text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-sonique-gold/20 rounded-full animate-ping"></div>
                <Loader2 className="w-16 h-16 text-sonique-gold animate-spin relative z-10" />
              </div>
              <h3 className="text-2xl font-header text-sonique-dark mb-2">Composing your journey...</h3>
              <p className="text-lg text-gray-500">Our AI is analyzing the best teaching methods for your goals.</p>
            </div>
          )}

          {step === 'result' && plan && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100 shadow-sm">
                <h3 className="text-3xl font-bold text-sonique-dark mb-3 font-header uppercase tracking-wide">{plan.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{plan.overview}</p>
              </div>

              <div className="grid gap-6">
                {plan.weeks.map((week, idx) => (
                  <div key={week.week} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ring-1 ring-black/5">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-sonique-dark text-sonique-gold flex items-center justify-center rounded-lg font-bold font-header text-xl shadow-md">
                            0{week.week}
                          </div>
                          <h4 className="font-bold text-sonique-dark text-xl md:text-2xl">{week.focus}</h4>
                      </div>
                      <div className="hidden md:block w-px h-8 bg-gray-200 mx-2"></div>
                      <p className="text-gray-600 italic flex-grow">{week.activity}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Key Concepts */}
                      <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                         <h5 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <BookOpen className="w-4 h-4" /> Key Concepts
                         </h5>
                         <div className="flex flex-wrap gap-2">
                            {week.keyConcepts?.map((c, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white text-blue-700 text-sm font-semibold rounded-full border border-blue-200 shadow-sm">
                                    {c}
                                </span>
                            ))}
                         </div>
                      </div>

                      {/* Practice Exercises */}
                      <div className="bg-purple-50/50 p-5 rounded-xl border border-purple-100">
                         <h5 className="font-bold text-purple-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <Music className="w-4 h-4" /> Practice Routine
                         </h5>
                         <ul className="space-y-2">
                            {week.practiceExercises?.map((e, i) => (
                                <li key={i} className="flex items-start gap-3 text-purple-900 text-sm">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                    <span className="leading-snug">{e}</span>
                                </li>
                            ))}
                         </ul>
                      </div>
                    </div>
                    
                    {/* Outcome */}
                    <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                        <div className="p-2 bg-green-100 rounded-full text-green-700 mt-0.5">
                            <Target className="w-4 h-4" />
                        </div>
                        <div>
                             <span className="block text-xs font-bold text-green-800 uppercase tracking-wider mb-1">Expected Outcome</span>
                             <span className="text-green-800 font-medium">{week.outcomes}</span>
                        </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 sticky bottom-0 bg-white/95 backdrop-blur p-6 -mx-8 -mb-8 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] text-center">
                <p className="text-sm text-gray-500 mb-4 font-medium">Ready to start this plan with a professional mentor?</p>
                <button 
                  onClick={handleWhatsAppRedirect}
                  className="w-full md:w-auto px-8 py-4 bg-[#25D366] text-white font-bold hover:bg-[#20b85a] transition-all rounded-full flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-green-200 hover:-translate-y-1 transform duration-200"
                >
                  <CheckCircle className="w-5 h-5" />
                  Claim Free Trial via WhatsApp
                  <ArrowRight className="w-4 h-4 opacity-80" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AIPlannerModal;
