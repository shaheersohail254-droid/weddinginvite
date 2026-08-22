import { ExternalLink, MapPin } from "lucide-react";
import { BotanicalCorners, FloralDivider } from "./FloralDecorations";

export default function Venue() {
  const barat =
    "https://www.google.com/maps/search/?api=1&query=Grand+Anmol+Banquet+Hall+Lahore";
  const walima =
    "https://www.google.com/maps/search/?api=1&query=Aroma+Marquee+Bahria+Town+Phase+8+Rawalpindi";

  return (
    <section className="venue section-frame">
      <p className="eyebrow">COME CELEBRATE WITH US</p>
      <h2>Find Your Way</h2>
      <FloralDivider />
      <div className="venue-grid">
        <div className="venue-card">
          <BotanicalCorners />
          <MapPin size={28} />
          <p>BARAT VENUE</p>
          <h3>Grand Anmol Banquet Hall</h3>
          <span>Lahore</span>
          <a href={barat} target="_blank" rel="noreferrer">
            GET DIRECTIONS <ExternalLink size={14} />
          </a>
        </div>
        <div className="venue-card">
          <BotanicalCorners />
          <MapPin size={28} />
          <p>WALIMA VENUE</p>
          <h3>Aroma Marquee</h3>
          <span>Bahria Town Phase 8, Rawalpindi</span>
          <a href={walima} target="_blank" rel="noreferrer">
            GET DIRECTIONS <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
