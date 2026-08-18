import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch screens
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      const isInteractive = !!target.closest('a, button, input, textarea, [role="button"]');

      if (cursorAttr) {
        setCursorText(cursorAttr);
        setIsHovered(true);
      } else {
        setCursorText(null);
        setIsHovered(false);
      }

      setIsPointer(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animId: number;
    const follow = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18
      }));
      animId = requestAnimationFrame(follow);
    };
    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden lg:block">
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00F0FF] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />

      {/* Outer Ring / Dynamic Hover Badge */}
      <div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          cursorText
            ? 'px-4 py-2 bg-[#00F0FF] text-black border-[#00F0FF] font-mono text-xs font-bold shadow-[0_0_20px_rgba(204,255,0,0.6)] rounded-none'
            : isHovered || isPointer
            ? 'w-12 h-12 border-[#00F0FF] bg-[#00F0FF]/10 backdrop-blur-xs scale-125'
            : 'w-8 h-8 border-white/20 bg-transparent'
        }`}
        style={{ transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)` }}
      >
        {cursorText && <span className="whitespace-nowrap uppercase tracking-wider">{cursorText}</span>}
      </div>
    </div>
  );
};
