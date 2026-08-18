import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Phone, Mail, MessageSquare, ArrowUpRight, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Clinic / Healthcare',
    projectScope: 'Full Digital System (Web + CRM + AI)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          phone: formData.phone,
          businessType: formData.businessType,
          projectScope: formData.projectScope
        })
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      }
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hello%20CodeSpace%2C%20I%20have%20an%20idea%20for%20a%20digital%20system%20for%20my%20business.`;

  return (
    <section id="contact" className="py-24 md:py-36 bg-black relative border-b border-white/10">
      
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 mb-4">
            <Send className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span className="font-mono text-xs text-[#00F0FF] font-bold tracking-wider uppercase">
              INITIATE PROJECT DISCOVERY
            </span>
          </div>

          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-none mb-6">
            HAVE AN IDEA? <br />
            <span className="text-[#00F0FF] underline decoration-[#00F0FF]">LET'S BUILD IT.</span>
          </h2>

          <p className="font-sans text-xl text-zinc-300 font-light max-w-2xl">
            Whether you need a high-converting website, an automated CRM, or a full custom AI system, we are ready to build what your business needs next.
          </p>
        </div>

        {/* Main Grid: Left Direct Channels & Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Phone Card */}
            <div
              className="group p-8 rounded-3xl bg-neutral-950 border border-white/10 hover:border-[#00F0FF] transition-all block shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-[#00F0FF]/10 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xs text-zinc-400 uppercase">DIRECT PHONE / WHATSAPP</div>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-syne font-extrabold text-2xl text-white group-hover:text-[#00F0FF] transition-colors block">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">ADDITIONAL CONTACTS</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COMPANY_INFO.extraPhones?.map((num) => (
                    <a key={num} href={`tel:${num}`} className="text-white hover:text-[#00F0FF] font-mono text-xs font-bold flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></div>
                      {num}
                    </a>
                  ))}
                </div>
              </div>
              <p className="font-mono text-[10px] text-zinc-500 mt-6 uppercase tracking-widest">Available 9:00 AM - 9:00 PM IST // Fast Response</p>
            </div>

            {/* Team Members Card */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-white/10 shadow-xl">
              <div className="font-mono text-xs text-zinc-400 uppercase mb-4 tracking-widest font-bold">OUR ENGINEERING TEAM</div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {['GOPIKRISHNAN', 'ROHITH', 'ROHETH', 'JOHN'].map((name) => (
                    <span key={name} className="px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-white font-mono text-[10px] font-bold">
                      {name}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  Connect with our lead architects directly to discuss high-level technical specifications or custom system requirements.
                </p>
              </div>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="group p-8 rounded-3xl bg-neutral-950 border border-white/10 hover:border-[#00F0FF] transition-all block shadow-xl"
              data-cursor="EMAIL"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-[#00F0FF]/10 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xs text-zinc-400 uppercase">DIRECT EMAIL</div>
                  <div className="font-syne font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#00F0FF] transition-colors">
                    {COMPANY_INFO.email}
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-widest">Send specs, RFPs, or system requirements</p>
            </a>

            {/* Direct WhatsApp Big Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full py-5 px-8 bg-[#00F0FF] hover:bg-white text-black font-mono font-bold text-sm uppercase tracking-wider rounded-2xl transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] flex items-center justify-between"
              data-cursor="WHATSAPP ↗"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6" />
                <span>CHAT ON WHATSAPP NOW</span>
              </div>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 font-mono text-xs text-zinc-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
              <span>Zero spam guaranteed. Strict client confidentiality.</span>
            </div>

          </div>

          {/* Right Column: Contact & Project Intake Form */}
          <div className="lg:col-span-7 bg-neutral-950 p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="font-syne font-extrabold text-2xl text-white uppercase tracking-tight pb-4 border-b border-white/10">
                  PROJECT INQUIRY FORM
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-zinc-300 uppercase mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh / Alex"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#00F0FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-zinc-300 uppercase mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#00F0FF] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-zinc-300 uppercase mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#00F0FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-zinc-300 uppercase mb-2">Business Industry</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#00F0FF] focus:outline-none"
                    >
                      <option value="Clinic / Healthcare">Clinic / Healthcare</option>
                      <option value="Gaming Centre / Entertainment">Gaming Centre / Entertainment</option>
                      <option value="Restaurant / Hospitality">Restaurant / Hospitality</option>
                      <option value="Construction & Real Estate">Construction & Real Estate</option>
                      <option value="Professional Services / B2B">Professional Services / B2B</option>
                      <option value="E-Commerce / Retail">E-Commerce / Retail</option>
                      <option value="Other Business">Other Business</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-zinc-300 uppercase mb-2">Required Digital System</label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#00F0FF] focus:outline-none"
                  >
                    <option value="Full Digital System (Web + CRM + AI)">Full Digital System (Web + CRM + AI)</option>
                    <option value="Premium Website Development">Premium Website Development</option>
                    <option value="Custom CRM System">Custom CRM System</option>
                    <option value="Smart Booking Platform">Smart Booking Platform</option>
                    <option value="AI Chatbot & Receptionist">AI Chatbot & Receptionist</option>
                    <option value="WhatsApp Automation Engine">WhatsApp Automation Engine</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-zinc-300 uppercase mb-2">Project Details / Goals</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business goals, current bottlenecks, or desired launch timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#00F0FF] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#00F0FF] hover:bg-white text-black font-mono font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(0,240,255,0.35)] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>TRANSMITTING INQUIRY...</span>
                  ) : (
                    <>
                      <span>START A PROJECT ↗</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            ) : (
              <div className="py-12 text-center space-y-6 animate-in fade-in">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#00F0FF] text-black flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.6)]">
                  <CheckCircle2 className="w-10 h-10 font-bold" />
                </div>

                <h3 className="font-syne font-extrabold text-3xl text-white uppercase tracking-tight">
                  INQUIRY TRANSMITTED!
                </h3>

                <p className="text-zinc-300 font-sans text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#00F0FF] font-bold">{formData.name}</span>. Gopi and the CodeSpace engineering team have received your details. We will review your requirements and get back to you within 2 hours.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-neutral-900 border border-white/20 text-white font-mono text-xs uppercase rounded-xl hover:bg-neutral-800"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
