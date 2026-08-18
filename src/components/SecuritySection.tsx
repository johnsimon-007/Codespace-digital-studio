import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, Terminal, Zap } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      title: 'SECURE LEAD INTAKE',
      desc: 'All inquiries are processed via a server-side Express API with strict input sanitization to prevent XSS and Injection attacks.',
      icon: <Server className="w-5 h-5" />
    },
    {
      title: 'PROTECTIVE HEADERS',
      desc: 'We implement Helmet.js to set secure HTTP headers (HSTS, CSP, Frameguard) protecting the application from common web vulnerabilities.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'CORS POLICY',
      desc: 'Strict Cross-Origin Resource Sharing (CORS) configurations ensure that only authorized domains can interact with your digital systems.',
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: 'ZERO CLIENT SECRETS',
      desc: 'Sensitive logic and API keys are never exposed to the browser. All critical operations are executed in a protected server-side environment.',
      icon: <EyeOff className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span className="font-mono text-[10px] text-[#00F0FF] font-bold tracking-widest uppercase">
                SECURITY PROTOCOL 1.0
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white uppercase tracking-tight mb-6">
              BUILT FOR <br />
              <span className="text-[#00F0FF]">RESILIENCE.</span>
            </h2>
            <p className="font-sans text-lg text-zinc-400 mb-8 max-w-md">
              We de-risk your digital infrastructure. Our systems are engineered with a security-first mindset, ensuring your data and your users stay protected.
            </p>
            
            <div className="p-6 rounded-2xl bg-black border border-[#00F0FF]/20 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-white uppercase mb-1">REAL-TIME MONITORING</div>
                <p className="font-mono text-[10px] text-zinc-500 leading-relaxed">
                  System integrity is verified on every deployment. Automatic vulnerability scanning and dependency audits are standard.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-[#00F0FF]/30 transition-all group">
                <div className="p-3 rounded-xl bg-black text-[#00F0FF] w-fit mb-4 group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-syne font-bold text-lg text-white mb-2 uppercase tracking-tight">{feature.title}</h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
