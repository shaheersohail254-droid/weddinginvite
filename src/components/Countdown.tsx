"use client";

import { useEffect, useState } from "react";
import { FloralDivider } from "./FloralDecorations";

const target = new Date("2026-11-13T12:00:00+05:00").getTime();

export default function Countdown() {
  const [left, setLeft] = useState(target - Date.now());

  useEffect(() => {
    const id = setInterval(() => setLeft(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const d = Math.max(0, left);
  const days = Math.floor(d / 86400000);
  const hours = Math.floor((d % 86400000) / 3600000);
  const mins = Math.floor((d % 3600000) / 60000);
  const secs = Math.floor((d % 60000) / 1000);

  return (
    <section className="countdown section-frame">
      <p className="eyebrow">COUNTING DOWN TO THE BARAT</p>
      <h2>Until we celebrate together</h2>
      <FloralDivider />
      <div className="timer">
        <div>
          <b>{String(days).padStart(2, "0")}</b>
          <span>DAYS</span>
        </div>
        <div>
          <b>{String(hours).padStart(2, "0")}</b>
          <span>HOURS</span>
        </div>
        <div>
          <b>{String(mins).padStart(2, "0")}</b>
          <span>MINUTES</span>
        </div>
        <div>
          <b>{String(secs).padStart(2, "0")}</b>
          <span>SECONDS</span>
        </div>
      </div>
    </section>
  );
}
