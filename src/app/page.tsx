"use client";

import React from "react";
import { LanguageProvider } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Packages from "@/components/Packages";
import Features from "@/components/Features";
import SocialWall from "@/components/SocialWall";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative w-full min-h-screen selection:bg-gold-400 selection:text-black">
        {/* Floating Interactive Header */}
        <Navbar />

        {/* Main Content Sections */}
        <Hero />
        <About />
        <Menu />
        <Packages />
        <Features />
        <SocialWall />
        <Booking />
        <Contact />
        
        {/* Page End footer */}
        <Footer />
      </main>
    </LanguageProvider>
  );
}
