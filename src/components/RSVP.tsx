import { BotanicalCorners, FloralDivider } from "./FloralDecorations";
import { Phone } from "lucide-react";

export default function RSVP() {
  const hosts = ["Zubair Akhtar", "Zaheer Akhtar", "Sohail Akhtar"];

  const compliments = [
    { name: "Abdul Munim", phone: "0337 0699996", tel: "03370699996" },
    { name: "Mahad Zubair", phone: "0335 9845409", tel: "03359845409" },
    { name: "Husban Zubair", phone: "0330 6384132", tel: "03306384132" },
    { name: "Shaheer Sohail", phone: "0314 3605988", tel: "03143605988" },
  ];

  return (
    <section className="rsvp section-frame" id="rsvp">
      <div className="rsvp-card luxury-rsvp-card">
        <BotanicalCorners />
        <p className="eyebrow">YOUR PRESENCE IS OUR HONOUR</p>
        <h2>RSVP</h2>
        <p className="rsvp-subtitle">Looking forward to welcoming you with warmth and joy.</p>
        <FloralDivider />

        <div className="rsvp-grid-two-col">
          {/* Left Column: RSVP & HOSTS (Center Aligned) */}
          <div className="rsvp-col left-col text-center">
            <h4 className="col-header">RSVP &amp; HOSTS</h4>
            <div className="hosts-list">
              {hosts.map((host) => (
                <div key={host} className="host-item-name">
                  {host}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: WITH BEST COMPLIMENTS (Center Aligned) */}
          <div className="rsvp-col right-col text-center">
            <h4 className="col-header">WITH BEST COMPLIMENTS</h4>
            <div className="compliments-list">
              {compliments.map((c) => (
                <div key={c.name} className="compliment-item align-center">
                  <span className="compliment-name">{c.name}</span>
                  <a href={`tel:${c.tel}`} className="phone-pill center-pill">
                    <Phone size={13} className="phone-icon" />
                    <span>{c.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
