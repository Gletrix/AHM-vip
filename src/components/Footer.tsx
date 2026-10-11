import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 flex items-center justify-center text-white font-black text-lg shadow-xs">
              AHM
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900">AHM — السوق الجزائري الأمين</span>
              <p className="text-xs text-slate-500">بيئة تجارية متوازنة تضمن حق التاجر وتوفر تسوق آمن ومريح للمشتري</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-semibold">
            <a href="#quick-nav" className="hover:text-sky-600 transition-colors">الميزات السريعة</a>
            <a href="#features-deep" className="hover:text-sky-600 transition-colors">معالجة الألم الميداني</a>
            <a href="#credibility-profiles" className="hover:text-sky-600 transition-colors">مؤشرات المصداقية</a>
            <a href="#order-lifecycle" className="hover:text-sky-600 transition-colors">سير الطلبيات</a>
            <a href="#business-model" className="hover:text-sky-600 transition-colors">عرض التأسيس</a>
            <a href="#faqs" className="hover:text-sky-600 transition-colors">الأسئلة الشائعة</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs text-slate-700 font-bold border border-slate-200 cursor-pointer transition-colors shadow-2xs"
          >
            <span>للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-600" />
          </button>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-right font-medium">
          <div>
            جميع الحقوق محفوظة لمنصة <strong className="text-slate-900 font-bold">AHM — السوق الجزائري الأمين</strong> © {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span>صُنعت بعناية لخدمة التجارة الوطنية في 58 ولاية جزائرية</span>
            <span className="text-emerald-600">🇩🇿</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
