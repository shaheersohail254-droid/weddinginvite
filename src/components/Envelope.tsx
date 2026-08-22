"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <motion.section
      className="opening-screen"
      animate={isOpening ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="opening-content"
      >
        <div className="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        <p className="eyebrow">A WEDDING INVITATION</p>
        <div
          className={`envelope-wrap ${isOpening ? "opening" : ""}`}
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          aria-label="Open Wedding Invitation Envelope"
        >
          <div className="envelope-shadow" />
          <motion.div
            whileHover={!isOpening ? { y: -6, scale: 1.015 } : {}}
            whileTap={!isOpening ? { scale: 0.98 } : {}}
            transition={{ duration: 0.3 }}
            className="envelope-card proper-envelope"
          >
            {/* Triangular V-Shape Envelope Flap (Flips open in 3D) */}
            <motion.div
              className="envelope-top-flap"
              animate={isOpening ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 4 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
            >
              <div className="flap-border-line" />
            </motion.div>

            {/* Envelope Side Pocket Folds */}
            <div className="envelope-side-fold left-fold" />
            <div className="envelope-side-fold right-fold" />

            {/* Realistic 3D Wax Stamp Seal (Centered & Lifts off on opening) */}
            <motion.div
              className="wax-stamp-seal-wrap"
              initial={{ x: "-50%", y: "-50%" }}
              animate={
                isOpening
                  ? { x: "-50%", y: "-120%", scale: 1.15, opacity: 0 }
                  : { x: "-50%", y: "-50%", scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.4 }}
            >
              <div className="wax-stamp-seal-box">
                <img
                  src="/images/wax_seal.png"
                  alt="Realistic Royal Wax Seal"
                  className="wax-seal-real-img"
                />
              </div>
            </motion.div>

            {/* Inner Card Content (Slides upward out of envelope pocket) */}
            <motion.div
              className="envelope-content-box"
              animate={isOpening ? { y: -45, scale: 1.04 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="envelope-names">
                ARHAM <span>&amp;</span> UMAIMA
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          className="tap-note clickable-tap-note"
          onClick={handleOpen}
          animate={isOpening ? { opacity: 0 } : { opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: isOpening ? 0 : Infinity }}
        >
          Tap to begin the celebration
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
