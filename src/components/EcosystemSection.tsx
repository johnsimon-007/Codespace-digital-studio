import React, { useState } from 'react';
import { ECOSYSTEM_NODES } from '../data/mockData';
import { SystemNode } from '../types';
import { 
  Globe, LayoutDashboard, MessageSquareText, Bot, 
  Calendar, CreditCard, Cpu, Shield, ArrowRight, Activity, Zap 
} from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('crm');
  const [activeSignalPath, setActiveSignalPath] = useState<string[]>(['website', 'crm', 'whatsapp', 'automation']);

  const selectedNode = ECOSYSTEM_NODES.find((n) => n.id === selectedNodeId) || ECOSYSTEM_NODES[1];

  const renderNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5" />;
      case 'MessageSquareText': return <MessageSquareText className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const handleTriggerSignal = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    // Find connections
    const targetNode = ECOSYSTEM_NODES.find((n) => n.id === nodeId);
    if (targetNode) {
      setActiveSignalPath([nodeId, ...targetNode.connectedTo]);
    }
  };

  return (
    <section className="py-24 md:py-36 bg-black relative border-b border-white/10 overflow-hidden bg-grid-dots">
      
      {/* Background Neon Accent Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 mb-4">
            <Zap className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span className="font-mono text-xs text-[#00F0FF] font-bold tracking-wider uppercase">
              CONNECTED DIGITAL ECOSYSTEM
            </span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
            WE DON'T JUST DESIGN PAGES. <br />
            <span className="text-[#00F0FF] underline decoration-[#00F0FF]">WE BUILD SYSTEMS.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Every component in your digital stack communicates seamlessly with the others in real time. Click any node below to simulate signal flow.
          </p>
        </div>

        {/* Ecosystem Interactive Visual Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950 p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
          
          {/* Left / Main Network Grid (8 Nodes arranged interactively) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 relative">
            
            {ECOSYSTEM_NODES.map((node) => {
              const isSelected = selectedNodeId === node.id;
              const isInActivePath = activeSignalPath.includes(node.id);

              return (
                <div
                  key={node.id}
                  onClick={() => handleTriggerSignal(node.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-[150px] relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#00F0FF] text-black border-[#00F0FF] shadow-[0_0_25px_rgba(204,255,0,0.5)] scale-105 z-20 font-bold'
                      : isInActivePath
                      ? 'bg-neutral-900 border-[#00F0FF]/80 text-white shadow-[0_0_15px_rgba(204,255,0,0.2)]'
                      : 'bg-neutral-900/60 border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
                  }`}
                  data-cursor="SIGNAL ⚡"
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-black text-[#00F0FF]' : 'bg-black/40 text-[#00F0FF]'}`}>
                      {renderNodeIcon(node.icon)}
                    </div>
                    <span className={`font-mono text-[10px] ${isSelected ? 'text-black' : 'text-zinc-500'}`}>
                      {isInActivePath ? 'ACTIVE ●' : 'READY'}
                    </span>
                  </div>

                  <div>
                    <div className={`font-syne font-extrabold text-sm uppercase tracking-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                      {node.label}
                    </div>
                    <div className={`font-mono text-[10px] mt-0.5 ${isSelected ? 'text-neutral-900 font-semibold' : 'text-zinc-500'}`}>
                      {node.sub}
                    </div>
                  </div>

                  {/* Pulsing Signal Glow if in Active Path */}
                  {isInActivePath && !isSelected && (
                    <div className="absolute inset-0 border border-[#00F0FF]/50 rounded-2xl animate-pulse pointer-events-none" />
                  )}
                </div>
              );
            })}

          </div>

          {/* Right Column: Active Node Telemetry & Signal Log */}
          <div className="lg:col-span-4 bg-black p-6 rounded-2xl border border-white/15 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs text-zinc-400">
                <span className="text-[#00F0FF] font-bold">NODE TELEMETRY</span>
                <span>ID: {selectedNode.id.toUpperCase()}</span>
              </div>

              <div className="mt-4">
                <h3 className="font-syne text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
                  <span>{selectedNode.label}</span>
                  <span className="text-[#00F0FF] text-xs font-mono px-2 py-0.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30">
                    ONLINE
                  </span>
                </h3>
                <p className="text-zinc-300 text-sm mt-2 leading-relaxed font-sans">
                  {selectedNode.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                <div className="font-mono text-xs text-zinc-400 font-semibold">CONNECTED PIPELINES:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.connectedTo.map((target) => (
                    <span key={target} className="font-mono text-xs px-2.5 py-1 rounded bg-neutral-900 border border-white/10 text-[#00F0FF] flex items-center gap-1">
                      <span>{target.toUpperCase()}</span>
                      <ArrowRight className="w-3 h-3 text-zinc-500" />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-zinc-500 flex items-center justify-between">
              <span>LATENCY: 0.4ms</span>
              <span className="text-[#00F0FF]">100% SYNCHRONIZED</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
