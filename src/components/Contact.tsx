"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { MapPin, PhoneCall, Clock, Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0e0c0a] overflow-hidden border-t border-white/[0.02]">
      {/* Custom Background Overlay */}
      <div className="absolute inset-0 pointer-events-none islamic-pattern opacity-[0.02]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Side Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col"
          >
            <span className="text-xs md:text-sm font-bold text-gold-400 tracking-[0.3em] uppercase font-outfit mb-3 block">
              {t("contact.tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold-100 font-tajawal mb-8 leading-tight">
              {t("contact.title")}
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-gold-400 h-fit shrink-0 group hover:bg-gold-400 hover:text-black transition-colors duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-beige-300/60 font-bold mb-2 font-outfit">
                    {isRTL ? "العنوان" : "Address"}
                  </h4>
                  <p className="text-beige-100 text-base md:text-lg font-medium font-tajawal leading-relaxed">
                    {t("contact.address")}
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex gap-5">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-gold-400 h-fit shrink-0 group hover:bg-gold-400 hover:text-black transition-colors duration-500">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-beige-300/60 font-bold mb-2 font-outfit">
                    {isRTL ? "الاتصال المباشر" : "Phone Reservations"}
                  </h4>
                  <div className="space-y-1.5 font-outfit">
                    <a href={`tel:${t("contact.phone1")}`} className="block text-gold-300 text-lg font-bold hover:text-gold-200 transition-colors">
                      {t("contact.phone1")}
                    </a>
                    <a href={`tel:${t("contact.phone2")}`} className="block text-gold-300 text-lg font-bold hover:text-gold-200 transition-colors">
                      {t("contact.phone2")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-5">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-gold-400 h-fit shrink-0 group hover:bg-gold-400 hover:text-black transition-colors duration-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-beige-300/60 font-bold mb-2 font-outfit">
                    {isRTL ? "ساعات العمل" : "Opening Hours"}
                  </h4>
                  <p className="text-beige-100 text-base font-medium font-tajawal">
                    {t("contact.workingHours")}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side Interactive Map Embed / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-gold-500/20 group"
          >
            {/* Map Overlay with CTA */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10 flex flex-col items-center justify-center text-center p-8">
              <div className="p-4 rounded-full bg-gold-400 text-[#0e0c0a] scale-95 group-hover:scale-100 transition-transform duration-500 shadow-lg shadow-gold-500/30 mb-4">
                <ExternalLink size={24} />
              </div>
              <h3 className="text-xl font-bold text-beige-100 font-tajawal drop-shadow-md mb-2">
                {isRTL ? "عرض الموقع على خرائط جوجل" : "View Location on Google Maps"}
              </h3>
              <p className="text-xs text-beige-300/80 font-light drop-shadow max-w-xs">
                {isRTL ? "اضغط للحصول على الاتجاهات المباشرة للقمة" : "Click to get direct navigation to the highest point on 60th street."}
              </p>
            </div>

            {/* We can embed a real dark styled styled map frame visually or actual iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.3719823491433!2d35.7177762!3d32.0322998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cb9bbf48080eb%3A0xdd410ed703059ed6!2sView%20Al-Quds%20Restaurant!5e0!3m2!1sen!2sjo!4v1715716278412!5m2!1sen!2sjo"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0 transition-transform duration-[2s] scale-100 group-hover:scale-[1.05]"
            ></iframe>
            
            <a 
              href="https://maps.app.goo.gl/M6cW5Vpx25tT31zB9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-20"
              aria-label="Open Google Maps"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
