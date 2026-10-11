import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Store, 
  User, 
  Search
} from 'lucide-react';
import { MERCHANT_FAQS, BUYER_FAQS } from '../data/landingData';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'merchants' | 'buyers'>('merchants');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'merch-0': true,
    'buyer-0': true
  });

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const expandAll = () => {
    const newOpens: { [key: string]: boolean } = {};
    if (activeCategory === 'merchants') {
      MERCHANT_FAQS.forEach((_, i) => { newOpens[`merch-${i}`] = true; });
    } else {
      BUYER_FAQS.forEach((_, i) => { newOpens[`buyer-${i}`] = true; });
    }
    setOpenItems(newOpens);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const currentList = activeCategory === 'merchants' ? MERCHANT_FAQS : BUYER_FAQS;
  const prefix = activeCategory === 'merchants' ? 'merch' : 'buyer';

  const filteredList = currentList.filter(item => 
    item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="py-18 bg-slate-50/70 relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold shadow-2xs">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>7. الأسئلة الشائعة والإجراءات التفصيلية (FAQ & Operating Rules)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            دليل القواعد التشغيلية الشاملة والإجابات الميدانية
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            وضوح تام لكل سيناريو ميداني قد يواجه التاجر أو المشتري، لضمان تجارة عادلة مبنية على الحقائق.
          </p>
        </div>

        {/* Tab Selection & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex p-1.5 rounded-2xl bg-white border border-slate-200 w-full sm:w-auto shadow-2xs">
            <button
              onClick={() => setActiveCategory('merchants')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === 'merchants'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>أولاً: أسئلة وإجراءات التجار ({MERCHANT_FAQS.length})</span>
            </button>

            <button
              onClick={() => setActiveCategory('buyers')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === 'buyers'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <User className="w-4 h-4" />
              <span>ثانياً: أسئلة وإجراءات المشترين ({BUYER_FAQS.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="بحث سريع في الأسئلة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 outline-none shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={expandAll}
                className="px-2.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-xs text-slate-700 font-bold border border-slate-200 cursor-pointer shadow-2xs"
                title="فتح الكل"
              >
                فتح
              </button>
              <button
                onClick={collapseAll}
                className="px-2.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-xs text-slate-700 font-bold border border-slate-200 cursor-pointer shadow-2xs"
                title="طي الكل"
              >
                طي
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Items Accordion on White Cards */}
        <div className="space-y-3.5">
          {filteredList.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white border border-slate-200 text-slate-500">
              لم يتم العثور على سؤال يطابق بحثك. جرّب كلمات أخرى.
            </div>
          ) : (
            filteredList.map((item, index) => {
              const key = `${prefix}-${index}`;
              const isOpen = !!openItems[key];

              return (
                <div
                  key={key}
                  className={`rounded-2xl transition-all duration-200 border overflow-hidden bg-white ${
                    isOpen
                      ? 'border-sky-400 ring-2 ring-sky-50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(key)}
                    className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-xs font-black text-sky-700 shrink-0">
                        {index + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {item.q}
                      </h3>
                    </div>

                    <div className={`p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-600 bg-sky-50 border-sky-200' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-0 border-t border-slate-100">
                      <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 mt-3 text-slate-700 text-sm leading-relaxed font-medium">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
