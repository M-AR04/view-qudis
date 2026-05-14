"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Calendar, Clock, Users, User, Phone, Sparkles, X } from "lucide-react";
import confetti from "canvas-confetti";

export default function Booking() {
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    packageId: "none",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [resId, setResId] = useState("");

  // Listen for package selection trigger event from packages component
  useEffect(() => {
    const handlePackageSelect = (e: Event) => {
      const packageId = (e as CustomEvent).detail;
      setFormData((prev) => ({ ...prev, packageId }));
    };
    window.addEventListener("selectPackage", handlePackageSelect);
    return () => window.removeEventListener("selectPackage", handlePackageSelect);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API latency
    setTimeout(() => {
      const generatedId = `VA-${Math.floor(100000 + Math.random() * 900000)}`;
      setResId(generatedId);
      setIsSubmitting(false);
      setShowModal(true);

      // Trigger luxury confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#dfb051", "#bc7924", "#ffffff"],
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      packageId: "none",
    });
    setShowModal(false);
  };

  return (
    <section id="booking" className="relative py-24 bg-[#0c0b09] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep glowing backdrop orb */}
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gold-900/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gold-500/20">
          
          {/* Left Info Panel (Visual) */}
          <div className="lg:w-2/5 bg-gradient-to-br from-gold-950/80 to-[#0e0c0a] p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
            <div>
              <span className="text-xs font-bold text-gold-400 tracking-[0.3em] uppercase font-outfit mb-4 block">
                {t("booking.tag")}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold-100 font-tajawal mb-6 leading-tight">
                {t("booking.title")}
              </h2>
              <p className="text-beige-200/70 text-sm font-light leading-relaxed mb-8 font-tajawal">
                {t("booking.desc")}
              </p>
            </div>

            {/* Trust badge benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gold-400/10 text-gold-400">
                  <Sparkles size={16} />
                </div>
                <span className="text-xs text-beige-100 font-medium font-tajawal">
                  {isRTL ? "أولوية المقعد البانورامي" : "Priority Panoramic Table"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gold-400/10 text-gold-400">
                  <Clock size={16} />
                </div>
                <span className="text-xs text-beige-100 font-medium font-tajawal">
                  {isRTL ? "تأكيد فوري وحجز مؤكد" : "Instant Guaranteed Booking"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Booking Form */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-2 font-tajawal">
                    {t("booking.form.name")}
                  </label>
                  <div className="relative flex items-center">
                    <User size={16} className="absolute left-4 text-beige-400/40 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={isRTL ? "اسمك الرباعي" : "e.g., John Doe"}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-gold-400 outline-none pl-11 pr-4 py-3.5 text-beige-100 text-sm rounded-xl transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-2 font-tajawal">
                    {t("booking.form.phone")}
                  </label>
                  <div className="relative flex items-center">
                    <Phone size={16} className="absolute left-4 text-beige-400/40 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+962 -- --- ----"
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-gold-400 outline-none pl-11 pr-4 py-3.5 text-beige-100 text-sm rounded-xl transition-all font-outfit"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-2 font-tajawal">
                    {t("booking.form.date")}
                  </label>
                  <div className="relative flex items-center">
                    <Calendar size={16} className="absolute left-4 text-beige-400/40 pointer-events-none" />
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-gold-400 outline-none pl-11 pr-4 py-3.5 text-beige-100 text-sm rounded-xl transition-all"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-2 font-tajawal">
                    {t("booking.form.time")}
                  </label>
                  <div className="relative flex items-center">
                    <Clock size={16} className="absolute left-4 text-beige-400/40 pointer-events-none" />
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-gold-400 outline-none pl-11 pr-4 py-3.5 text-beige-100 text-sm rounded-xl transition-all appearance-none"
                    >
                      <option value="" disabled>{isRTL ? "اختر توقيت" : "Select Time"}</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="17:00">05:00 PM (Sunset)</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="21:00">09:00 PM</option>
                      <option value="23:00">11:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Number of guests */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-2 font-tajawal">
                    {t("booking.form.guests")}
                  </label>
                  <div className="relative flex items-center">
                    <Users size={16} className="absolute left-4 text-beige-400/40 pointer-events-none" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-gold-400 outline-none pl-11 pr-4 py-3.5 text-beige-100 text-sm rounded-xl transition-all appearance-none"
                    >
                      <option value="1">1 {isRTL ? "شخص" : "Guest"}</option>
                      <option value="2">2 {isRTL ? "شخصين" : "Guests"}</option>
                      <option value="3">3 {isRTL ? "أشخاص" : "Guests"}</option>
                      <option value="4">4 {isRTL ? "أشخاص" : "Guests"}</option>
                      <option value="6">5 - 7 {isRTL ? "أشخاص" : "Guests"}</option>
                      <option value="10">8 - 12 {isRTL ? "أشخاص" : "Guests"}</option>
                    </select>
                  </div>
                </div>

                {/* Package Select */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-2 font-tajawal">
                    {t("booking.form.package")}
                  </label>
                  <div className="relative flex items-center">
                    <Sparkles size={16} className="absolute left-4 text-beige-400/40 pointer-events-none" />
                    <select
                      name="packageId"
                      value={formData.packageId}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-gold-400 outline-none pl-11 pr-4 py-3.5 text-beige-100 text-sm rounded-xl transition-all appearance-none"
                    >
                      <option value="none">{t("booking.form.noPkg")}</option>
                      <option value="love">{t("packages.love.name")}</option>
                      <option value="winter">{t("packages.winter.name")}</option>
                      <option value="family">{t("packages.family.name")}</option>
                      <option value="breakfast">{t("packages.breakfast.name")}</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gold-400 text-[#0e0c0a] font-extrabold text-base tracking-wide transition-all duration-300 active:scale-95 hover:bg-gold-300 shadow-[0_10px_25px_rgba(212,146,45,0.3)] cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2 font-tajawal mt-6"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-[#0e0c0a] border-t-transparent rounded-full animate-spin" />
                ) : (
                  t("booking.form.submit")
                )}
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Confirmation Animated Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={resetForm}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#141210] border border-gold-400/30 rounded-3xl p-8 flex flex-col items-center text-center z-10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
            >
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-beige-300 hover:text-gold-400 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6 animate-bounce mt-2">
                <CheckCircle size={48} />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold text-beige-100 mb-2 font-tajawal">
                {t("booking.modal.success")}
              </h3>
              
              <p className="text-beige-300/70 text-sm font-light font-tajawal mb-6">
                {t("booking.modal.desc")}
              </p>

              {/* Res ID Box */}
              <div className="w-full bg-gold-950/20 border border-gold-400/20 rounded-2xl py-4 px-6 mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gold-400 font-outfit block mb-1">
                  {t("booking.modal.resId")}
                </span>
                <span className="text-2xl font-extrabold tracking-[0.2em] text-gold-100 font-outfit">
                  {resId}
                </span>
              </div>

              <p className="text-xs text-beige-300/50 italic leading-relaxed mb-6">
                {t("booking.modal.note")}
              </p>

              <button
                onClick={resetForm}
                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl font-bold text-sm text-beige-200 hover:bg-white/10 hover:text-gold-400 transition-colors cursor-pointer"
              >
                {t("booking.modal.close")}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
