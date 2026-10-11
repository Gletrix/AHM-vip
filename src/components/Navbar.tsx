import React from 'react';
import { ShieldCheck, MessageCircle, Sparkles, Store } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 flex items-center justify-center shadow-md shadow-emerald-500/20 border border-white text-white font-black text-xl tracking-wider">
              AHM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">السوق الجزائري الأمين</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  DZ 🇩🇿
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">بيئة تجارية متوازنة تضمن حق التاجر والمشتري</p>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#quick-nav" className="hover:text-sky-600 transition-colors">الميزات السريعة</a>
            <a href="#features-deep" className="hover:text-sky-600 transition-colors">معالجة الألم الميداني</a>
            <a href="#credibility-profiles" className="hover:text-emerald-600 text-emerald-700 font-bold flex items-center gap-1.5 transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              مؤشرات المصداقية
            </a>
            <a href="#order-lifecycle" className="hover:text-sky-600 transition-colors">سير الطلبيات</a>
            <a href="#business-model" className="hover:text-sky-600 transition-colors">عرض التأسيس والرسوم</a>
            <a href="#faqs" className="hover:text-sky-600 transition-colors">الأسئلة الشائعة</a>
          </nav>

          {/* Founder Status Badge with RED highlight & Direct CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>متبقي 26 مكان / 100 مؤسس</span>
            </div>

            <button
              onClick={onJoinClick}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white font-bold text-sm shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-sky-500/25 hover:opacity-95 transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">انضم عبر الواتساب</span>
              <span className="sm:hidden">انضم الآن</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

