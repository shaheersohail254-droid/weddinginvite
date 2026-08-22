import { Heart } from "lucide-react";
import { FloralDivider } from "./FloralDecorations";

export default function Closing() {
  return (
    <section className="closing section-frame">
      <p className="eyebrow">WITH LOVE &amp; GRATITUDE</p>
      <h2>We look forward to celebrating with you</h2>
      <FloralDivider />
      <div className="heart">
        <Heart size={22} />
      </div>
      <h3>Arham &amp; Umaima</h3>
      <p>November 2026</p>
    </section>
  );
}
