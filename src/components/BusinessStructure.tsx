import React, { useState } from 'react';
import { 
  Crown, 
  Check, 
  Calendar, 
  CreditCard, 
  Palmtree, 
  Calculator, 
  DollarSign, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface BusinessStructureProps {
  onJoinClick: () => void;
}

export const BusinessStructure: React.FC<BusinessStructureProps> = ({ onJoinClick }) => {
  // Calculator state
  const [ordersPerMonth, setOrdersPerMonth] = useState<number>(100);
  const [deliveryCost, setDeliveryCost] = useState<number>(700); // 700 DZD
  const [traditionalReturnRate, setTraditionalReturnRate] = useState<number>(35); // 35% in traditional market

  // Calculation
  const returnedOrdersTrad = Math.round((ordersPerMonth * traditionalReturnRate) / 100);
  const lostTradMoney = returnedOrdersTrad * (deliveryCost + 600); // return fee + burned ad

  // In AHM: with SIM check & Delivery Pay, return rate drops to ~8%
  const ahmSuccessfulOrders = Math.round(ordersPerMonth * 0.92);
  const ahmCommission = ahmSuccessfulOrders * 25;
  const ahmSavings = Math.max(0, lostTradMoney - ahmCommission - 800);

  return (
    <section id="business-model" className="py-18 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold shadow-2xs">
            <Crown className="w-4 h-4 text-emerald-600" />
            <span>6. النموذج التنظيمي والتأسيسي (Business Structure)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            شراكة عادلة، وضوح تام، ورسوم رمزية على النجاح فقط
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            صُمم نموذج التسعير في AHM ليقف في صف التاجر: لا اشتراكات شهرية مكلفة في البداية، ولا عمولات على الطلبات المرجعة، مع مرونة غير مسبوقة في الدفع.
          </p>
        </div>

        {/* 3 Main Pillars on White Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: عرض التأسيس (Red highlight pill + Light green border) */}
          <div className="rounded-3xl p-7 bg-white border-2 border-emerald-400 ring-4 ring-emerald-50 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs tracking-wider uppercase shadow-xs animate-pulse">
                حصري لأول 100
              </span>
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                <Crown className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-1">
                عرض التأسيس
              </h3>
              <p className="text-emerald-700 text-sm font-bold mb-6">
                مخصص لأول 100 تاجر مؤسس فقط
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    <strong className="text-slate-900">إعفاء كامل من الاشتراك الشهري</strong> لمدة شهرين مجاناً (0 دج).
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    منح وسام علني <strong className="text-emerald-700 font-bold">"تاجر مؤسس"</strong> على واجهة المتجر لبناء الأسبقية والثقة الفورية لدى الزبائن.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    الانضمام المباشر <strong className="text-slate-900 font-bold">لمجموعة الواتساب المغلقة</strong> للتواصل المباشر مع الإدارة والتطوير التشاركي للميزات.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={onJoinClick}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:opacity-95 text-white font-black text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                احجز مكانك ضمن الـ 100 الآن 🚀
              </button>
            </div>
          </div>

          {/* Card 2: التكاليف التشغيلية العادية */}
          <div className="rounded-3xl p-7 bg-white border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4">
                <DollarSign className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-1">
                التكاليف التشغيلية العادية
              </h3>
              <p className="text-slate-500 text-sm font-semibold mb-6">
                تبدأ بعد انتهاء الشهرين المجانيين
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-bold mb-1">الاشتراك الشهري الثابت:</div>
                  <div className="text-2xl font-black text-slate-900 flex items-baseline gap-1">
                    <span>800</span>
                    <span className="text-sm font-bold text-sky-700">دج / شهرياً</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    (أقل من ثمن فنجاني قهوة لتشغيل متجر رقمي متكامل)
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs text-slate-500 font-bold">عمولة الأداء (تُقتطع فقط من الطلبيات الناجحة):</div>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span className="text-slate-700">طلبات COD:</span>
                    <span className="font-extrabold text-slate-900 font-mono">30 دج فقط</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span className="text-slate-700">طلبات Delivery Pay:</span>
                    <span className="font-extrabold text-sky-600 font-mono">20 دج فقط</span>
                  </div>
                </div>

                {/* RED Highlight on 0 DZD on returns */}
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-red-600" />
                  <span>0 دج عمولة على الطلبات المرجعة (Retour) أو الملغاة.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 text-center font-medium">
              لا ندينك على طرد لم يقبضه المشتري إطلاقاً.
            </div>
          </div>

          {/* Card 3: مرونة التسديد ووضع العطلة */}
          <div className="rounded-3xl p-7 bg-white border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                <Calendar className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-1">
                مرونة التسديد ووضع العطلة
              </h3>
              <p className="text-emerald-700 text-sm font-semibold mb-6">
                أقصى درجات المرونة لحرية عمل التاجر
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>مهلة تسديد تصل إلى 75 يوماً</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    تصفية المديونية المستحقة تتم بمرونة وسهولة عبر تحويل بسيط في <strong className="text-slate-900">BaridiMob أو CCP</strong> دون أي إغلاق مفاجئ أو تعقيد مصرفي.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Palmtree className="w-4 h-4" />
                    <span>تفعيل "وضع العطلة" (Vacation Mode)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    إذا أردت التوقف مؤقتاً أو السفر، يمكنك تفعيل وضع العطلة بنقرة زر؛ يحفظ النظام متجرك، منتجاتك، وسجلك التجاري وتقييماتك كاملة دون حذف أو أي تأثير سلبي لحين عودتك.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 text-center font-medium">
              راحة بال تامة وتفرغ كامل لتطوير علامتك التجارية.
            </div>
          </div>

        </div>

        {/* Profit Protection & Return Calculator in Light Mode */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white text-sky-600 border border-slate-200 shadow-2xs">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                حاسبة وفورات التاجر الجزائري: AHM مقابل السوق التقليدي
              </h3>
              <p className="text-xs text-slate-500">
                شاهد كم تحرق شهرياً في خسائر الـ Retour والإعلانات الممولة مقارنة بحماية AHM
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                متوسط عدد الطلبيات الشهرية:
              </label>
              <input
                type="number"
                value={ordersPerMonth}
                onChange={(e) => setOrdersPerMonth(Math.max(10, Number(e.target.value)))}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-sky-500 outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                تكلفة الشحن المعتادة (دج):
              </label>
              <input
                type="number"
                value={deliveryCost}
                onChange={(e) => setDeliveryCost(Math.max(300, Number(e.target.value)))}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-sky-500 outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                نسبة الـ Retour الحالية لديك في فيسبوك/إنستغرام:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="15"
                  max="60"
                  value={traditionalReturnRate}
                  onChange={(e) => setTraditionalReturnRate(Number(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer"
                />
                <span className="text-red-600 font-black font-mono text-sm shrink-0 w-12 text-center">
                  {traditionalReturnRate}%
                </span>
              </div>
            </div>
          </div>

          {/* Results Comparison Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Traditional loss with RED HIGHLIGHT */}
            <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-200">
              <div className="text-xs text-red-700 font-bold mb-1">خسارتك التقديرية الحالية في السوق التقليدي:</div>
              <div className="text-2xl font-black text-red-600 font-mono">
                {lostTradMoney.toLocaleString('ar-DZ')} دج / شهرياً
              </div>
              <div className="text-[11px] text-slate-600 mt-1 font-medium">
                (تتضمن طرود {returnedOrdersTrad} مرتجع خاسر مصاريف التوصيل وإعلانات ممولة محروقة)
              </div>
            </div>

            {/* AHM Savings with Light Green and Sky */}
            <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200">
              <div className="text-xs text-emerald-800 font-bold mb-1">صافي التوفير والأرباح المحمية مع AHM:</div>
              <div className="text-2xl font-black text-emerald-700 font-mono">
                +{ahmSavings.toLocaleString('ar-DZ')} دج / شهرياً
              </div>
              <div className="text-[11px] text-slate-600 mt-1 font-medium">
                (بفضل التحقق من الـ SIM، وخيار Delivery Pay، وعدم فرض عمولات على المرتجع)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
