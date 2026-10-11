import React, { useState } from 'react';
import { 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Store, 
  MapPin, 
  ShoppingBag, 
  CheckCircle2
} from 'lucide-react';
import { ALGERIAN_WILAYAS } from '../data/landingData';

export const ConversionSection: React.FC = () => {
  const [storeName, setStoreName] = useState<string>('');
  const [wilaya, setWilaya] = useState<string>('16 - الجزائر العاصمة');
  const [productType, setProductType] = useState<string>('ألبسة وأحذية');
  const [copied, setCopied] = useState<boolean>(false);

  // Exact requested WhatsApp message template:
  const getPreparedMessage = () => {
    return `مرحباً AHM، أريد الانضمام لقائمة الانتظار وحجز مكاني ضمن أول 100 تاجر مؤسس.
- اسم المتجر: ${storeName.trim() || '__________'}
- الولاية: ${wilaya}
- نوع المنتجات: ${productType.trim() || '__________'}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getPreparedMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(getPreparedMessage());
    const url = `https://api.whatsapp.com/send?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="join-now" className="py-18 bg-white relative border-t border-slate-200">
      
      {/* Delicate ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-100/60 to-sky-100/60 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>8. رابط الانضمام المباشر (Conversion Section)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            احجز مقعدك الآن بين أول 100 تاجر مؤسس في الجزائر
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            املأ بياناتك أدناه لتجهيز رسالتك فورياً، وانقر للانضمام المباشر عبر الواتساب للاستفادة من شهرين مجاناً ووسام التأسيس.
          </p>
        </div>

        {/* Interactive Pre-fill & Conversion Card on Pure White */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-emerald-300 ring-4 ring-emerald-50 shadow-xl space-y-8">
          
          {/* Input fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Store Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Store className="w-4 h-4 text-emerald-600" />
                <span>اسم المتجر:</span>
              </label>
              <input
                type="text"
                placeholder="مثال: Boutique El Bahdja"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-sky-500 outline-none"
              />
            </div>

            {/* Wilaya (58 wilayas) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>الولاية:</span>
              </label>
              <select
                value={wilaya}
                onChange={(e) => setWilaya(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-sky-500 outline-none cursor-pointer"
              >
                {ALGERIAN_WILAYAS.map(w => (
                  <option key={w} value={w} className="bg-white text-slate-900">
                    {w}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-teal-600" />
                <span>نوع المنتجات:</span>
              </label>
              <input
                type="text"
                placeholder="مثال: ألبسة، إلكترونيات، مستحضرات تجميل..."
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-sky-500 outline-none"
              />
            </div>

          </div>

          {/* Formatted Message Preview Box */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-sky-700 flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-sky-600" />
                <span>الرسالة المجهزة تلقائياً عند النقر:</span>
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs text-slate-700 font-bold transition-all cursor-pointer shadow-2xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">تم النسخ بنجاح!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>نسخ النص</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed select-all shadow-2xs">
              {getPreparedMessage()}
            </div>
          </div>

          {/* Primary CTA Button matching the exact prompt request */}
          <div className="space-y-4">
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full inline-flex items-center justify-center gap-3 py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-black text-base sm:text-xl shadow-lg shadow-emerald-500/25 active:scale-[0.99] transition-all cursor-pointer border border-emerald-400/40"
            >
              <MessageCircle className="w-6 h-6 shrink-0" />
              <span>[ الانضمام لقائمة الانتظار وحجز مكان ضمن 100 تاجر مؤسس عبر الواتساب 🚀 ]</span>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>تأكيد فوري عبر الواتساب</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>شهران مجاناً للمؤسسين</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span className="text-red-700">0 دج عمولة على المرتجع</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
