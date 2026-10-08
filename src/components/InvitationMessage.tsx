import { FloralDivider } from "./FloralDecorations";

export default function InvitationMessage() {
  return (
    <section className="text-section section-frame">
      <div className="formal-invitation-block">
        <p className="body-copy">
          <strong className="hosts-zubair-line">Mr. &amp; Mrs. Zubair Akhtar</strong> cordially request the honour of your presence at the 
          formal <strong className="walima-accent">Walima Dinner Reception</strong> celebrating the marriage of
        </p>

        {/* Option 1: Alex Brush Cursive Calligraphy */}
        <div className="invite-script-names font-opt-alex-brush">
          Muhammad Arham Zubair &amp; Umaima Akhtar
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
