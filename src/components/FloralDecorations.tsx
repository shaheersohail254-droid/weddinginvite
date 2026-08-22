"use client";

import { motion } from "framer-motion";

// Organic Flowing Leaf Vine (Left Margin - No Box)
export const OrganicVineLeft = () => (
  <div className="organic-vine-wrap left-vine" aria-hidden="true">
    <svg
      viewBox="0 0 240 900"
      className="organic-vine-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Smooth Organic S-Curves */}
      <path
        d="M -30 -10 Q 90 180 30 380 T 110 700 T 10 920"
        stroke="#b8944b"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M -20 30 Q 100 210 40 410 T 120 730"
        stroke="#7a917b"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Organic Leaves & Blooms */}
      <g>
        {/* Cluster 1 */}
        <path
          d="M 55 110 C 78 88, 98 105, 88 128 C 72 134, 55 122, 55 110 Z"
          fill="#7a917b"
          opacity="0.42"
        />
        <path
          d="M 72 122 C 94 116, 104 138, 88 148 C 76 142, 68 132, 72 122 Z"
          fill="#b8944b"
          opacity="0.38"
        />
        <circle cx="94" cy="108" r="4.5" fill="#d5b96d" opacity="0.65" />

        {/* Cluster 2 */}
        <path
          d="M 38 320 C 15 298, 10 326, 28 342 C 45 336, 50 314, 38 320 Z"
          fill="#7a917b"
          opacity="0.48"
        />
        <path
          d="M 45 352 C 68 342, 84 364, 62 380 C 46 374, 40 358, 45 352 Z"
          fill="#b8944b"
          opacity="0.38"
        />
        <circle cx="18" cy="308" r="5" fill="#e8c878" opacity="0.7" />

        {/* Cluster 3 */}
        <path
          d="M 88 520 C 118 498, 130 530, 102 552 C 80 546, 76 524, 88 520 Z"
          fill="#7a917b"
          opacity="0.4"
        />
        <path
          d="M 98 562 C 124 556, 134 584, 108 600 C 92 590, 86 574, 98 562 Z"
          fill="#b8944b"
          opacity="0.42"
        />
        <circle cx="120" cy="536" r="4.5" fill="#d5b96d" opacity="0.75" />

        {/* Cluster 4 */}
        <path
          d="M 52 760 C 30 738, 24 766, 46 782 C 62 776, 68 754, 52 760 Z"
          fill="#7a917b"
          opacity="0.45"
        />
        <circle cx="32" cy="748" r="4.5" fill="#e8c878" opacity="0.65" />
      </g>
    </svg>
  </div>
);

// Organic Flowing Leaf Vine (Right Margin - No Box)
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
        stroke="#b8944b"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 260 30 Q 140 230 200 430 T 120 750"
        stroke="#7a917b"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />

      <g>
        <path
          d="M 185 160 C 162 138, 142 155, 158 178 C 174 184, 191 172, 185 160 Z"
          fill="#7a917b"
          opacity="0.42"
        />
        <path
          d="M 168 178 C 146 172, 136 194, 158 204 C 172 198, 178 186, 168 178 Z"
          fill="#b8944b"
          opacity="0.38"
        />
        <circle cx="142" cy="155" r="4.5" fill="#d5b96d" opacity="0.65" />

        <path
          d="M 202 380 C 225 358, 230 386, 212 402 C 195 396, 190 374, 202 380 Z"
          fill="#7a917b"
          opacity="0.48"
        />
        <circle cx="228" cy="368" r="5" fill="#e8c878" opacity="0.7" />

        <path
          d="M 152 580 C 122 558, 110 590, 138 612 C 160 606, 164 584, 152 580 Z"
          fill="#7a917b"
          opacity="0.4"
        />
        <path
          d="M 142 622 C 116 616, 106 644, 132 660 C 148 650, 154 634, 142 622 Z"
          fill="#b8944b"
          opacity="0.42"
        />
        <circle cx="120" cy="596" r="4.5" fill="#d5b96d" opacity="0.75" />
      </g>
    </svg>
  </div>
);

// Organic Background Foliage Artwork (Placed naturally behind content)
export const OrganicBackgroundFoliage = () => (
  <div className="organic-bg-foliage-container" aria-hidden="true">
    <OrganicVineLeft />
    <OrganicVineRight />

    {/* Soft floating botanical watercolor accents */}
    <div className="floating-watercolor-bloom bloom-top-left">
      <img src="/images/floral_corner.png" alt="" />
    </div>
    <div className="floating-watercolor-bloom bloom-top-right">
      <img src="/images/floral_corner.png" alt="" />
    </div>
    <div className="floating-watercolor-bloom bloom-mid-right">
      <img src="/images/floral_corner.png" alt="" />
    </div>
    <div className="floating-watercolor-bloom bloom-bottom-left">
      <img src="/images/floral_corner.png" alt="" />
    </div>
    <div className="floating-watercolor-bloom bloom-bottom-right">
      <img src="/images/floral_corner.png" alt="" />
    </div>
  </div>
);

