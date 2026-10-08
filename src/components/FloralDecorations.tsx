"use client";

import { motion } from "framer-motion";

// Sage Olive Leaf Vine (Left Margin)
export const OrganicVineLeft = () => (
  <div className="organic-vine-wrap left-vine" aria-hidden="true">
    <svg
      viewBox="0 0 240 900"
      className="organic-vine-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M -30 -10 Q 90 180 30 380 T 110 700 T 10 920"
        stroke="#5B7055"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M -20 30 Q 100 210 40 410 T 120 730"
        stroke="#C39B4B"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />

      <g>
        <path
          d="M 55 110 C 78 88, 98 105, 88 128 C 72 134, 55 122, 55 110 Z"
          fill="#5B7055"
          opacity="0.85"
        />
        <path
          d="M 72 122 C 94 116, 104 138, 88 148 C 76 142, 68 132, 72 122 Z"
          fill="#8FA388"
          opacity="0.85"
        />
        <ellipse cx="94" cy="108" rx="4" ry="6" fill="#3D4E38" opacity="0.9" />

        <path
          d="M 38 320 C 15 298, 10 326, 28 342 C 45 336, 50 314, 38 320 Z"
          fill="#5B7055"
          opacity="0.85"
        />
        <path
          d="M 45 352 C 68 342, 84 364, 62 380 C 46 374, 40 358, 45 352 Z"
          fill="#C39B4B"
          opacity="0.8"
        />
        <ellipse cx="18" cy="308" rx="4" ry="6" fill="#3D4E38" opacity="0.9" />

        <path
          d="M 88 520 C 118 498, 130 530, 102 552 C 80 546, 76 524, 88 520 Z"
          fill="#5B7055"
          opacity="0.85"
        />
        <ellipse cx="120" cy="536" rx="4" ry="6" fill="#3D4E38" opacity="0.9" />

        <path
          d="M 52 760 C 30 738, 24 766, 46 782 C 62 776, 68 754, 52 760 Z"
          fill="#8FA388"
          opacity="0.85"
        />
        <ellipse cx="32" cy="748" rx="4" ry="6" fill="#3D4E38" opacity="0.9" />
      </g>
    </svg>
  </div>
);

// Sage Olive Leaf Vine (Right Margin)
export const OrganicVineRight = () => (
  <div className="organic-vine-wrap right-vine" aria-hidden="true">
    <svg
      viewBox="0 0 240 900"
      className="organic-vine-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 270 -10 Q 150 200 210 400 T 130 720 T 230 920"
        stroke="#5B7055"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M 260 30 Q 140 230 200 430 T 120 750"
        stroke="#C39B4B"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />

      <g>
        <path
          d="M 185 160 C 162 138, 142 155, 158 178 C 174 184, 191 172, 185 160 Z"
          fill="#5B7055"
          opacity="0.85"
        />
        <path
          d="M 168 178 C 146 172, 136 194, 158 204 C 172 198, 178 186, 168 178 Z"
          fill="#8FA388"
          opacity="0.85"
        />
        <ellipse cx="142" cy="155" rx="4" ry="6" fill="#3D4E38" opacity="0.9" />

        <path
          d="M 202 380 C 225 358, 230 386, 212 402 C 195 396, 190 374, 202 380 Z"
          fill="#5B7055"
          opacity="0.85"
        />
        <ellipse cx="228" cy="368" rx="4" ry="6" fill="#3D4E38" opacity="0.9" />

        <path
          d="M 152 580 C 122 558, 110 590, 138 612 C 160 606, 164 584, 152 580 Z"
          fill="#8FA388"
          opacity="0.85"
        />
        <ellipse cx="120" cy="596" rx="4" ry="6" fill="#3D4E38" opacity="0.9" />
      </g>
    </svg>
  </div>
);

// Organic Background Foliage Artwork
export const OrganicBackgroundFoliage = () => (
  <div className="organic-bg-foliage-container" aria-hidden="true">
    <OrganicVineLeft />
    <OrganicVineRight />
  </div>
);

// Elegant Olive Leaf Divider
export const FloralDivider = () => (
  <div className="floral-divider-container" aria-hidden="true">
    <div className="floral-divider-line left-line olive-line" />
    <svg
      viewBox="0 0 160 30"
      className="floral-divider-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="80" cy="15" rx="4" ry="6" fill="#3D4E38" />
      <path
        d="M80 5 C 83 9, 83 12, 80 15 C 77 12, 77 9, 80 5 Z"
        fill="#5B7055"
      />
      <path
        d="M80 25 C 83 21, 83 18, 80 15 C 77 18, 77 21, 80 25 Z"
        fill="#5B7055"
      />
      <path
        d="M70 15 C 74 12, 77 12, 80 15 C 77 18, 74 18, 70 15 Z"
        fill="#8FA388"
      />
      <path
        d="M90 15 C 86 12, 83 12, 80 15 C 83 18, 86 18, 90 15 Z"
        fill="#8FA388"
      />

      <path
        d="M70 15 Q 50 25 30 15 T 0 15"
        stroke="#5B7055"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M55 19 C 50 23, 45 20, 48 16 C 52 16, 54 18, 55 19 Z"
        fill="#5B7055"
      />
      <ellipse cx="25" cy="15" rx="3" ry="4" fill="#3D4E38" />

      <path
        d="M90 15 Q 110 25 130 15 T 160 15"
        stroke="#5B7055"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M105 19 C 110 23, 115 20, 112 16 C 108 16, 106 18, 105 19 Z"
        fill="#5B7055"
      />
      <ellipse cx="135" cy="15" rx="3" ry="4" fill="#3D4E38" />
    </svg>
    <div className="floral-divider-line right-line olive-line" />
  </div>
);

export const BotanicalHeader = () => null;
export const SectionFloralBridge = () => null;

// Animated Gentle Floating Olive Leaves
const PETALS = [
  { id: 1, left: "5%", delay: 0, duration: 20, size: 16, rotation: 45 },
  { id: 2, left: "20%", delay: 5, duration: 24, size: 20, rotation: 110 },
  { id: 3, left: "38%", delay: 9, duration: 22, size: 14, rotation: 190 },
  { id: 4, left: "55%", delay: 3, duration: 26, size: 18, rotation: 40 },
  { id: 5, left: "72%", delay: 12, duration: 21, size: 22, rotation: 150 },
  { id: 6, left: "88%", delay: 7, duration: 23, size: 16, rotation: 280 },
];

export const FloatingPetals = () => (
  <div className="floating-petals-container" aria-hidden="true">
    {PETALS.map((p) => (
      <motion.div
        key={p.id}
        className="floating-petal"
        style={{
          left: p.left,
          width: p.size,
          height: p.size * 1.8,
        }}
        initial={{ y: "-10vh", opacity: 0, rotate: p.rotation }}
        animate={{
          y: "110vh",
          x: [0, 20, -15, 10, 0],
          opacity: [0, 0.7, 0.9, 0.7, 0],
          rotate: p.rotation + 360,
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 2 C 18 2, 18 20, 10 34 C 2 20, 2 2, 10 2 Z"
            fill="#5B7055"
            opacity="0.8"
          />
          <path
            d="M10 4 L 10 32"
            stroke="#8FA388"
            strokeWidth="0.8"
            opacity="0.7"
          />
        </svg>
      </motion.div>
    ))}
  </div>
);

export const BotanicalCorners = () => null;
export const FloralCorners = () => null;
export const PageBotanicalCorners = () => null;
export const FloralArchHeader = BotanicalHeader;
