"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion, Variants } from "framer-motion";
import { MessageSquare, CalendarRange, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { t, isRTL } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Cinematic Image Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero_bg.png"
          alt="Panoramic sunset view"
          fill
          priority
          className="object-cover object-center brightness-75"
          sizes="100vw"
        />
      </motion.div>

      {/* Advanced Overlays & Lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a] via-black/40 to-black/30 z-10" />
      <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, rgba(212, 146, 45, 0.1), transparent 70%) mix-blend-screen z-10" />
      
      {/* Floating particles simulating mountain fog embers */}
      <div className="absolute inset-0 z-10 pointer-events-none islamic-pattern" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 md:px-12 max-w-4xl mx-auto mt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Accent badge */}
          <motion.span
            variants={itemVariants}
            className="px-5 py-2 mb-6 border border-gold-400/30 bg-gold-950/30 rounded-full backdrop-blur-sm text-xs md:text-sm font-semibold text-gold-300 tracking-[0.2em] uppercase font-outfit inline-block"
          >
            {isRTL ? "أهلاً بكم في الأجواء الفاخرة" : "Welcome to Luxury Above Clouds"}
          </motion.span>

          {/* Main Arabic Typography */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-extrabold font-serif tracking-wide text-gold-100 font-tajawal text-shadow-lg leading-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
          >
            طلة القدس
          </motion.h1>

          {/* English Typography */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-beige-100 mt-2 md:mt-4 font-outfit font-extralight drop-shadow-md"
          >
            View Alquds Restaurant
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-beige-200/90 max-w-2xl mx-auto mt-6 italic font-serif font-light leading-relaxed"
          >
            “{t("hero.subtitle")}”
          </motion.p>

          {/* Action CTA Grid */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-10 w-full sm:w-auto px-4"
          >
            {/* Primary: Explore Menu */}
            <a
              href="#menu"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-gold-400/50 font-medium text-gold-100 bg-gold-950/20 rounded-full transition duration-500 hover:bg-gold-400 hover:text-black shadow-[0_0_30px_rgba(212,146,45,0.1)] hover:shadow-[0_0_30px_rgba(212,146,45,0.3)]"
            >
              <span className="font-semibold tracking-wide">{t("hero.viewMenu")}</span>
            </a>

            {/* Secondary: Reserve Package */}
            <a
              href="#packages"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[#0e0c0a] bg-gold-400 hover:bg-gold-300 transition duration-500 rounded-full shadow-[0_10px_30px_rgba(212,146,45,0.25)] transform hover:-translate-y-1"
            >
              <span className="font-bold flex items-center gap-2 tracking-wide">
                <CalendarRange size={16} />
                {t("hero.reservePackage")}
              </span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/962798111137"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-white/10 hover:border-green-500/40 font-medium text-beige-100 bg-white/5 hover:bg-green-600/10 rounded-full backdrop-blur-md transition duration-500"
            >
              <span className="font-semibold flex items-center gap-2 tracking-wide group-hover:text-green-400 transition-colors">
                <MessageSquare size={16} className="text-green-500 group-hover:animate-pulse" />
                {t("hero.whatsapp")}
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade Out Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 z-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-beige-300/60 mb-2 group-hover:text-gold-400 transition-colors font-outfit">
          {isRTL ? "اكتشف المزيد" : "Scroll Down"}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gold-400/70 group-hover:text-gold-300"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
