"use client";

import { motion } from "framer-motion";
import { FloralDivider } from "./FloralDecorations";
import { Quote } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section-frame olive-tuscan-hero">
      {/* Top Floral Header Arch - Option 1: Delicate Blossoms & Baby's Breath */}
      <div className="olive-top-garland-wrap">
        <img
          src="/images/floral_opt_1_botanical.png"
          alt="Golden Botanical Arch - Delicate Blossoms & Baby's Breath"
          className="olive-garland-img"
        />
      </div>

      {/* Olive Watercolor Landscape Painting (Moved up directly below top arch) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.35 }}
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

      {/* Quranic Translation Quote Box (Moved below the image) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="italian-quote-box hero-quote-box"
      >
        <Quote size={24} className="quote-icon-gold" />
        <blockquote className="italian-quote-text">
          &ldquo;And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them...&rdquo;
        </blockquote>
      </motion.div>

      {/* Golden Floral Divider (Placed directly below quote box) */}
      <FloralDivider />
    </section>
  );
}
