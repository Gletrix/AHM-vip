import React from 'react';
import { 
  GitBranch, 
  Smartphone, 
  CreditCard, 
  QrCode, 
  Camera, 
  FileCheck
} from 'lucide-react';

export const OrderLifecycle: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'إنشاء الطلب وتأكيد الهوية الآلي',
      desc: 'بمجرد اختيار العميل للمنتج، يوثق النظام الطلب فوراً برقم هاتف الـ SIM عبر تطبيق WhatsApp للقضاء على الحسابات الوهمية والعناوين الكيدية.',
      icon: Smartphone,
      accent: 'emerald',
      bgIcon: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      step: '02',
      title: 'اختيار مسار الدفع (Delivery Pay أم COD)',
      desc: 'إما دفع مصاريف الشحن مسبقاً (Delivery Pay) والحصول على تخفيض مباشر في سعر السلعة، أو اختيار الدفع عند الاستلام مع فحص مؤشر مصداقية الزبون.',
      icon: CreditCard,
      accent: 'sky',
      bgIcon: 'bg-sky-50 text-sky-600 border-sky-200'
    },
    {
      step: '03',
      title: 'تجهيز ملصق الـ QR Code الذكي',
      desc: 'يولد النظام ملصق الطرد برمز QR فريد لمنع التداخل؛ يمكن للتاجر إرساله بضغطة زر إلى السيبر (Cyber Café) عبر واتساب لطباعته في ورقة A4 بتكلفة 10-20 دج فقط.',
      icon: QrCode,
      accent: 'sky',
      bgIcon: 'bg-sky-50 text-sky-600 border-sky-200'
    },
    {
      step: '04',
      title: 'التسليم عند الباب والفحص الحي (أوفلاين أو أونلاين)',
      desc: 'في حالات Delivery Pay، يحق للمشتري فحص الطرد ومسح الرمز، وفي حال وجود عيب يلتقط صورة حية عند الباب (تُحفظ مشفرة في متصفحه أوفلاين وتُرفع تلقائياً عند عودة النت).',
      icon: Camera,
      accent: 'red',
      bgIcon: 'bg-red-50 text-red-600 border-red-200'
    },
    {
      step: '05',
      title: 'التسوية المالية وتحديث شارات السمعة',
      desc: 'إضافة (+1) لرصيد الزبون والمتجر في العمليات الناجحة، واقتطاع عمولة الأداء (30 دج أو 20 دج) فقط، و0 دج على المرتجعات دون أي خصم جائر.',
      icon: FileCheck,
      accent: 'emerald',
      bgIcon: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  return (
    <section id="order-lifecycle" className="py-18 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold">
            <GitBranch className="w-4 h-4 text-sky-600" />
            <span>5. تنظيم وتتبع سير الطلبيات الآلي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            دورة طلب رقمية متكاملة تحمي كل دينار
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            تتمتع منصة AHM بنظام ذكي يعالج مختلف الحالات والإجراءات التشغيلية آلياً؛ حيث ينظم خطى الطلب من لحظة إنشائه وحتى وصوله وتصفية حسابه، مما يضمن سير العملية بسلاسة وحماية كاملة لحقوق الطرفين دون تدخل يدوي معقد.
          </p>
        </div>

        {/* Fluid Vertical Roadmap on White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-sky-500 transition-colors">
                      {s.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform ${s.bgIcon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-400">أتمتة كاملة</span>
                  <span className="text-emerald-700">100% شفافية</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on FAQ reference */}
        <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 text-center max-w-2xl mx-auto shadow-2xs">
          <p className="text-xs text-sky-900 font-semibold">
            💡 يمكن للتاجر والزبون الاطلاع على التفاصيل الإجرائية الشاملة لكل حالة قد تخطر بالبال في فقرة <a href="#faqs" className="text-sky-700 font-black underline underline-offset-4">الأسئلة الشائعة في الأسفل</a>.
          </p>
        </div>

      </div>
    </section>
  );
};
