"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Envelope from "@/components/Envelope";
import Hero from "@/components/Hero";
import InvitationMessage from "@/components/InvitationMessage";
import Events from "@/components/Events";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import RSVP from "@/components/RSVP";
import Closing from "@/components/Closing";
import MusicPlayer from "@/components/MusicPlayer";
import { FloatingPetals, OrganicBackgroundFoliage } from "@/components/FloralDecorations";

export default function Home() {
  const [doorsOpening, setDoorsOpening] = useState(false);
  const [doorsUnmounted, setDoorsUnmounted] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  // Keep scroll locked at top while doors are closed; unlock when opening begins
  useEffect(() => {
    if (!doorsOpening) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [doorsOpening]);

  const handleOpenStart = () => {
    setDoorsOpening(true);
    setMusicOn(true);
  };

  const handleOpenComplete = () => {
    setDoorsUnmounted(true);
  };

  return (
    <main className="relative min-h-screen">
      <FloatingPetals />
      <OrganicBackgroundFoliage />

      {/* Main Invitation Content - Stationary at top with silky-smooth fade-in when doors open */}
      <motion.div
        id="invitation"
        className="invitation-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: doorsOpening ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: "easeInOut" }}
      >
        <MusicPlayer enabled={musicOn} />
        <Hero />
        <InvitationMessage />
        <Events />
        <Countdown />
        <Venue />
        <RSVP />
        <Closing />
      </motion.div>

      {/* Villa 3D Doors Screen - Fixed on top until opening completes smoothly */}
      {!doorsUnmounted && (
        <Envelope
          onOpenStart={handleOpenStart}
          onOpenComplete={handleOpenComplete}
        />
      )}
    </main>
  );
}
