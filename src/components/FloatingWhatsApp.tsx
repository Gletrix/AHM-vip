import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onJoinClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onJoinClick }) => {
  return (
    <aside aria-label="زر الانضمام السريع" className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
      <button
        onClick={onJoinClick}
        aria-label="انضم لقائمة الـ 100 تاجر مؤسس عبر الواتساب"
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-extrabold text-sm shadow-xl shadow-sky-500/25 border border-white/60 hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        {/* Red pulse notification indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>

        <MessageCircle className="w-5 h-5 text-white" />
        <span className="hidden sm:inline">انضم لقائمة الـ 100 تاجر مؤسس</span>
        <span className="sm:hidden font-bold">100 مؤسس</span>
      </button>
    </aside>
  );
};
