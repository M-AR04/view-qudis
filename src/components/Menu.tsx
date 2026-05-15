"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Egg, 
  Salad, 
  Flame, 
  Beef, 
  Utensils, 
  CupSoda, 
  Coffee, 
  IceCream, 
  Wind, 
  Plus, 
  Sparkles 
} from "lucide-react";
import { menuData } from "../lib/menuData";


export default function Menu() {
  const { t, language, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("breakfast");

  const categories = [
    { id: "breakfast", label: t("menu.categories.breakfast"), icon: <Egg size={18} /> },
    { id: "coldAppetizers", label: t("menu.categories.coldAppetizers"), icon: <Salad size={18} /> },
    { id: "hotAppetizers", label: t("menu.categories.hotAppetizers"), icon: <Utensils size={18} /> },
    { id: "grills", label: t("menu.categories.grills"), icon: <Flame size={18} /> },
    { id: "mains", label: t("menu.categories.mains"), icon: <Beef size={18} /> },
    { id: "coldDrinks", label: t("menu.categories.coldDrinks"), icon: <CupSoda size={18} /> },
    { id: "hotDrinks", label: t("menu.categories.hotDrinks"), icon: <Coffee size={18} /> },
    { id: "desserts", label: t("menu.categories.desserts"), icon: <IceCream size={18} /> },
    { id: "shisha", label: t("menu.categories.shisha"), icon: <Wind size={18} /> },
    { id: "addons", label: t("menu.categories.addons"), icon: <Plus size={18} /> },
  ];

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-[#0c0b09]">
      {/* Design Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,146,45,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold text-gold-400 tracking-[0.3em] uppercase font-outfit mb-3 block">
            {t("menu.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold-100 font-tajawal">
            {t("menu.title")}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent my-5 mx-auto" />
        </div>

        {/* Sticky category tabs wrapper */}
        <div className="flex justify-start lg:justify-center overflow-x-auto pb-6 mb-12 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 gap-3 md:gap-4">
          {categories.map((cat) => {
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 cursor-pointer border ${
                  active
                    ? "bg-gold-400 text-[#0e0c0a] border-gold-400 shadow-[0_4px_20px_rgba(212,146,45,0.3)]"
                    : "bg-white/[0.02] border-white/[0.08] text-beige-200/70 hover:text-gold-300 hover:border-gold-500/30"
                }`}
              >
                <span className={active ? "text-[#0e0c0a]" : "text-gold-400"}>{cat.icon}</span>
                <span className="font-tajawal">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid with AnimatePresence */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {menuData[activeTab].map((item, idx) => {
                const name = language === "ar" ? item.nameAr : item.nameEn;
                const desc = language === "ar" ? item.descAr : item.descEn;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="group flex flex-col border-b border-white/[0.06] pb-6 hover:border-gold-400/30 transition-colors"
                  >
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                      <h4 className="text-lg md:text-xl font-semibold text-beige-100 font-tajawal group-hover:text-gold-300 transition-colors flex items-center gap-2">
                        {name}
                        {item.isPopular && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gold-400/10 text-gold-400 border border-gold-400/20">
                            <Sparkles size={10} className="mr-1" />
                            {isRTL ? "مميز" : "Chef's Choice"}
                          </span>
                        )}
                      </h4>
                      {/* Dotted separator */}
                      <div className="flex-grow border-b border-dotted border-beige-200/20 mx-2 h-0 min-w-[20px] hidden sm:block" />
                      <span className="text-gold-400 font-bold font-outfit whitespace-nowrap">
                        {item.price} {isRTL ? "د.أ" : "JOD"}
                      </span>
                    </div>
                    {desc && (
                      <p className="text-sm text-beige-300/60 font-light leading-relaxed line-clamp-2 font-tajawal group-hover:text-beige-300/90 transition-colors">
                        {desc}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA bottom to menu booking */}
        <div className="mt-16 text-center">
          <p className="text-sm text-beige-300/50 italic font-serif mb-4">
            * {isRTL ? "تخضع الأسعار لضريبة المبيعات وخدمة الصالة الفاخرة" : "Prices are subject to sales tax and luxury lounge service charge."}
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-gold-400 font-bold hover:text-gold-300 transition-colors pb-1 border-b border-gold-400/50 hover:border-gold-300 group"
          >
            <span className="font-tajawal">{t("menu.orderNow")}</span>
            <span className={`transform group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`}>
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
