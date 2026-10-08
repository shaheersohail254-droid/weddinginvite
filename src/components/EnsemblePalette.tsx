"use client";

import { motion } from "framer-motion";
import { Sparkles, Shirt, Crown } from "lucide-react";
import { FloralDivider } from "./FloralDecorations";

export default function EnsemblePalette() {
  return (
    <section className="ensemble-section section-frame" id="ensemble">
      <div className="section-heading">
        <p className="eyebrow">CASA DE CARTA · ATTIRE & PALETTE</p>
        <h2>The Walima Ensemble</h2>
        <p className="sub-heading-text">
          A timeless Italian-inspired aesthetic celebrating formal elegance &amp; classic couture.
        </p>
        <FloralDivider />
      </div>

      <div className="ensemble-grid">
        {/* Groom Card */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="ensemble-card groom-card"
        >
          <div className="ensemble-card-header">
            <div className="ensemble-icon-box charcoal-icon">
              <Shirt size={22} />
            </div>
            <div className="ensemble-role-badge">GROOM&apos;S ATTIRE</div>
          </div>
          <h3>Charcoal Grey</h3>
          <p className="ensemble-desc">
            Bespoke Italian-cut formal tuxedo &amp; charcoal grey sherwani, accented with crisp black silk trim &amp; platinum details.
          </p>
          <div className="color-swatch-container">
            <div className="color-swatch-box charcoal-swatch" style={{ backgroundColor: "#2D323A" }}>
              <div className="swatch-glimmer" />
            </div>
            <div className="swatch-details">
              <span className="swatch-name">Charcoal Grey</span>
              <span className="swatch-hex">#2D323A · Formal Sartorial</span>
            </div>
          </div>
        </motion.div>

        {/* Bride Card */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="ensemble-card bride-card"
        >
          <div className="ensemble-card-header">
            <div className="ensemble-icon-box pearl-icon">
              <Crown size={22} />
            </div>
            <div className="ensemble-role-badge bride-badge">BRIDE&apos;S ATTIRE</div>
          </div>
          <h3>Pearl Skin</h3>
          <p className="ensemble-desc">
            Regal pearl skin ivory silk gown with subtle champagne gold embroidery &amp; lustrous hand-beaded pearl embellishments.
          </p>
          <div className="color-swatch-container">
            <div className="color-swatch-box pearl-swatch" style={{ backgroundColor: "#F7F3EC" }}>
              <div className="swatch-glimmer" />
            </div>
            <div className="swatch-details">
              <span className="swatch-name">Pearl Skin</span>
              <span className="swatch-hex">#F7F3EC · Luxury Silk</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dress Code Notice Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="dress-code-banner"
      >
        <div className="dress-code-inner">
          <Sparkles className="dress-code-sparkle" size={20} />
          <div>
            <h4 className="dress-code-title">GUEST DRESS CODE · FORMAL EVENING WEAR</h4>
            <p className="dress-code-text">
              The Walima is a grand formal evening dinner reception. Guests are cordially invited to join us in formal evening wear (Suits, Sherwanis &amp; Formal Evening Wear).
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
