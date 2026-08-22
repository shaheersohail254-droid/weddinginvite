import { Heart } from "lucide-react";
import { FloralDivider } from "./FloralDecorations";

export default function Closing() {
  return (
    <section className="closing section-frame">
      <div className="closing-floral-left" aria-hidden="true">
        <img src="/images/floral_corner.png" alt="" />
      </div>
      <div className="closing-floral-right" aria-hidden="true">
        <img src="/images/floral_corner.png" alt="" />
      </div>
      <p className="eyebrow">WITH LOVE &amp; GRATITUDE</p>
      <h2>We look forward to celebrating with you</h2>
      <FloralDivider />
      <div className="heart">
        <Heart size={24} />
      </div>
      <h3 className="couple-names-closing">Arham &amp; Umaima</h3>
      <p className="closing-date">November 2026</p>
    </section>
  );
}

