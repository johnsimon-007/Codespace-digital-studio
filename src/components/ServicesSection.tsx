import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';
import { 
  Globe, Palette, LayoutDashboard, CalendarCheck, CreditCard, 
  Bot, MessageSquareText, Cpu, Sparkles, Layers, ArrowUpRight,
  CheckCircle2, Play, Send, Shield
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceModal: (service: ServiceItem) => void;
  onOpenEstimator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceModal,
  onOpenEstimator
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find((s) => s.id === activeServiceId) || SERVICES_LIST[0];

  // Helper icon renderer
  const renderIcon = (name: string, className: string = 'w-5 h-5') => {
    switch (name) {
      case 'Globe': return <Globe className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'LayoutDashboard': return <LayoutDashboard className={className} />;
      case 'CalendarCheck': return <CalendarCheck className={className} />;
      case 'CreditCard': return <CreditCard className={className} />;
      case 'Bot': return <Bot className={className} />;
      case 'MessageSquareText': return <MessageSquareText className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Layers': return <Layers className={className} />;
      default: return <Globe className={className} />;
    }
  };

  // State for interactive mini demos
  const [crmStage, setCrmStage] = useState<'New' | 'Qualified' | 'Proposal' | 'Closed'>('Qualified');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30 AM');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: 'Hello! I am CodeSpace AI Receptionist. How can I assist your business today?' },
    { sender: 'user', text: 'Do you build custom CRM systems and AI chatbots?' },
    { sender: 'bot', text: 'Yes! We engineer custom CRMs with role permissions and automated 24/7 AI chatbots trained on your business data.' }
  ]);
  const [userChatInput, setUserChatInput] = useState('');
  const [waSent, setWaSent] = useState(false);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userChatInput.trim()) return;
    const msg = userChatInput.trim();
    setUserChatInput('');
    setChatMessages((prev) => [...prev, { sender: 'user', text: msg }]);
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `[CODESPACE AI DEMO]: I've logged your request regarding "${msg}". Our team will prepare a custom system architecture specification for you.`
        }
      ]);
    }, 600);
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-[#080808] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]"></span>
              <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase font-semibold">
                CORE CAPABILITIES & SERVICES
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              INTERACTIVE <span className="text-[#00F0FF]">SERVICE MATRIX</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-zinc-400 max-w-xs">
            Hover or click any service to inspect live interactive system architecture demos.
          </div>
        </div>

        {/* Split Grid: Left List (Interactive Titles) & Right Live Demo Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Interactive Editorial Service List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10 border-t border-b border-white/10 order-2 lg:order-1">
            {SERVICES_LIST.map((service, index) => {
              const isSelected = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group py-6 px-4 cursor-pointer transition-all duration-300 flex flex-col justify-center ${
                    isSelected
                      ? 'bg-neutral-900/90 border-l-4 border-l-[#00F0FF] pl-6'
                      : 'hover:bg-neutral-900/40 hover:pl-6'
                  }`}
                  data-cursor="EXPLORE ↗"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-zinc-500 font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className={`p-2 rounded-lg transition-colors ${isSelected ? 'bg-[#00F0FF] text-black' : 'bg-neutral-800 text-zinc-300'}`}>
                        {renderIcon(service.iconName, 'w-5 h-5')}
                      </div>
                      <h3 className={`font-syne text-lg sm:text-xl md:text-2xl font-bold tracking-tight uppercase transition-all ${
                        isSelected ? 'text-[#00F0FF] scale-102' : 'text-white group-hover:text-zinc-200'
                      }`}>
                        {service.name}
                      </h3>
                    </div>

                    <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected ? 'text-[#00F0FF] translate-x-1 -translate-y-1' : 'text-zinc-600 group-hover:text-white'
                    }`} />
                  </div>

                  {/* Supporting text reveal when selected */}
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-white/10 animate-in fade-in duration-200">
                      <p className="text-zinc-300 text-sm font-sans mb-4 leading-relaxed">
                        {service.shortDesc}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {service.tags.map((tag) => (
                          <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded bg-black border border-white/10 text-[#00F0FF]">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectServiceModal(service);
                        }}
                        className="font-mono text-xs text-black bg-[#00F0FF] hover:bg-white font-bold px-4 py-2 rounded-md transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>VIEW FULL SYSTEM SPECIFICATIONS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Demo Inspector Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-neutral-950 rounded-2xl border border-white/15 p-6 shadow-2xl overflow-hidden order-1 lg:order-2 mb-8 lg:mb-0">
            
            {/* Header of Inspector */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse"></span>
                <span className="text-white font-bold tracking-wider">LIVE SYSTEM SIMULATOR</span>
              </div>
              <span className="text-zinc-500">{activeService.id.toUpperCase()}</span>
            </div>

            {/* Dynamic Demo Widget Based on Selected Service */}
            <div className="min-h-[380px] flex flex-col justify-between">
              
              {/* CRM DEMO */}
              {activeService.demoType === 'crm' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-black p-3 rounded-lg border border-white/10">
                    <span className="font-mono text-xs text-zinc-400">PIPELINE STATUS</span>
                    <span className="font-mono text-xs font-bold text-[#00F0FF]">₹48,50,000 ACTIVE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    {(['New', 'Qualified', 'Proposal', 'Closed'] as const).map((stage) => (
                      <button
                        key={stage}
                        onClick={() => setCrmStage(stage)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          crmStage === stage
                            ? 'bg-[#00F0FF] text-black font-bold border-[#00F0FF]'
                            : 'bg-neutral-900 text-zinc-400 border-white/10 hover:text-white'
                        }`}
                      >
                        <div className="text-[10px] opacity-70">STAGE</div>
                        <div>{stage} Lead</div>
                      </button>
                    ))}
                  </div>

                  <div className="bg-black p-4 rounded-xl border border-white/10 space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center text-zinc-300">
                      <span>CLIENT: Gaming Arena Clinic</span>
                      <span className="text-[#00F0FF] font-bold">{crmStage}</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#00F0FF] h-full transition-all duration-500"
                        style={{
                          width: crmStage === 'New' ? '25%' : crmStage === 'Qualified' ? '50%' : crmStage === 'Proposal' ? '75%' : '100%'
                        }}
                      />
                    </div>
                    <p className="text-[11px] text-zinc-400 italic">
                      Automated trigger: WhatsApp confirmation & invoice PDF generated.
                    </p>
                  </div>
                </div>
              )}

              {/* BOOKING DEMO */}
              {activeService.demoType === 'booking' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="bg-black p-3 rounded-lg border border-white/10 flex justify-between">
                    <span className="text-zinc-400">INTERACTIVE SLOT PICKER</span>
                    <span className="text-[#00F0FF]">DATE: TODAY</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM', '06:00 PM', '08:00 PM'].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          selectedSlot === slot
                            ? 'bg-[#00F0FF] text-black font-bold border-[#00F0FF]'
                            : 'bg-neutral-900 text-zinc-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-[#00F0FF]/40 space-y-2">
                    <div className="flex items-center gap-2 text-[#00F0FF] font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>SLOT RESERVED: {selectedSlot}</span>
                    </div>
                    <p className="text-zinc-400 text-[11px]">
                      Instant WhatsApp confirmation notification dispatched to client phone automatically.
                    </p>
                  </div>
                </div>
              )}

              {/* AI CHATBOT / RECEPTIONIST DEMO */}
              {(activeService.demoType === 'ai' || activeService.demoType === 'website') && (
                <div className="space-y-3 flex flex-col justify-between h-[340px]">
                  <div className="space-y-2 overflow-y-auto max-h-[260px] p-3 bg-black rounded-xl border border-white/10 text-xs font-mono">
                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-lg max-w-[85%] ${
                          msg.sender === 'user'
                            ? 'bg-neutral-800 text-white ml-auto text-right'
                            : 'bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-zinc-200 mr-auto'
                        }`}
                      >
                        <span className="block text-[9px] text-[#00F0FF] font-bold mb-1 uppercase">
                          {msg.sender === 'user' ? 'VISITOR' : 'CODESPACE AI AGENT'}
                        </span>
                        {msg.text}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSendChat} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask the AI Receptionist..."
                      value={userChatInput}
                      onChange={(e) => setUserChatInput(e.target.value)}
                      className="flex-1 bg-black border border-white/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00F0FF]"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-[#00F0FF] text-black font-bold rounded-lg hover:bg-white transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}

              {/* WHATSAPP AUTOMATION DEMO */}
              {activeService.demoType === 'whatsapp' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="bg-[#075E54] text-white p-3 rounded-t-xl flex items-center gap-3">
                    <MessageSquareText className="w-5 h-5" />
                    <div>
                      <div className="font-bold text-sm">CODESPACE BUSINESS BOT</div>
                      <div className="text-[10px] text-blue-200">Official Cloud API Verified</div>
                    </div>
                  </div>

                  <div className="bg-neutral-900 p-4 border border-white/10 space-y-3 text-xs">
                    <div className="bg-neutral-800 p-2.5 rounded-lg text-zinc-300">
                      👋 Hi! Thanks for contacting CodeSpace. We have received your inquiry.
                    </div>
                    <div className="bg-[#00F0FF]/20 border border-[#00F0FF] p-2.5 rounded-lg text-#00F0FF">
                      ⚡ Automated Response (&lt; 1s): Select [1] Book Demo, [2] Pricing Estimate, [3] Speak to Gopi.
                    </div>
                  </div>

                  <button
                    onClick={() => setWaSent(true)}
                    className="w-full py-2.5 bg-[#00F0FF] text-black font-bold rounded-lg hover:bg-white transition-colors"
                  >
                    {waSent ? '✓ SIMULATED WHATSAPP TEST SENT' : 'TRIGGER TEST WHATSAPP MESSAGE'}
                  </button>
                </div>
              )}

              {/* PAYMENT DEMO */}
              {activeService.demoType === 'payment' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="bg-black p-4 rounded-xl border border-white/10 text-center space-y-2">
                    <span className="text-zinc-400 text-[10px]">SECURE CHECKOUT TERMINAL</span>
                    <div className="text-2xl font-bold font-syne text-[#00F0FF]">₹1,50,000.00</div>
                    <div className="text-[10px] text-zinc-500">CLIENT: Apex Gaming Center Project</div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-[#00F0FF]/30 space-y-2 text-center">
                    <div className="w-24 h-24 mx-auto bg-white p-2 rounded-lg flex items-center justify-center">
                      <div className="w-full h-full bg-black flex items-center justify-center text-[#00F0FF] font-bold text-[10px]">
                        [UPI QR CODE]
                      </div>
                    </div>
                    <div className="text-zinc-300 text-[11px] font-bold">UPI / RAZORPAY / STRIPE DIRECT</div>
                    <div className="text-[10px] text-zinc-400">Server-side HMAC verification active.</div>
                  </div>
                </div>
              )}

              {/* AUTOMATION DEMO */}
              {activeService.demoType === 'automation' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-black border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-[#00F0FF]">
                      <span className="font-bold">WEBHOOK ENGINE</span>
                      <span>ACTIVE ●</span>
                    </div>
                    <p className="text-zinc-400 text-[11px]">
                      When a new lead fills out the form on your website:
                    </p>
                    <ol className="space-y-1.5 text-zinc-300 list-decimal pl-4">
                      <li>Log lead to PostgreSQL CRM</li>
                      <li>Send instant WhatsApp alert to team</li>
                      <li>Schedule calendar discovery call</li>
                      <li>Generate custom quotation PDF</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* Bottom CTA in Inspector */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={onOpenEstimator}
                  className="w-full py-3 bg-[#00F0FF] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>ADD {activeService.name} TO ESTIMATOR</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
