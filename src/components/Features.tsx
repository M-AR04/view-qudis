"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Eye, CloudSun, Users2, Wind, Award, ChefHat } from "lucide-react";

export default function Features() {
  const { t, isRTL } = useLanguage();

  const featureList = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: t("features.f1"),
      desc: t("features.d1"),
    },
    {
      icon: <CloudSun className="w-8 h-8" />,
      title: t("features.f2"),
      desc: t("features.d2"),
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: t("features.f3"),
      desc: t("features.d3"),
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: t("features.f4"),
      desc: t("features.d4"),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t("features.f5"),
      desc: t("features.d5"),
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: t("features.f6"),
      desc: t("features.d6"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#0c0b09]">
      {/* Subtle cinematic lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-gold-700/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold text-gold-400 tracking-[0.3em] uppercase font-outfit mb-3 block">
            {t("features.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold-100 font-tajawal">
            {t("features.title")}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent my-6 mx-auto" />
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureList.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.05] transition-all duration-500 hover:bg-gold-950/10 hover:border-gold-400/30 flex flex-col items-center text-center shadow-[0_15px_35px_-15px_rgba(0,0,0,0.5)] h-full"
            >
              {/* Animated Premium Icon Container */}
              <div className="relative p-5 bg-gold-950/20 border border-gold-500/15 text-gold-400 rounded-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-gold-400 group-hover:text-[#0e0c0a] group-hover:shadow-[0_8px_25px_rgba(212,146,45,0.4)]">
                {feat.icon}
                <div className="absolute inset-0 rounded-2xl border border-gold-400/0 group-hover:border-gold-400/50 animate-ping opacity-0 group-hover:opacity-30" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-beige-100 font-tajawal mb-3 group-hover:text-gold-300 transition-colors">
                {feat.title}
              </h3>

              <p className="text-sm md:text-base text-beige-300/60 font-light leading-relaxed font-tajawal flex-grow">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
