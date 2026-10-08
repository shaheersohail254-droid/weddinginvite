import { CalendarDays, Clock3, MapPin, Sparkles, UtensilsCrossed, Camera, Wine } from "lucide-react";
import { FloralDivider } from "./FloralDecorations";

const eveningTimeline = [
  {
    time: "7:00 PM (19:00 HRS)",
    title: "Welcome of Esteemed Guests",
    icon: Wine,
  },
  {
    time: "7:45 PM (19:45 HRS)",
    title: "Arrival of Groom & Bride",
    icon: Sparkles,
  },
  {
    time: "8:15 PM (20:15 HRS)",
    title: "Formal Dinner",
    icon: UtensilsCrossed,
  },
  {
    time: "9:30 PM (21:30 HRS)",
    title: "Felicitations & Photography",
    icon: Camera,
  },
];

export default function Events() {
  return (
    <section className="events section-frame" id="events">

      <div className="walima-main-card">
        <div className="walima-card-image-wrap">
          <img
            src="/images/walima_stage.jpg"
            alt="Aroma Marquee Walima Stage & Ballroom"
            className="walima-card-img"
          />
        </div>

        <div className="walima-card-body">
          <div className="walima-details-list">
            <div className="detail-item">
              <CalendarDays className="detail-icon" size={20} />
              <div>
                <span className="detail-label">DATE</span>
                <strong className="detail-value">Sunday, 15 November 2026</strong>
              </div>
            </div>

            <div className="detail-item">
              <Clock3 className="detail-icon" size={20} />
              <div>
                <span className="detail-label">TIME</span>
                <strong className="detail-value">7:00 PM Evening (19:00 HRS)</strong>
              </div>
            </div>

            <div className="detail-item">
              <MapPin className="detail-icon" size={20} />
              <div>
                <span className="detail-label">VENUE</span>
                <strong className="detail-value">Aroma Marquee, Phase 7, Bahria Town, Rawalpindi</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Evening Timeline / Program */}
      <div className="timeline-container">
        <div className="timeline-header">
          <p className="eyebrow">PROGRAM OF THE EVENING</p>
        </div>

        <div className="timeline-grid">
          {eveningTimeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="timeline-node-card">
                <div className="node-time-badge">{item.time}</div>
                <div className="node-icon-box">
                  <Icon size={20} />
                </div>
                <h4>{item.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
