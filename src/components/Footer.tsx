"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";
import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0807] text-[#ebece9] py-16 relative overflow-hidden border-t border-gold-900/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Brand Logo Large */}
        <div className="flex flex-col items-center mb-10 text-center group">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-gold-400/30 mb-4 group-hover:border-gold-400 transition-colors">
            <Image
              src="/view-qudis.png"
              alt="طلة القدس"
              fill
              className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
              sizes="80px"
            />
          </div>
          <h2 className="text-2xl font-serif font-bold text-gold-100 tracking-wider font-tajawal mb-1">
            طلة القدس
          </h2>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400/60 font-outfit font-light">
            View Alquds Restaurant
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 mb-12">
          <a
            href="https://www.instagram.com/view_alquds"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-beige-300 hover:text-gold-400 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://wa.me/962798111137"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-beige-300 hover:text-gold-400 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-beige-300 hover:text-gold-400 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
        </div>

        {/* Bottom Info Row */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-center gap-4 text-xs text-beige-300/40 font-outfit">
          <p className="font-tajawal tracking-wide">
            &copy; {currentYear} {t("hero.titleAr")} | {t("hero.title")}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2 text-gold-400/50">
            <span className="font-tajawal">{t("footer.by")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
