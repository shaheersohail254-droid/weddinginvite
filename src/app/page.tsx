"use client";

import { useState } from "react";
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
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const openInvitation = () => {
    setOpened(true);
    setMusicOn(true);
    setTimeout(
      () =>
        document
          .getElementById("invitation")
          ?.scrollIntoView({ behavior: "smooth" }),
      600
    );
  };

  return (
    <main className="relative min-h-screen">
      <FloatingPetals />
      <OrganicBackgroundFoliage />
      {!opened && <Envelope onOpen={openInvitation} />}
      {opened && (
        <div id="invitation" className="invitation-page">
          <MusicPlayer enabled={musicOn} />
          <Hero />
          <InvitationMessage />
          <Events />
          <Countdown />
          <Venue />
          <RSVP />
          <Closing />
        </div>
      )}
    </main>
  );
}
