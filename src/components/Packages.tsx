"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Users, CalendarCheck } from "lucide-react";

interface PackageType {
  id: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  items: string[];
  groupSize: string;
  accentColor: string;
}

export default function Packages() {
  const { t, isRTL } = useLanguage();

  const packagesList: PackageType[] = [
    {
      id: "love",
      name: t("packages.love.name"),
      desc: t("packages.love.desc"),
      price: t("packages.love.price"),
      image: "/images/love_pkg.png",
      items: t("packages.love.items"),
      groupSize: "2",
      accentColor: "from-rose-900/60",
    },
    {
      id: "winter",
      name: t("packages.winter.name"),
      desc: t("packages.winter.desc"),
      price: t("packages.winter.price"),
      image: "/images/winter_pkg.png",
      items: t("packages.winter.items"),
      groupSize: "4 - 6",
      accentColor: "from-sky-900/60",
    },
    {
      id: "family",
      name: t("packages.family.name"),
      desc: t("packages.family.desc"),
      price: t("packages.family.price"),
      image: "/images/mansaf.png",
      items: t("packages.family.items"),
      groupSize: "5 - 10",
      accentColor: "from-amber-900/60",
    },
    {
      id: "breakfast",
      name: t("packages.breakfast.name"),
      desc: t("packages.breakfast.desc"),
      price: t("packages.breakfast.price"),
      image: "/images/breakfast.png",
      items: t("packages.breakfast.items"),
      groupSize: "2 - 4",
      accentColor: "from-gold-900/60",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="packages" className="relative py-24 md:py-32 bg-[#0e0c0a]">
      {/* Top subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold text-gold-400 tracking-[0.3em] uppercase font-outfit mb-3 block">
            {t("packages.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold-100 font-tajawal mb-4">
            {t("packages.title")}
          </h2>
          <p className="text-beige-300/60 font-light max-w-xl mx-auto font-tajawal text-sm md:text-base">
            {t("packages.subtitle")}
          </p>
          <div className="h-[2px] w-24 bg-gold-400 my-6 mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {packagesList.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden border border-gold-400/10 bg-[#12100e] flex flex-col transition-all duration-500 hover:border-gold-400/40 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] h-[550px] sm:h-[420px] flex-col sm:flex-row"
            >
              {/* Image Panel */}
              <div className="relative w-full sm:w-2/5 h-1/2 sm:h-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-75"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                {/* Soft cinematic gradient layer overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#12100e] via-transparent to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-b ${pkg.accentColor} mix-blend-multiply opacity-30`} />
                
                {/* Price Badge */}
                <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"} px-4 py-1.5 rounded-full bg-gold-400/90 text-[#0e0c0a] font-extrabold text-sm backdrop-blur-sm z-10 shadow-md font-outfit`}>
                  {pkg.price}
                </div>
              </div>

              {/* Content Panel */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative z-10 h-1/2 sm:h-full">
                <div>
                  {/* Group size */}
                  <div className="flex items-center gap-2 mb-2 text-[11px] text-gold-400/80 font-semibold tracking-wide font-outfit uppercase">
                    <Users size={12} />
                    <span>
                      {t("packages.group")}: {pkg.groupSize} {t("packages.guests")}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gold-100 font-tajawal mb-3 group-hover:text-gold-300 transition-colors">
                    {pkg.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-beige-300/70 font-light leading-relaxed mb-5 line-clamp-3 font-tajawal">
                    {pkg.desc}
                  </p>

                  {/* Checklist items */}
                  <div className="space-y-2">
                    {pkg.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-beige-200/90 font-tajawal">
                        <CheckCircle2 size={13} className="text-gold-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action button */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href={`#booking?package=${pkg.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("booking");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        // Dispatching an event or directly setting state would follow here, handled in booking.tsx
                        window.dispatchEvent(new CustomEvent("selectPackage", { detail: pkg.id }));
                      }
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-gold-400/30 bg-gold-950/10 hover:bg-gold-400 text-gold-100 hover:text-black font-bold font-tajawal text-sm transition-all duration-500 shadow-md active:scale-95 group/btn"
                  >
                    <CalendarCheck size={15} className="group-hover/btn:animate-bounce" />
                    <span>{t("packages.bookBtn")}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
