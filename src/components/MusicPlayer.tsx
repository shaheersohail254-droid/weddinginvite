"use client";

import { Music2, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ enabled }: { enabled: boolean }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (enabled && ref.current) {
      const playPromise = ref.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setPlaying(true))
          .catch((err) => {
            console.warn("Audio playback prevented or missing file:", err);
            setPlaying(false);
          });
      }
    }
  }, [enabled]);

  const toggle = () => {
    if (!ref.current) return;
    if (ref.current.paused) {
      ref.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => console.error("Error playing audio:", err));
    } else {
      ref.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={ref} loop preload="auto">
        <source src="/music/leberch-invitation-wedding-375839.mp3" type="audio/mpeg" />
        <source src="/music/wedding-music.mp3" type="audio/mpeg" />
        <source src="/musics/leberch-invitation-wedding-375839.mp3" type="audio/mpeg" />
        <source src="/musics/wedding-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        className="music-button"
        onClick={toggle}
        aria-label="Toggle background music"
        title={playing ? "Mute Music" : "Play Music"}
      >
        {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <Music2 size={14} />
      </button>
    </>
  );
}
