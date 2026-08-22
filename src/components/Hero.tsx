"use client";

import { motion } from "framer-motion";
import { FloralDivider, BotanicalHeader } from "./FloralDecorations";

export default function Hero() {
  return (
    <section className="hero section-frame">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-portrait-wrap"
      >
        <BotanicalHeader />
        <div className="hero-portrait-frame">
          <img
            src="/images/wedding_aisle.jpg"
            alt="Arham &amp; Umaima Wedding Ceremony"
            className="hero-portrait-img"
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="eyebrow"
      >
        TOGETHER WITH THEIR FAMILIES
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Arham <span>&amp;</span> Umaima
      </motion.h1>
      <div className="parents-block">
        <p className="parent-line">
          Arham Zubair <small>S/O Zubair Akhtar</small>
        </p>
        <p className="parent-line">
          Umaima Akhtar <small>D/O Perwaiz Akhtar</small>
        </p>
      </div>
      <FloralDivider />
      <p className="date-display">12 · 13 · 15 NOVEMBER 2026</p>
    </section>
  );
}
