"use client";

import { motion } from "framer-motion";
import { FloralDivider } from "./FloralDecorations";

export default function Hero() {
  return (
    <section className="hero section-frame olive-tuscan-hero">
      {/* Top Olive Garland Header (True Transparent PNG) */}
      <div className="olive-top-garland-wrap">
        <img
          src="/images/olive_header.png"
          alt="Watercolor Olive Garland"
          className="olive-garland-img"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="eyebrow olive-eyebrow"
      >
        IN THE NAME OF ALLAH, THE MOST GRACIOUS, THE MOST MERCIFUL
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="invitation-sub-line"
      >
        YOU ARE CORDIALLY INVITED TO THE WALIMA RECEPTION OF
      </motion.p>

      {/* Flowing Gold Script Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="couple-script-heading"
      >
        Arham <span>and</span> Umaima
      </motion.h1>

      {/* Olive Watercolor Landscape Painting */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        className="olive-landscape-card-wrap"
      >
        <div className="olive-landscape-frame">
          <img
            src="/images/olive_landscape.jpg"
            alt="Arham and Umaima Tuscan Olive Walkway"
            className="olive-landscape-img"
          />
        </div>
      </motion.div>

      <FloralDivider />
    </section>
  );
}
