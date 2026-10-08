"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Soft spring inertia mouse interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x: nx, y: ny });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1300);
  };

  return (
    <motion.section
      className="villa-door-opening-screen"
      animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
    >
      <div className="door-screen-backdrop" />

      {/* Realistically Proportioned Centered Villa Door Card */}
      <div className="door-card-outer-frame">
        <div
          className={`door-card-3d-wrapper ${isOpening ? "card-opened" : ""}`}
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          aria-label="Untie the golden satin bow to open the wedding invitation doors"
        >
          {/* Left Door Panel (3D Outward Swing) */}
          <motion.div
            className="door-card-panel left-card-panel"
            animate={isOpening ? { rotateY: -110, opacity: 0.95 } : { rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
          >
            <div className="door-card-crop left-card-crop">
              <img
                src="/images/full_screen_doors.jpg"
                alt="Villa Entrance Left Door"
                className="door-card-img left-card-img"
              />
            </div>
            <div className="door-card-edge-shadow left-edge" />
          </motion.div>

          {/* Right Door Panel (3D Outward Swing) */}
          <motion.div
            className="door-card-panel right-card-panel"
            animate={isOpening ? { rotateY: 110, opacity: 0.95 } : { rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
          >
            <div className="door-card-crop right-card-crop">
              <img
                src="/images/full_screen_doors.jpg"
                alt="Villa Entrance Right Door"
                className="door-card-img right-card-img"
              />
            </div>
            <div className="door-card-edge-shadow right-edge" />
          </motion.div>

          {/* ELEGANT, DELICATE & REALISTIC GOLD SATIN RIBBON ASSEMBLY */}
          <div className="satin-ribbon-assembly">
            {/* Left Retracting Satin Ribbon Band */}
            <motion.div
              className="realistic-satin-band-half left-band-half"
              animate={isOpening ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "left center" }}
            >
              <img
                src="/images/satin_band_3d_clean.png"
                alt="Left Satin Ribbon Band"
                className="satin-band-img"
              />
            </motion.div>

            {/* Right Retracting Satin Ribbon Band */}
            <motion.div
              className="realistic-satin-band-half right-band-half"
              animate={isOpening ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "right center" }}
            >
              <img
                src="/images/satin_band_3d_clean.png"
                alt="Right Satin Ribbon Band"
                className="satin-band-img"
              />
            </motion.div>

            {/* Delicate Smaller Gold Satin Bow with Organic Wind Flutter & Pointer Inertia */}
            <motion.div
              className="clean-satin-bow-wrapper"
              animate={
                isOpening
                  ? { scale: 0.1, rotate: -25, opacity: 0 }
                  : {
                      rotateZ: [0, -2, 1.5, -1, 2, -1.5, 0],
                      skewX: [0, -1.5, 1, -0.5, 1.5, -1, 0],
                      x: mousePos.x * 6,
                      y: mousePos.y * 4,
                    }
              }
              transition={
                isOpening
                  ? { duration: 0.45, ease: "backIn" }
                  : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
              }
              whileHover={{ scale: 1.06 }}
            >
              <img
                src="/images/satin_bow_3d_clean.png"
                alt="3D Gold Satin Ribbon Bow"
                className="clean-satin-bow-img"
              />
            </motion.div>
          </div>
        </div>

        {/* Tap Prompt Note */}
        <motion.p
          className="door-card-tap-note"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
          animate={isOpening ? { opacity: 0 } : { opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 2, repeat: isOpening ? 0 : Infinity }}
        >
          Untie the knot to enter the celebration
        </motion.p>
      </div>
    </motion.section>
  );
}
