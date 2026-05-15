"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Sunrise, HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { t, isRTL } = useLanguage();

  const imageBoxVariants: Variants = {
    hidden: { opacity: 0, x: isRTL ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textBoxVariants: Variants = {
    hidden: { opacity: 0, x: isRTL ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#0e0c0a]">
      {/* Subtle Islamic Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] islamic-pattern scale-150" />

      {/* Accent blur orb for atmosphere */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gold-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left: Panoramic Imagery Overlapping Composition */}
          <motion.div
            variants={imageBoxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative h-[500px] md:h-[600px] flex justify-center lg:justify-start"
          >
            {/* Main Image */}
            <div className="relative w-[85%] h-[90%] rounded-2xl overflow-hidden border border-gold-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-10">
              <Image
                src="/images/grills.png"
                alt="Luxury traditional dining"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floated Secondary Background Frame (Decor) */}
            <div
              className={`absolute bottom-4 ${
                isRTL ? "left-4" : "right-4"
              } w-[60%] h-[40%] rounded-2xl border border-gold-400/40 bg-[#171a14] p-4 flex flex-col justify-center items-center text-center z-20 shadow-[0_25px_40px_rgba(0,0,0,0.8)] backdrop-blur-md`}
            >
              <div className="text-gold-400 font-serif text-4xl md:text-5xl font-bold mb-1 tracking-tighter leading-none">
                60
              </div>
              <div className="text-beige-200 text-xs md:text-sm uppercase tracking-widest font-bold font-outfit leading-tight">
                {isRTL ? "شارع الستين" : "60th Street"}
              </div>
              <p className="text-[10px] text-beige-300/60 mt-1">
                {isRTL ? "أعلى قمة في السلط" : "The Highest Peak of Salt"}
              </p>
            </div>

            {/* Abstract Gold Line Decor */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-400/40 rounded-tl-2xl -z-10" />
            <div className="absolute bottom-12 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-400/40 rounded-br-2xl -z-10" />
          </motion.div>

          {/* Right: Elegant Brand Narrative */}
          <motion.div
            variants={textBoxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col text-center lg:text-start relative z-10"
          >
            <span className="text-xs md:text-sm font-bold text-gold-400 tracking-[0.3em] uppercase font-outfit mb-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 h-[1px] bg-gold-400/50 hidden lg:inline-block" />
              {t("about.tag")}
            </span>

            <h3 className="text-3xl md:text-5xl font-serif font-bold text-gold-100 font-tajawal leading-tight">
              {t("about.title")}
            </h3>

            <div className="h-1 w-20 bg-gold-400 my-6 mx-auto lg:mx-0 rounded-full" />

            <p className="text-base md:text-lg text-beige-200/80 leading-relaxed font-light font-tajawal mb-6">
              {t("about.p1")}
            </p>

            <p className="text-base md:text-lg text-beige-200/70 leading-relaxed font-light mb-10">
              {t("about.p2")}
            </p>

            {/* Icon USP Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center transition-all duration-500 hover:bg-gold-950/10 hover:border-gold-500/20">
                <div className="p-3 bg-gold-400/10 text-gold-400 rounded-full mb-4 border border-gold-400/20">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-gold-100 font-semibold text-base mb-1 font-tajawal">{t("about.heritage")}</h4>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center transition-all duration-500 hover:bg-gold-950/10 hover:border-gold-500/20">
                <div className="p-3 bg-gold-400/10 text-gold-400 rounded-full mb-4 border border-gold-400/20">
                  <Sunrise size={24} />
                </div>
                <h4 className="text-gold-100 font-semibold text-base mb-1 font-tajawal">{t("about.sunset")}</h4>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center transition-all duration-500 hover:bg-gold-950/10 hover:border-gold-500/20">
                <div className="p-3 bg-gold-400/10 text-gold-400 rounded-full mb-4 border border-gold-400/20">
                  <HeartHandshake size={24} />
                </div>
                <h4 className="text-gold-100 font-semibold text-base mb-1 font-tajawal">{t("about.hospitality")}</h4>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
