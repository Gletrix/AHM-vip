/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickBadges } from './components/QuickBadges';
import { FeatureDetail } from './components/FeatureDetail';
import { CredibilityShowcase } from './components/CredibilityShowcase';
import { OrderLifecycle } from './components/OrderLifecycle';
import { BusinessStructure } from './components/BusinessStructure';
import { FAQSection } from './components/FAQSection';
import { ConversionSection } from './components/ConversionSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  const handleJoinClick = () => {
    const el = document.getElementById('join-now');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('quick-nav');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectBadge = (id: string) => {
    setActiveBadge(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onJoinClick={handleJoinClick} />

      {/* 1. الواجهة الرئيسية (Hero Section) */}
      <Hero 
        onJoinClick={handleJoinClick} 
        onExploreClick={handleExploreClick} 
      />

      {/* 2. شريط العناوين السريعة (Quick Navigation Badges) */}
      <QuickBadges 
        activeBadge={activeBadge} 
        onSelectBadge={handleSelectBadge} 
      />

      {/* 3. الشرح التفصيلي للميزات (مع معالجة الألم الميداني) */}
      <FeatureDetail activeBadge={activeBadge} />

      {/* 4. نماذج حية لواجهات مؤشرات المصداقية (العملاء والتجار) */}
      <CredibilityShowcase />

      {/* 5. تنظيم وتتبع سير الطلبيات الآلي */}
      <OrderLifecycle />

      {/* 6. النموذج التنظيمي والتأسيسي (Business Structure) */}
      <BusinessStructure onJoinClick={handleJoinClick} />

      {/* 7. الأسئلة الشائعة والإجراءات التفصيلية (FAQ & Operating Rules) */}
      <FAQSection />

      {/* 8. رابط الانضمام المباشر (Conversion Section) */}
      <ConversionSection />

      {/* Footer */}
      <Footer />

      {/* Floating CTA for WhatsApp */}
      <FloatingWhatsApp onJoinClick={handleJoinClick} />
    </div>
  );
}
