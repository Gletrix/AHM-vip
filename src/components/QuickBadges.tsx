import React from 'react';
import { Zap, UserCheck, Camera, ShieldCheck, Scale, ExternalLink } from 'lucide-react';

interface QuickBadgesProps {
  activeBadge: string | null;
  onSelectBadge: (id: string) => void;
}

export const QuickBadges: React.FC<QuickBadgesProps> = ({ activeBadge, onSelectBadge }) => {
  const badges = [
    {
      id: 'feature-safe-shopping',
      label: '⚡ تسوّق آمن، مخصّص و سريع',
      icon: Zap,
      tag: 'مساران للتصفح',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 'feature-identity-verification',
      label: '🪪 توثيق هويّة العملاء',
      icon: UserCheck,
      tag: 'SIM + WhatsApp',
      tagColor: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      id: 'feature-live-camera',
      label: '📸 نظام تتبع صور حيّة للمنتجات | 🚫 لا يتسامح AHM مع الغشّ',
      icon: Camera,
      tag: 'كاميرا المتصفح',
      tagColor: 'bg-red-50 text-red-700 border-red-200'
    },
    {
      id: 'feature-delivery-pay',
      label: '🛡️ حماية حقوق الزبون | مزايا اختيار Delivery Pay',
      icon: ShieldCheck,
      tag: 'BaridiMob / CCP',
      tagColor: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      id: 'feature-honest-seller',
      label: '⚖️ نظام حماية البائع الصادق & نظام ردع التاجر الغشاش',
      icon: Scale,
      tag: 'قواعد COD و Delivery Pay',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  ];

  return (
    <section id="quick-nav" className="py-7 bg-slate-50/80 border-y border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
              2. شريط العناوين السريعة (Quick Navigation Badges)
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            انقر على أي شارة للانتقال المباشر إلى الشرح الميداني ومعالجة الألم
          </span>
        </div>

        {/* Fluid badge list */}
        <div className="flex flex-wrap items-center gap-2.5">
          {badges.map((b) => {
            const isActive = activeBadge === b.id;

            return (
              <button
                key={b.id}
                onClick={() => onSelectBadge(b.id)}
                className={`group flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer text-right ${
                  isActive
                    ? 'bg-sky-50 border-sky-400 text-sky-800 shadow-xs ring-2 ring-sky-300/50'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-950 shadow-2xs'
                }`}
              >
                <span className="text-sky-600 group-hover:scale-110 transition-transform">
                  🔗
                </span>
                <span>{b.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${b.tagColor}`}>
                  {b.tag}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

