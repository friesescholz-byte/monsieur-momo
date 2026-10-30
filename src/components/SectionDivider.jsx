import React from 'react';

export default function SectionDivider({ className = '' }) {
  return (
    <div className={`relative w-full flex items-center justify-center py-2 overflow-hidden pointer-events-none select-none ${className}`}>
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 flex items-center gap-4">
        {/* Feine goldene Kante von links */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-[#D4AF37]/65" />
        
        {/* Zentrales edles Varieté-Rauten-Ornament */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="w-1 h-1 rounded-full bg-[#D4AF37]/60" />
          <span className="text-[10px] text-[#8B1E2D] font-serif leading-none tracking-widest">
            ◆
          </span>
          <span className="w-1 h-1 rounded-full bg-[#D4AF37]/60" />
        </div>

        {/* Feine goldene Kante nach rechts */}
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/30 to-[#D4AF37]/65" />
      </div>
    </div>
  );
}
