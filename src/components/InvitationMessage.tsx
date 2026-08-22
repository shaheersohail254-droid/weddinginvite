import { FloralDivider } from "./FloralDecorations";

export default function InvitationMessage() {
  return (
    <section className="text-section section-frame">
      <div className="hands-art-wrap">
        <div className="hands-art-frame">
          <img
            src="/images/hands_illustration.png"
            alt="Bride and Groom Hands Line Art Illustration"
            className="hands-art-img"
          />
        </div>
      </div>
      <p className="eyebrow">WITH JOY IN OUR HEARTS</p>
      <h2>We invite you to celebrate</h2>
      <p className="body-copy">
        The families of Arham Zubair and Umaima Akhtar cordially invite you to share in the joy, blessings and beautiful moments of their wedding celebrations.
      </p>
      <FloralDivider />
    </section>
  );
}