// Elegant Golden Botanical Vine Divider
export const FloralDivider = () => (
  <div className="floral-divider-container" aria-hidden="true">
    <div className="floral-divider-line left-line" />
    <svg
      viewBox="0 0 160 30"
      className="floral-divider-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="80" cy="15" r="5" fill="url(#goldGrad)" />
      <path
        d="M80 5 C 83 9, 83 12, 80 15 C 77 12, 77 9, 80 5 Z"
        fill="#b8944b"
        opacity="0.9"
      />
      <path
        d="M80 25 C 83 21, 83 18, 80 15 C 77 18, 77 21, 80 25 Z"
        fill="#b8944b"
        opacity="0.9"
      />
      <path
        d="M70 15 C 74 12, 77 12, 80 15 C 77 18, 74 18, 70 15 Z"
        fill="#b8944b"
        opacity="0.9"
      />
      <path
        d="M90 15 C 86 12, 83 12, 80 15 C 83 18, 86 18, 90 15 Z"
        fill="#b8944b"
        opacity="0.9"
      />

      <path
        d="M73 8 C 77 10, 78 13, 80 15 C 76 15, 74 12, 73 8 Z"
        fill="#d5b96d"
        opacity="0.75"
      />
      <path
        d="M87 8 C 83 10, 82 13, 80 15 C 84 15, 86 12, 87 8 Z"
        fill="#d5b96d"
        opacity="0.75"
      />
      <path
        d="M73 22 C 77 20, 78 17, 80 15 C 76 15, 74 18, 73 22 Z"
        fill="#d5b96d"
        opacity="0.75"
      />
      <path
        d="M87 22 C 83 20, 82 17, 80 15 C 84 15, 86 18, 87 22 Z"
        fill="#d5b96d"
        opacity="0.75"
      />

      <path
        d="M70 15 Q 50 25 30 15 T 0 15"
        stroke="#b8944b"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M55 19 C 50 23, 45 20, 48 16 C 52 16, 54 18, 55 19 Z"
        fill="#7a917b"
        opacity="0.85"
      />
      <path
        d="M38 13 C 35 9, 30 11, 32 14 C 35 15, 37 14, 38 13 Z"
        fill="#d5b96d"
        opacity="0.85"
      />
      <circle cx="25" cy="15" r="2.5" fill="#b8944b" />
      <circle cx="15" cy="15" r="1.5" fill="#d5b96d" />

      <path
        d="M90 15 Q 110 25 130 15 T 160 15"
        stroke="#b8944b"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M105 19 C 110 23, 115 20, 112 16 C 108 16, 106 18, 105 19 Z"
        fill="#7a917b"
        opacity="0.85"
      />
      <path
        d="M122 13 C 125 9, 130 11, 128 14 C 125 15, 123 14, 122 13 Z"
        fill="#d5b96d"
        opacity="0.85"
      />
      <circle cx="135" cy="15" r="2.5" fill="#b8944b" />
      <circle cx="145" cy="15" r="1.5" fill="#d5b96d" />

      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b8944b" />
          <stop offset="50%" stopColor="#f4e3b1" />
          <stop offset="100%" stopColor="#d5b96d" />
        </linearGradient>
      </defs>
    </svg>
    <div className="floral-divider-line right-line" />
  </div>
);

// Botanical Floral Banner Header
export const BotanicalHeader = () => (
  <div className="botanical-header-wrap" aria-hidden="true">
    <img
      src="/images/floral_header.png"
      alt="Botanical Header Garland"
      className="botanical-header-img"
    />
  </div>
);

// Flowing Floral Seam Bridge (Placed between ending section line and next section)
export const SectionFloralBridge = () => (
  <div className="section-floral-bridge" aria-hidden="true">
    <img
      src="/images/floral_header.png"
      alt="Floral Section Transition"
      className="section-bridge-img"
    />
  </div>
);

// Animated Gentle Floating Rose/Jasmine Petals in Background
const PETALS = [
  { id: 1, left: "5%", delay: 0, duration: 18, size: 16, rotation: 45 },
  { id: 2, left: "18%", delay: 4, duration: 22, size: 22, rotation: 120 },
  { id: 3, left: "32%", delay: 8, duration: 20, size: 14, rotation: 200 },
  { id: 4, left: "48%", delay: 2, duration: 25, size: 18, rotation: 30 },
  { id: 5, left: "62%", delay: 11, duration: 19, size: 20, rotation: 160 },
  { id: 6, left: "75%", delay: 6, duration: 23, size: 15, rotation: 80 },
  { id: 7, left: "88%", delay: 1, duration: 21, size: 24, rotation: 240 },
  { id: 8, left: "94%", delay: 14, duration: 26, size: 17, rotation: 310 },
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
          height: p.size,
        }}
        initial={{ y: "-10vh", opacity: 0, rotate: p.rotation }}
        animate={{
          y: "110vh",
          x: [0, 25, -20, 15, 0],
          opacity: [0, 0.45, 0.6, 0.4, 0],
          rotate: p.rotation + 360,
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 3 C 25 3, 27 15, 15 27 C 3 15, 5 3, 15 3 Z"
            fill="url(#petalGrad)"
            opacity="0.75"
          />
          <path
            d="M15 5 C 20 8, 20 20, 15 24"
            stroke="#d5b96d"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="petalGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e8c878" />
              <stop offset="50%" stopColor="#c9ab6a" />
              <stop offset="100%" stopColor="#8c6a34" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    ))}
  </div>
);

// Backwards compatibility empty components so existing imports don't error
export const BotanicalCorners = () => null;
export const FloralCorners = () => null;
export const PageBotanicalCorners = () => null;
export const FloralArchHeader = BotanicalHeader;
