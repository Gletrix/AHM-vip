import React, { useState } from 'react';
import { 
  ShieldCheck, 
  User, 
  Store, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  Sparkles, 
  ThumbsUp, 
  ThumbsDown,
  Info,
  SlidersHorizontal,
  BadgeAlert,
  ArrowRight
} from 'lucide-react';
import { 
  CUSTOMER_PROFILES, 
  MERCHANT_PROFILES, 
  CredibilityCustomerProfile, 
  CredibilityMerchantProfile 
} from '../data/landingData';

export const CredibilityShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customers' | 'merchants' | 'simulator'>('customers');

  // Interactive Simulator State
  const [simRole, setSimRole] = useState<'customer' | 'merchant'>('customer');
  const [simCodSuccess, setSimCodSuccess] = useState<number>(10);
  const [simCodFailed, setSimCodFailed] = useState<number>(2);
  const [simDeliverySuccess, setSimDeliverySuccess] = useState<number>(6);
  const [simDeliveryFailed, setSimDeliveryFailed] = useState<number>(0);
  const [simAgeDays, setSimAgeDays] = useState<number>(45);

  // Compute simulator result
  const calculateScore = () => {
    const totalCod = simCodSuccess + simCodFailed;
    const totalDelivery = simDeliverySuccess + simDeliveryFailed;
    const codRate = totalCod > 0 ? (simCodSuccess / totalCod) * 100 : 0;

    if (simRole === 'customer') {
      if (simAgeDays <= 7 && simCodFailed >= 1 && simCodSuccess === 0) {
        return {
          status: 'عالي الخطورة (سلوك كيدي لحساب حديث)',
          color: 'red',
          recommendation: 'اشترط الدفع المسبق للشحن (Delivery Pay) حصراً أو لا تقبل الطلب تجنباً لمصاريف الـ Retour.',
          trustLevel: 15
        };
      }
      if (simCodFailed > simCodSuccess && simDeliverySuccess === 0) {
        return {
          status: 'مؤشر أحمر (نسبة رفض وتملص عالية)',
          color: 'red',
          recommendation: 'زبون معتاد على رفض طرود الدفع عند الاستلام. يُنصح بعدم شحن الطلب إلا بعد دفع مصاريف الشحن مسبقاً.',
          trustLevel: 35
        };
      }
      if (simDeliverySuccess >= 2 || (codRate >= 75 && totalCod >= 3)) {
        return {
          status: 'عميل جاد وموصى به للتعامل الفوري',
          color: 'emerald',
          recommendation: 'عميل ذو موثوقية عالية؛ التزم باستلام طروده، وأثبت جديته في الدفع المسبق. شحن فوري وأولوية في المعالجة.',
          trustLevel: 94
        };
      }
      return {
        status: 'حساب عادي قيد التقييم',
        color: 'sky',
        recommendation: 'حساب متوازن؛ تواصل معه عبر الواتساب لتأكيد العنوان والجاهزية قبل الشحن.',
        trustLevel: 65
      };
    } else {
      // Merchant evaluation
      if (simDeliveryFailed >= 3 && (simDeliveryFailed / (simDeliverySuccess + simDeliveryFailed || 1)) > 0.3) {
        return {
          status: 'متجر مشكوك فيه (سجل مخالفات موثقة بالصور)',
          color: 'red',
          recommendation: 'تحذير للمشترين: وردت بلاغات مصورة حية عند الباب عن سلع غير مطابقة. اطلب تفاصيل إضافية قبل الشراء.',
          trustLevel: 25
        };
      }
      if (simDeliverySuccess >= 10 && simDeliveryFailed <= 2) {
        return {
          status: 'متجر موثوق بعلامة ذهبية',
          color: 'emerald',
          recommendation: 'منتجات متطابقة 100% مع الصور الحية ومسجلة بشفافية كاملة في Delivery Pay. تسوق وأنت مطمئن.',
          trustLevel: 98
        };
      }
      return {
        status: 'متجر نشط ضمن المعايير النظامية',
        color: 'sky',
        recommendation: 'متجر يلتزم بالإجراءات القياسية للمنصة ويوفر مسار تتبع فوري.',
        trustLevel: 75
      };
    }
  };

  const simResult = calculateScore();

  return (
    <section id="credibility-profiles" className="py-18 bg-slate-50/70 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>4. نماذج حية لواجهات مؤشرات المصداقية (العملاء والتجار)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            تحويل السلوك الميداني إلى قرارات فورية آمنة
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            تُظهر الشاشات الآتية كيف يحول نظام النقاط البيانات المعقدة إلى شارات بصرية مبسطة تساعد التاجر والمشتري على اتخاذ قرار سريع وآمن دون جداول جافة أو تعقيد.
          </p>
        </div>

        {/* Tab Navigation Pill Buttons */}
        <div className="flex justify-center">
          <div className="p-1.5 rounded-2xl bg-white border border-slate-200 inline-flex flex-wrap gap-2 shadow-xs">
            <button
              onClick={() => setActiveTab('customers')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'customers'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <User className="w-4 h-4" />
              <span>أولاً: واجهات مصداقية العملاء</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === 'customers' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600'
              }`}>3 أمثلة</span>
            </button>

            <button
              onClick={() => setActiveTab('merchants')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'merchants'
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>ثانياً: واجهات مصداقية التجار</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === 'merchants' ? 'bg-sky-700 text-white' : 'bg-slate-100 text-slate-600'
              }`}>مثالان</span>
            </button>

            <button
              onClick={() => setActiveTab('simulator')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'simulator'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-sky-700 hover:text-sky-900 hover:bg-sky-50'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>محاكي النقاط التفاعلي ⚡</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CUSTOMERS PROFILES */}
        {activeTab === 'customers' && (
          <div className="space-y-6">
            <div className="text-right">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>أولاً: واجهات مصداقية العملاء (Customer Credibility Profiles)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                تظهر هذه المؤشرات للتاجر فور استلام طلب الشراء عبر الواتساب أو لوحة التحكم قبل إخراج الطرد لشركة التوصيل.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {CUSTOMER_PROFILES.map((profile, idx) => {
                const isEmerald = profile.type === 'recommended';
                const isAmber = profile.type === 'warning';
                const isRose = profile.type === 'new_suspicious';

                return (
                  <div
                    key={profile.id}
                    className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border bg-white shadow-xs ${
                      isEmerald
                        ? 'border-emerald-300 ring-2 ring-emerald-100/60'
                        : isAmber
                        ? 'border-red-300 ring-2 ring-red-100/60'
                        : 'border-red-400 ring-2 ring-red-100'
                    }`}
                  >
                    <div>
                      {/* Top status bar */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-bold text-slate-400">
                          مثال {idx + 1}
                        </span>
                        {profile.accountAge && (
                          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                            <Clock className="w-3 h-3 text-red-500" />
                            <span>{profile.accountAge}</span>
                          </div>
                        )}
                      </div>

                      {/* Title & Badge */}
                      <h4 className="text-xl font-black text-slate-900 mb-3">
                        {profile.title}
                      </h4>

                      <div className="mb-6">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black ${
                            isEmerald
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                              : isAmber
                              ? 'bg-red-50 text-red-700 border border-red-300'
                              : 'bg-red-50 text-red-700 border border-red-300'
                          }`}
                        >
                          {profile.badge}
                        </span>
                      </div>

                      {/* Metrics Display (Cards with pills, NO tables) */}
                      <div className="space-y-3 mb-6">
                        
                        {/* COD Meter */}
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-700">الدفع عند الاستلام (COD):</span>
                            <div className="flex items-center gap-3 font-extrabold text-sm">
                              <span className="text-emerald-600 flex items-center gap-1">
                                <span>{profile.codSuccess}</span>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </span>
                              <span className="text-slate-300">|</span>
                              <span className="text-red-600 flex items-center gap-1">
                                <span>{profile.codFailed}</span>
                                <XCircle className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                          
                          {/* Visual mini-bar */}
                          <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden flex">
                            <div 
                              className="h-full bg-emerald-500" 
                              style={{ 
                                width: `${(profile.codSuccess + profile.codFailed) > 0 ? (profile.codSuccess / (profile.codSuccess + profile.codFailed)) * 100 : 0}%` 
                              }}
                            />
                            <div 
                              className="h-full bg-red-500" 
                              style={{ 
                                width: `${(profile.codSuccess + profile.codFailed) > 0 ? (profile.codFailed / (profile.codSuccess + profile.codFailed)) * 100 : 0}%` 
                              }}
                            />
                          </div>
                        </div>

                        {/* Delivery Pay Meter */}
                        <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-200 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-sky-900">دفع الشحن المسبق (Delivery Pay):</span>
                            <div className="flex items-center gap-3 font-extrabold text-sm">
                              <span className="text-emerald-600 flex items-center gap-1">
                                <span>{profile.deliveryPaySuccess}</span>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </span>
                              <span className="text-slate-300">|</span>
                              <span className="text-red-600 flex items-center gap-1">
                                <span>{profile.deliveryPayFailed}</span>
                                <XCircle className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>

                          {/* Visual mini-bar */}
                          <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden flex">
                            <div 
                              className="h-full bg-emerald-500" 
                              style={{ 
                                width: `${(profile.deliveryPaySuccess + profile.deliveryPayFailed) > 0 ? (profile.deliveryPaySuccess / (profile.deliveryPaySuccess + profile.deliveryPayFailed)) * 100 : 0}%` 
                              }}
                            />
                            <div 
                              className="h-full bg-red-500" 
                              style={{ 
                                width: `${(profile.deliveryPaySuccess + profile.deliveryPayFailed) > 0 ? (profile.deliveryPayFailed / (profile.deliveryPaySuccess + profile.deliveryPayFailed)) * 100 : 0}%` 
                              }}
                            />
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Field Clarification Callout */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                      <div className="flex items-center gap-1.5 font-black text-slate-900">
                        <Info className="w-3.5 h-3.5 text-sky-600" />
                        <span>التوضيح والتحليل الميداني:</span>
                      </div>
                      <p className="leading-relaxed text-slate-600 font-medium">
                        {profile.explanation}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: MERCHANTS PROFILES */}
        {activeTab === 'merchants' && (
          <div className="space-y-6">
            <div className="text-right">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                <span>ثانياً: واجهات مصداقية التجار (Merchant Credibility Profiles)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                تظهر هذه المؤشرات بوضوح للمشتري في صفحة المتجر وبجوار كل منتج قبل إتمام الشراء، لحمايته من الصور المزيفة والتجار المحتالين.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {MERCHANT_PROFILES.map((profile, idx) => {
                const isTrusted = profile.type === 'trusted_gold';

                return (
                  <div
                    key={profile.id}
                    className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border bg-white shadow-xs ${
                      isTrusted
                        ? 'border-emerald-300 ring-2 ring-emerald-100/60'
                        : 'border-red-400 ring-2 ring-red-100'
                    }`}
                  >
                    <div>
                      {/* Top indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-slate-400">مثال {idx + 1}</span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${
                            isTrusted
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                              : 'bg-red-50 text-red-700 border border-red-300'
                          }`}
                        >
                          {profile.badge}
                        </span>
                      </div>

                      <h4 className="text-2xl font-black text-slate-900 mb-6">
                        {profile.title}
                      </h4>

                      {/* Visual Credibility Gauge Badges (NO tables) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        
                        {/* COD Card */}
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                          <span className="text-xs font-bold text-slate-700 block">
                            سجل الدفع عند الاستلام (COD)
                          </span>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-emerald-600 font-black text-lg">
                              <span>{profile.codSuccess}</span>
                              <span className="text-xs font-normal text-slate-500">ناجح</span>
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <span className="text-slate-300 font-bold">/</span>
                            <div className="flex items-center gap-1.5 text-red-600 font-black text-lg">
                              <span>{profile.codFailed}</span>
                              <span className="text-xs font-normal text-slate-500">مرفوض</span>
                              <XCircle className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="text-[11px] text-slate-500">
                            نسبة نجاح التسليم: {Math.round((profile.codSuccess / (profile.codSuccess + profile.codFailed)) * 100)}%
                          </div>
                        </div>

                        {/* Delivery Pay Card */}
                        <div className={`p-4 rounded-2xl bg-sky-50/50 border space-y-3 ${
                          isTrusted ? 'border-sky-200' : 'border-red-300 bg-red-50/30'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-sky-900">
                              نقاط Delivery Pay الحية
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                              تصوير باب المنزل
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-emerald-600 font-black text-lg">
                              <span>{profile.deliveryPaySuccess}</span>
                              <span className="text-xs font-normal text-slate-500">مطابق</span>
                              <ThumbsUp className="w-4 h-4" />
                            </div>
                            <span className="text-slate-300 font-bold">/</span>
                            <div className="flex items-center gap-1.5 text-red-600 font-black text-lg">
                              <span>{profile.deliveryPayFailed}</span>
                              <span className="text-xs font-normal text-slate-500">مخالف</span>
                              <ThumbsDown className="w-4 h-4" />
                            </div>
                          </div>
                          
                          <div className="text-[11px] font-semibold">
                            {isTrusted ? (
                              <span className="text-emerald-700">23 نقطة إيجابية تثبت جودة السلع</span>
                            ) : (
                              <span className="text-red-700 font-bold">5 صور وبلاغات حية لمخالفات عند الباب</span>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Field Clarification */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 space-y-2">
                      <div className="flex items-center gap-2 font-black text-slate-900">
                        <Info className="w-4 h-4 text-sky-600" />
                        <span>التوضيح والتحليل الميداني:</span>
                      </div>
                      <p className="leading-relaxed text-slate-600 font-medium">
                        {profile.explanation}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: INTERACTIVE CREDIBILITY SIMULATOR */}
        {activeTab === 'simulator' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>محاكي خوارزمية AHM الذكية</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  جرّب إدخال أي أرقام وشاهد كيف يقيم النظام التاجر أو العميل فوراً
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  نظام رقمي موضوعي يحمي رأس مال التجار ويمنح الزبون النزيه المكانة التي يستحقها.
                </p>
              </div>

              {/* Role Switcher */}
              <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200 shrink-0">
                <button
                  onClick={() => setSimRole('customer')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    simRole === 'customer'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  تقييم عميل 👤
                </button>
                <button
                  onClick={() => setSimRole('merchant')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    simRole === 'merchant'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  تقييم متجر ⭐️
                </button>
              </div>
            </div>

            {/* Simulator Inputs & Live Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Sliders & Controls */}
              <div className="space-y-5">
                
                {/* COD Success */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-emerald-700">طلبات COD ناجحة ومستلمة:</span>
                    <span className="text-slate-900 font-mono font-black">{simCodSuccess} طلب</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={simCodSuccess}
                    onChange={(e) => setSimCodSuccess(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                {/* COD Failed with RED highlight */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-red-600">طلبات COD مرفوضة أو ملغاة عند الباب:</span>
                    <span className="text-red-700 font-mono font-black">{simCodFailed} طلب</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={simCodFailed}
                    onChange={(e) => setSimCodFailed(Number(e.target.value))}
                    className="w-full accent-red-500 cursor-pointer"
                  />
                </div>

                {/* Delivery Pay Success */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-sky-700">نقاط Delivery Pay إيجابية (دفع مسبق واستلام):</span>
                    <span className="text-slate-900 font-mono font-black">{simDeliverySuccess} نقطة (+1)</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={simDeliverySuccess}
                    onChange={(e) => setSimDeliverySuccess(Number(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                </div>

                {/* Delivery Pay Failed with RED highlight */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-red-600">نقاط Delivery Pay سلبية (تصوير مخالفة عند الباب):</span>
                    <span className="text-red-700 font-mono font-black">{simDeliveryFailed} نقطة (-1)</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={simDeliveryFailed}
                    onChange={(e) => setSimDeliveryFailed(Number(e.target.value))}
                    className="w-full accent-red-500 cursor-pointer"
                  />
                </div>

                {simRole === 'customer' && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-700">عمر الحساب منذ التوثيق:</span>
                      <span className="text-slate-900 font-mono font-black">{simAgeDays} يوم</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="180"
                      value={simAgeDays}
                      onChange={(e) => setSimAgeDays(Number(e.target.value))}
                      className="w-full accent-sky-500 cursor-pointer"
                    />
                  </div>
                )}

              </div>

              {/* Real-time Computed Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  النتيجة التحليلية الحية
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-500">المؤشر الحالي:</div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                      {simResult.status}
                    </div>
                  </div>

                  <div className="text-center p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-2xl font-black text-emerald-600 font-mono">
                      {simResult.trustLevel}%
                    </div>
                    <div className="text-[10px] text-slate-500">معدل الثقة</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-3 rounded-full bg-slate-200 p-0.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      simResult.trustLevel > 70
                        ? 'bg-emerald-500'
                        : simResult.trustLevel > 40
                        ? 'bg-sky-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${simResult.trustLevel}%` }}
                  />
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
                  <div className="text-xs font-bold text-sky-800 flex items-center gap-1.5">
                    <BadgeAlert className="w-4 h-4 text-sky-600" />
                    <span>التوصية الميدانية للتاجر أو المشتري:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {simResult.recommendation}
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
