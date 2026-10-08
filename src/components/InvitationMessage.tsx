import { FloralDivider } from "./FloralDecorations";
import { Quote } from "lucide-react";

export default function InvitationMessage() {
  return (
    <section className="text-section section-frame">
      <div className="italian-quote-box">
        <Quote size={28} className="quote-icon-gold" />
        <blockquote className="italian-quote-text">
          &ldquo;And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them...&rdquo;
        </blockquote>
      </div>

      <p className="eyebrow">WITH JOY &amp; GRATITUDE</p>
      <h2 className="italian-section-title">The Walima Reception</h2>
      
      <p className="body-copy">
        <strong>Mr. &amp; Mrs. Zubair Akhtar</strong> cordially request the honour of your presence at the 
        formal <strong>Walima Dinner Reception</strong> celebrating the marriage of <strong>Arham Zubair</strong> to <strong>Umaima Akhtar</strong>.
      </p>

      <p className="body-copy highlight-copy">
        Join us for an exquisite evening of warm hospitality, delicious dining, and celebratory blessings as we honor this blessed union.
      </p>

      <FloralDivider />
    </section>
  );
}
