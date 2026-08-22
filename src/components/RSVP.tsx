import { BotanicalCorners, FloralDivider } from "./FloralDecorations";

export default function RSVP() {
  return (
    <section className="rsvp section-frame">
      <div className="rsvp-card">
        <BotanicalCorners />
        <p className="eyebrow">YOUR PRESENCE IS OUR HONOUR</p>
        <h2>RSVP</h2>
        <p>Please join us in celebrating these precious moments with our families.</p>
        <FloralDivider />
        <div className="rsvp-lines">
          <div>
            <span>MEHNDI &amp; WALIMA</span>
            <strong>Zubair Akhtar</strong>
          </div>
          <div>
            <span>BARAT</span>
            <strong>Perwaiz Akhtar</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
