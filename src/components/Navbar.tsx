"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { Menu, X, Globe, PhoneCall } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { t, toggleLanguage, language, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.menu"), href: "#menu" },
    { name: t("nav.packages"), href: "#packages" },
    { name: t("nav.features"), href: "#features" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "py-3 bg-[#0e0c0a]/90 backdrop-blur-md border-b border-gold-600/10 shadow-lg"
          : "py-6 bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 relative z-10 group">
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gold-400/40 group-hover:border-gold-400 transition-all duration-500">
            <Image
              src="/view-qudis.png"
              alt="طلة القدس"
              fill
              priority
              sizes="(max-width: 768px) 56px, 64px"
              className="object-cover scale-110 group-hover:scale-125 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif font-bold tracking-wide text-gold-100 font-tajawal group-hover:text-gold-300 transition-colors">
              طلة القدس
            </span>
            <span className="text-[10px] md:text-xs tracking-widest font-outfit uppercase text-gold-400/80 font-light group-hover:text-gold-200 transition-colors">
              View Alquds
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-sm font-medium text-beige-100 hover:text-gold-300 transition-all duration-300 relative tracking-wide after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm text-beige-100 hover:text-gold-300 border border-beige-100/10 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            <Globe size={14} className="text-gold-400" />
            <span>{language === "ar" ? "English" : "العربية"}</span>
          </button>

          {/* CTA Reservation Button */}
          <a
            href="#booking"
            className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium tracking-wide text-black transition-all duration-300 bg-gold-400 rounded-full hover:bg-gold-300 active:scale-95 group shadow-[0_4px_15px_rgba(212,146,45,0.3)]"
          >
            <span className="relative flex items-center gap-2 font-bold text-sm">
              <PhoneCall size={14} />
              {t("nav.book")}
            </span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Language Trigger */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-beige-100 hover:text-gold-400"
            aria-label="Toggle Language"
          >
            <Globe size={18} />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-beige-100 hover:text-gold-400 relative z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#0e0c0a]/95 backdrop-blur-lg border-b border-gold-500/10 flex flex-col p-8 gap-6 items-center md:hidden h-[90vh] z-40"
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-beige-100 hover:text-gold-400 transition-colors w-full text-center py-2 border-b border-white/5 font-serif"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full mt-auto flex flex-col gap-4"
            >
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center py-4 text-center bg-gold-400 text-[#0e0c0a] font-bold rounded-full shadow-lg hover:bg-gold-300"
              >
                {t("nav.book")}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
