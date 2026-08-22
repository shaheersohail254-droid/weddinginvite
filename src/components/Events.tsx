import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { FloralDivider } from "./FloralDecorations";

const events = [
  {
    title: "MEHNDI",
    subtitle: "Night of Henna & Music",
    date: "12 November 2026",
    time: "7:00 PM Onwards",
    venue: "Residence",
    rsvp: "Zubair Akhtar",
    tone: "mehndi",
    image: "/images/mehndi_event.webp",
    tag: "Traditional Henna Ceremony",
  },
  {
    title: "BARAT",
    subtitle: "The Grand Wedding Ceremony",
    date: "13 November 2026",
    time: "12:00 PM Noon",
    venue: "Grand Anmol Banquet Hall, Lahore",
    rsvp: "Perwaiz Akhtar",
    tone: "barat",
    image: "/images/barat_event.webp",
    tag: "Wedding Ceremony & Feast",
  },
  {
    title: "WALIMA",
    subtitle: "The Reception Celebration",
    date: "15 November 2026",
    time: "6:00 PM Evening",
    venue: "Aroma Marquee, Bahria Town Phase 8, Rawalpindi",
    rsvp: "Zubair Akhtar",
    tone: "walima",
    image: "/images/wedding_stage.jpg",
    tag: "Grand Festive Reception",
  },
];

export default function Events() {
  return (
    <section className="events section-frame" id="events">
      <div className="section-heading">
        <p className="eyebrow">THE CELEBRATIONS</p>
        <h2>Our Wedding Events</h2>
        <FloralDivider />
      </div>
      <div className="event-grid">
        {events.map((e) => (
          <article className={`event-card ${e.tone}`} key={e.title}>
            <div className="event-image">
              <img
                src={e.image}
                alt={`${e.title} Celebration visual`}
                className="event-card-img"
              />
            </div>
            <div className="event-content">
              <h3>{e.title}</h3>
              <div className="event-detail">
                <CalendarDays size={17} />
                <span>{e.date}</span>
              </div>
              {e.time && (
                <div className="event-detail">
                  <Clock3 size={17} />
                  <span>{e.time}</span>
                </div>
              )}
              <div className="event-detail">
                <MapPin size={17} />
                <span>{e.venue}</span>
              </div>
              <div className="event-rsvp">
                RSVP: <strong>{e.rsvp}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
