import React from 'react';
import { 
  Zap, 
  Smartphone, 
  Camera, 
  CreditCard, 
  Scale, 
  CheckCircle2, 
  AlertTriangle, 
  QrCode, 
  ShieldCheck, 
  Layers, 
  Store, 
  ListTree,
  WifiOff,
  Flame,
  AlertCircle
} from 'lucide-react';

interface FeatureDetailProps {
  activeBadge: string | null;
}

export const FeatureDetail: React.FC<FeatureDetailProps> = ({ activeBadge }) => {
  return (
    <section id="features-deep" className="py-18 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-sky-600" />
            <span>3. الشرح التفصيلي للميزات (مع معالجة الألم الميداني)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            حلول هندسية ميدانية صُممت لإنهاء مشاكل التجارة في الجزائر
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            لا نكتفي بتقديم ميزات برمجية نظرية، بل نعالج بالدقة كل نقطة نزيف مالي وعملياتي واجهها التاجر والمشتري في السوق المحلي.
          </p>
        </div>

        {/* Feature Cards Stack */}
        <div className="space-y-10">

          {/* أ. تسوّق آمن، مخصّص و سريع */}
          <div 
            id="feature-safe-shopping" 
            className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 shadow-xs ${
              activeBadge === 'feature-safe-shopping' 
                ? 'border-emerald-400 ring-4 ring-emerald-100 shadow-lg' 
                : 'border-slate-200 hover:border-emerald-300'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <Zap className="w-7 h-7" />
              </div>
              
              <div className="flex-1 space-y-5">
                <div>
                  <div className="text-xs font-extrabold text-emerald-600 tracking-wider mb-1">الميزة (أ)</div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    تسوّق آمن، مخصّص و سريع
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    تتيح المنصة مسارين لتصفح المنتجات والمتاجر لتلبية مختلف سلوكيات الشراء:
                  </p>
                </div>

                {/* The Two Paths (Fluid White Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-emerald-300 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-emerald-100/70 text-emerald-700">
                        <Store className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900">دليل المتاجر (Store Directory)</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      يمنح التاجر مساحة مستقلة تعرض برانده ومنتجاته فقط، لتفادي تشتيت الزبون بإعلانات المنافسين.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-sky-300 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-sky-100/70 text-sky-700">
                        <ListTree className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900">فهرس المنتجات (Product Catalog)</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      تنظيم دقيق عبر فئات رئيسية وفرعية وتخصصات دقيقة، لتوصيل الزبون الذي يبحث عن قطعة محددة إلى منتجك مباشرة دون الحاجة لاستنزاف الميزانية في مزادات الإعلانات الممولة.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ب. توثيق هويّة العملاء */}
          <div 
            id="feature-identity-verification" 
            className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 shadow-xs ${
              activeBadge === 'feature-identity-verification' 
                ? 'border-sky-400 ring-4 ring-sky-100 shadow-lg' 
                : 'border-slate-200 hover:border-sky-300'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                <Smartphone className="w-7 h-7" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <div className="text-xs font-extrabold text-sky-600 tracking-wider mb-1">الميزة (ب)</div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    توثيق هويّة العملاء
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    ربط بروتوكول فتح الحسابات وتأكيد الطلبات آلياً برقم هاتف الـ SIM المحلي عبر تطبيق WhatsApp.
                  </p>
                </div>

                {/* الألم المعالج Callout with RED HIGHLIGHT */}
                <div className="p-4 sm:p-5 rounded-2xl bg-red-50 border-2 border-red-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-extrabold text-sm">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>الألم المعالج الميداني (Red Highlight):</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    القضاء على مشكلة الحسابات الوهمية والطلبات الكيدية على شبكات التواصل الاجتماعي، والتي كانت تتسبب في خروج طرود لزبائن غير موجودين وتحميل التاجر رسوم شحن مجانية.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ج. نظام تتبع صور حيّة للمنتجات */}
          <div 
            id="feature-live-camera" 
            className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 shadow-xs ${
              activeBadge === 'feature-live-camera' 
                ? 'border-red-400 ring-4 ring-red-100 shadow-lg' 
                : 'border-slate-200 hover:border-red-300'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                <Camera className="w-7 h-7" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <div className="text-xs font-extrabold text-sky-600 tracking-wider mb-1">الميزة (ج)</div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      نظام تتبع صور حيّة للمنتجات
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-red-50 border border-red-300 text-red-700 text-xs font-black">
                      📸 لا يتسامح AHM مع الغشّ | بدون تعديل
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    تعتمد المنصة على فتح كاميرا المتصفح المباشرة لالتقاط صورة حية للمنتج عند إضافته من طرف التاجر، بدلاً من رفع صور من المعرض.
                  </p>
                </div>

                {/* الألم المعالج Callout with RED HIGHLIGHT */}
                <div className="p-4 sm:p-5 rounded-2xl bg-red-50 border-2 border-red-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-extrabold text-sm">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>الألم المعالج الميداني (Red Highlight):</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    إنهاء التنافس غير الشريف مع أصحاب الصور المستوردة والمعدلة بتطبيقات الفوتوشوب، والتي كانت تصدم الزبون عند الاستلام وتتسبب في رفض الطرد وفقدان الثقة في الشراء الإلكتروني.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* د. حماية حقوق الزبون ومزايا اختيار Delivery Pay */}
          <div 
            id="feature-delivery-pay" 
            className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 shadow-xs ${
              activeBadge === 'feature-delivery-pay' 
                ? 'border-sky-400 ring-4 ring-sky-100 shadow-lg' 
                : 'border-slate-200 hover:border-sky-300'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                <CreditCard className="w-7 h-7" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <div className="text-xs font-extrabold text-sky-600 tracking-wider mb-1">الميزة (د)</div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    حماية حقوق الزبون ومزايا اختيار Delivery Pay
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    يتيح هذا الخيار للمشتري دفع مصاريف الشحن مسبقاً عبر وسائط الدفع المعتمدة <span className="font-bold text-slate-900">(BaridiMob / CCP / Sofizpay)</span>، مع احتفاظ التاجر بالحرية الكاملة لتحديد قيمة الخصم التشجيعي الذي يمنحه للزبون على سعر السلعة.
                  </p>
                </div>

                {/* الألم المعالج Callout with RED HIGHLIGHT */}
                <div className="p-4 sm:p-5 rounded-2xl bg-red-50 border-2 border-red-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-extrabold text-sm">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-red-600" />
                    <span>الألم المعالج الميداني (Red Highlight):</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    حماية هامش ربح التاجر من ظاهرة <span className="text-red-700 font-black">"غيرت رأيي عند باب المنزل"</span>، حيث تكون تكلفة التوصيل مغطاة بالكامل مسبقاً، وفي المقابل يحصل الزبون الجاد على خفض ملموس وأولوية في معالجة طلبيه.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* هـ. نظام حماية البائع الصادق ونظام ردع التاجر الغشاش */}
          <div 
            id="feature-honest-seller" 
            className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 shadow-xs ${
              activeBadge === 'feature-honest-seller' 
                ? 'border-emerald-400 ring-4 ring-emerald-100 shadow-lg' 
                : 'border-slate-200 hover:border-emerald-300'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <Scale className="w-7 h-7" />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <div className="text-xs font-extrabold text-emerald-600 tracking-wider mb-1">الميزة (هـ)</div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    نظام حماية البائع الصادق ونظام ردع التاجر الغشاش (نظام النقاط الإيجابية والسلبية)
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    قواعد محددة وشفافة تفصل بين طلبات الدفع عند الاستلام (COD) وطلبات الدفع المسبق للشحن (Delivery Pay) لبناء سمعة موثوقة:
                  </p>
                </div>

                {/* Sub-breakdown Delivery Pay vs COD (Fluid comparative cards) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Delivery Pay Rules (Sky blue theme) */}
                  <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-sky-200/80 pb-3">
                      <span className="font-black text-slate-900 text-base">في حالات Delivery Pay:</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 font-bold border border-sky-200">
                        دفع الشحن المسبق
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <div className="text-xs font-bold text-emerald-700 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>النقاط الإيجابية:</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          عند استلام الزبون للطلب ومطابقته للمواصفات مع مسح الـ QR Code، يحصل المتجر والزبون على <strong className="text-emerald-700 font-black">(+1 نقطة إيجابية)</strong>.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-red-200 shadow-2xs">
                        <div className="text-xs font-bold text-red-600 mb-1 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span>النقاط السلبية (Highlight بالأحمر):</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          يحق للمشتري عند وصول منتج مخالف التقاط صورة حية للمنتج عند الباب (حتى عند انقطاع الإنترنت عبر ميزة الحفظ والتمرير الآلي)، وتسجيل <strong className="text-red-600 font-black">(-1 نقطة سلبية)</strong> في خانة Delivery Pay على بروفايل المتجر مع إظهار الصورة علناً للجمهور.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-sky-100/70 border border-sky-200 text-xs text-sky-900 leading-relaxed">
                        <strong className="font-bold">الألم المعالج:</strong> ردع التجار الغشاشين بشفافية علنية، مع حماية البائع الصادق من التجميد الآلي المباشر الذي قد يستغله المنافسون الحاقدون عبر بلاغات كيدية.
                      </div>
                    </div>
                  </div>

                  {/* COD Rules (Light green theme) */}
                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                      <span className="font-black text-slate-900 text-base">في حالات COD:</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                        الدفع عند الاستلام
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <div className="text-xs font-bold text-emerald-700 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>النقاط الإيجابية:</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          يحصل الزبون الذي يستلم طرده ويمسح الـ QR على <strong className="text-emerald-700 font-black">(+1 نقطة ثقة إيجابية)</strong> في حسابه.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-red-200 shadow-2xs">
                        <div className="text-xs font-bold text-red-600 mb-1 flex items-center gap-1.5">
                          <Scale className="w-4 h-4 text-red-600" />
                          <span>النقاط السلبية (Highlight بالأحمر):</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          يقتصر حق التقييم للمشتري على التقييم الإيجابي فقط عند الاستلام. وفي حال كذب الزبون وادعائه الاستلام دون دفع، يرفع التاجر بلاغاً يتسبب في خصم تلقائي لـ <strong className="text-red-600 font-black">(-3 طلبات مرفوضة)</strong> في سجل الزبون.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-100/70 border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
                        <strong className="font-bold">الألم المعالج:</strong> حماية التجار من ادعاءات زبائن الـ COD الذين لم يدفعوا شيئاً من جيبهم، ومنع استغلال نظام التقييم الكيدي ضد المتاجر.
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

