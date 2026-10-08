import { FloralDivider } from "./FloralDecorations";

export default function InvitationMessage() {
  return (
    <section className="text-section section-frame">
      <div className="formal-invitation-block">
        <p className="body-copy">
          <strong className="hosts-zubair-line">Mr. &amp; Mrs. Zubair Akhtar</strong> cordially request the honour of your presence at the 
          formal <strong className="walima-accent">Walima Dinner Reception</strong> celebrating the marriage of
        </p>

        {/* Alex Brush Cursive Calligraphy: 3 Dedicated Lines */}
        <div className="invite-script-names font-opt-alex-brush">
          <span className="couple-name-line">Muhammad Arham Zubair</span>
          <span className="couple-ampersand">&amp;</span>
          <span className="couple-name-line">Umaima Akhtar</span>
        </div>

        <p className="daughter-of-line">
          D/O Mr. &amp; Mrs. Pervaiz Akhtar
        </p>

        <p className="body-copy highlight-copy">
          Join us for an exquisite evening of warm hospitality, delicious dining, and celebratory blessings as we honor this blessed union.
        </p>
      </div>

      <FloralDivider />
    </section>
  );
}
