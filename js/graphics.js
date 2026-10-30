/* =========================================================
   MowMow Vector Graphics & SVG Illustrations
   Matches the artwork in the reference image
   ========================================================= */

(function(){
  'use strict';

  const MowGraphics = {
    // Delivery Scooter Rider (Panels 6 & 7)
    scooterRider: function(w = 120, h = 90) {
      return `
        <svg width="${w}" height="${h}" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-scooter-rider">
          <!-- Road line / speed lines -->
          <path d="M10 92H130" stroke="rgba(231, 174, 83, 0.3)" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 6"/>
          <!-- Rear Wheel -->
          <circle cx="34" cy="80" r="14" fill="#1A100A" stroke="#FF8A27" stroke-width="4"/>
          <circle cx="34" cy="80" r="6" fill="#FFF6EC"/>
          <!-- Front Wheel -->
          <circle cx="106" cy="80" r="14" fill="#1A100A" stroke="#FF8A27" stroke-width="4"/>
          <circle cx="106" cy="80" r="6" fill="#FFF6EC"/>
          <!-- Scooter Body -->
          <path d="M34 80L50 80L68 76L85 76L95 56L106 80" stroke="#FF285B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M60 76L55 54H42" stroke="#FF285B" stroke-width="5" stroke-linecap="round"/>
          <!-- Delivery Thermal Box -->
          <rect x="22" y="38" width="26" height="24" rx="4" fill="#FF8A27" stroke="#FFF" stroke-width="1.5"/>
          <path d="M22 46H48" stroke="#FFF" stroke-width="1.5"/>
          <text x="35" y="55" font-family="sans-serif" font-size="7" font-weight="900" fill="#FFF" text-anchor="middle">MM</text>
          <!-- Rider Body & Arm -->
          <circle cx="68" cy="30" r="10" fill="#FF8A27"/> <!-- Helmet -->
          <path d="M72 28H78" stroke="#1A100A" stroke-width="3" stroke-linecap="round"/> <!-- Visor -->
          <path d="M66 40L58 64L76 64L82 54" fill="#FF285B"/> <!-- Jacket & Legs -->
          <path d="M64 42L82 48L92 52" stroke="#FFF6EC" stroke-width="3.5" stroke-linecap="round"/> <!-- Arm -->
          <!-- Handlebar & Headlight -->
          <path d="M92 50L96 52" stroke="#333" stroke-width="4" stroke-linecap="round"/>
          <circle cx="102" cy="54" r="4" fill="#FFE885"/>
          <path d="M106 54L124 48" stroke="rgba(255, 232, 133, 0.4)" stroke-width="8" stroke-linecap="round"/>
        </svg>
      `;
    },

    // Cute MowMow AI Robot Mascot (Panel 8)
    robotMascot: function(w = 90, h = 90) {
      return `
        <svg width="${w}" height="${h}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-robot-mascot">
          <defs>
            <linearGradient id="robotBody" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFF6EC"/>
              <stop offset="1" stop-color="#E2D4C6"/>
            </linearGradient>
            <linearGradient id="robotPink" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF5A7E"/>
              <stop offset="1" stop-color="#FF285B"/>
            </linearGradient>
            <filter id="glowEyes" x="-10" y="-10" width="120" height="120" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <!-- Antenna -->
          <line x1="50" y1="20" x2="50" y2="30" stroke="#FF285B" stroke-width="4" stroke-linecap="round"/>
          <circle cx="50" cy="18" r="6" fill="#FF8A27"/>
          <circle cx="50" cy="18" r="3" fill="#FFF"/>
          <!-- Chef Toque Hat -->
          <path d="M38 28C38 22 44 20 48 22C52 18 60 20 62 26C66 26 68 30 66 34H34C34 30 36 28 38 28Z" fill="#FFF" stroke="#E7AE53" stroke-width="1.5"/>
          <rect x="34" y="32" width="32" height="4" rx="2" fill="#E7AE53"/>
          <!-- Robot Head -->
          <rect x="22" y="34" width="56" height="42" rx="18" fill="url(#robotBody)" stroke="#C3B1A0" stroke-width="2"/>
          <!-- Visor / Face Screen -->
          <rect x="28" y="40" width="44" height="26" rx="12" fill="#17100B"/>
          <!-- Cute Glowing Cyan Eyes -->
          <ellipse cx="40" cy="52" rx="5" ry="6" fill="#3AA7FF" filter="url(#glowEyes)"/>
          <circle cx="42" cy="50" r="2" fill="#FFF"/>
          <ellipse cx="60" cy="52" rx="5" ry="6" fill="#3AA7FF" filter="url(#glowEyes)"/>
          <circle cx="62" cy="50" r="2" fill="#FFF"/>
          <!-- Rosy Cheeks -->
          <circle cx="34" cy="58" r="3" fill="rgba(255, 40, 91, 0.6)"/>
          <circle cx="66" cy="58" r="3" fill="rgba(255, 40, 91, 0.6)"/>
          <!-- Robot Body / Collar -->
          <path d="M36 78L40 92H60L64 78" fill="url(#robotPink)" stroke="#C3B1A0" stroke-width="1.5"/>
          <circle cx="50" cy="85" r="3" fill="#E7AE53"/>
        </svg>
      `;
    },

    // Elegant Fallback Food Plate (if network blocks remote photo)
    fallbackFood: function(label = 'Gourmet Dish') {
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450" fill="%2317100B"><rect width="600" height="450" fill="%2317100B"/><circle cx="300" cy="225" r="160" fill="%2323160E" stroke="%23E7AE53" stroke-width="3" stroke-dasharray="10 5"/><circle cx="300" cy="225" r="120" fill="%232B1B13"/><circle cx="300" cy="225" r="80" fill="%233D2211"/><text x="300" y="225" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="%23FFF6EC" text-anchor="middle" dy="7">${encodeURIComponent(label)}</text><text x="300" y="260" font-family="sans-serif" font-size="14" fill="%23E7AE53" text-anchor="middle">MowMow Kitchen Special</text></svg>`;
    }
  };

  window.MowGraphics = MowGraphics;
})();
