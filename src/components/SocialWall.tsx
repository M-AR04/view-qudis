"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const socialPosts = [
  { id: 1, image: "/images/social_1.png", likes: "1.2k", comments: "84", size: "row-span-2 col-span-2 md:col-span-1 md:row-span-2" },
  { id: 2, image: "/images/hero_bg.png", likes: "948", comments: "53", size: "col-span-2 md:col-span-1" },
  { id: 3, image: "/images/social_2.png", likes: "2.4k", comments: "115", size: "col-span-2 md:col-span-1" },
  { id: 4, image: "/images/social_3.png", likes: "1.5k", comments: "96", size: "col-span-2 md:col-span-1" },
];

export default function SocialWall() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 bg-[#0e0c0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none islamic-pattern scale-75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs md:text-sm font-bold text-gold-400 tracking-[0.3em] uppercase font-outfit mb-3 flex items-center gap-2">
              <Instagram size={14} className="text-gold-400 animate-pulse" />
              {t("social.tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold-100 font-tajawal">
              {t("social.title")}
            </h2>
          </div>

          <a
            href="https://www.instagram.com/view_alquds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-gold-900/20 border border-white/10 text-gold-300 hover:text-[#0e0c0a] hover:bg-gold-400 transition-all duration-500 font-bold text-sm group cursor-pointer shadow-md shrink-0"
          >
            <Instagram size={16} className="mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-tajawal">{t("social.cta")}</span>
          </a>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {socialPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative rounded-2xl overflow-hidden border border-white/[0.05] cursor-pointer ${post.size}`}
            >
              <Image
                src={post.image}
                alt={`Instagram feed item ${post.id}`}
                fill
                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 brightness-90"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Dark Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="flex items-center gap-6 text-beige-100 font-bold scale-90 group-hover:scale-100 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Heart size={20} className="fill-red-500 text-red-500 animate-bounce" />
                    <span className="font-outfit text-lg">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={20} className="text-gold-400" />
                    <span className="font-outfit text-lg">{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
