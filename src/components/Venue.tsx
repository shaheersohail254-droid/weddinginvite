import { ExternalLink, CalendarPlus } from "lucide-react";
import { BotanicalCorners, FloralDivider } from "./FloralDecorations";

export default function Venue() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Aroma+Marquee+Phase+7+Bahria+Town+Rawalpindi";
  
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Arham+%26+Umaima+Walima+Reception&dates=20261115T140000Z/20261115T180000Z&details=Walima+Dinner+Reception+at+Aroma+Marquee+Phase+7+Bahria+Town+Rawalpindi&location=Aroma+Marquee+Phase+7+Bahria+Town+Rawalpindi";

  return (
    <section className="venue section-frame" id="venue">
      <p className="eyebrow">DESTINATION &amp; LOCATION</p>
      <h2>Find Your Way</h2>
      <FloralDivider />

      <div className="venue-spotlight-card">
        <BotanicalCorners />
        
        <h3 className="venue-name">Aroma Marquee</h3>
        <p className="venue-address">Phase 7, Bahria Town, Rawalpindi</p>

        <div className="venue-actions">
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="venue-btn primary-venue-btn"
          >
            GET MAP DIRECTIONS <ExternalLink size={16} />
          </a>
          
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="venue-btn secondary-venue-btn"
          >
            ADD TO CALENDAR <CalendarPlus size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
