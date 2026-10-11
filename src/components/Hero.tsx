import React from 'react';
import { ShieldAlert, CheckCircle2, Camera, ShieldCheck, ArrowDown, Sparkles, TrendingUp, DollarSign, AlertCircle } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onExploreClick }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-white">
      {/* Background ambient light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-emerald-100/60 via-sky-100/50 to-emerald-50/40 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-100/60 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill with RED highlight on Retour pain */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-900 font-bold">AHM — السوق الجزائري الأمين</span>
            <span className="text-slate-300">|</span>
            <span className="text-red-600 font-extrabold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              نظام حماية الهامش وسد ثغرات الـ Retour
            </span>
          </div>
        </div>

        {/* Core Hero Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.25] tracking-tight">
            بيئة تجارية متوازنة تضمن <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">حق التاجر</span> وتوفر <span className="text-sky-600">تسوق آمن ومريح للمشتري</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            توفر منصة <strong className="text-slate-900 font-bold">AHM</strong> سوقاً جاهزاً يربط المتاجر الموثوقة بالمشترين الجادين مباشرة. حلول عملية لتجنب <span className="text-red-600 font-bold underline decoration-red-300 decoration-2 underline-offset-4">نزيف التكاليف الثابتة في الاشتراكات وتجارب الإعلانات غير المضمونة</span>، مع حماية كاملة لهامش ربح التاجر من <span className="text-red-600 font-bold">خسائر الشحن المرجّع</span>.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onJoinClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-emerald-400/30"
            >
              <span>[ استكشف المنصة وانضم لـ 100 تاجر مؤسس عبر الواتساب 🚀 ]</span>
            </button>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold text-base border border-slate-200 transition-all cursor-pointer shadow-xs"
            >
              <span>مشاهدة شريط العناوين ونماذج المصداقية</span>
              <ArrowDown className="w-4 h-4 text-sky-600" />
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid (Clean White Cards, Light Green & Sky Blue Accents, Red Highlights) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-red-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-3 group-hover:scale-105 transition-transform">
              <DollarSign className="w-5 h-5" />
            </div>
            <div className="text-xl font-black text-slate-900 mb-1 flex items-center justify-between">
              <span>0 دج عمولة المرتجع</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-bold">حماية تامة</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              لا ندين التاجر بسنتيم واحد عند رفض أو إلغاء الطلب؛ العمولة تقتطع حصرياً من الطلبيات الناجحة والمستلمة.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-3 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-xl font-black text-slate-900 mb-1 flex items-center justify-between">
              <span>شهران مجاناً</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold">100 مؤسس</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              إعفاء كامل من الاشتراك الشهري لأول 100 تاجر مؤسس + وسام ذهبي علني على واجهة متجرك لترسيخ الأسبقية.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-3 group-hover:scale-105 transition-transform">
              <Camera className="w-5 h-5" />
            </div>
            <div className="text-xl font-black text-slate-900 mb-1 flex items-center justify-between">
              <span>كاميرا حية مباشرة</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-bold border border-red-200">بدون فوتوشوب</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              تصوير مباشر للسلعة بفتح كاميرا المتصفح؛ القضاء التام على أصحاب الصور المستوردة والمضللة.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-teal-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mb-3 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xl font-black text-slate-900 mb-1 flex items-center justify-between">
              <span>دفع الشحن المسبق</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-bold">Delivery Pay</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              خيار Delivery Pay يحمي التاجر من مقلب "غيرت رأيي عند الباب" ويوفر للمشتري خصماً تشجيعياً حقيقياً.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

