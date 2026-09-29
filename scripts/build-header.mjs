// Generates assets/header.svg — the animated profile banner.
// Edit LINES (keep each under ~44 chars), then run:  node scripts/build-header.mjs
// Zero dependencies. Output is a plain SVG using SMIL + system fonts,
// so it renders inside GitHub's <img> sandbox with no external requests.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINES = [
  "building storefront — commerce for web + mobile",
  "Next.js · Hono · Expo · Drizzle · PostgreSQL",
  "real-time 1-on-1 video over WebRTC",
  "typed, minimal, production-first code",
];

const NAME = "Monaf Horany";
const ROLE = "Computer Engineer · Full-Stack &amp; Mobile Developer";
const STATUS = "currently shipping: storefront";

// Typing timing (seconds)
const TYPE_PER_CHAR = 0.055;
const HOLD = 1.8;
const DELETE_PER_CHAR = 0.022;
const GAP = 0.35;

// Monospace metrics: textLength pins every line to exactly n * CHAR_W,
// so the cursor lands on the last glyph whatever font the viewer has.
const FONT_SIZE = 24;
const CHAR_W = FONT_SIZE * 0.6;
const TEXT_X = 96;
const BASELINE = 248;

const esc = (s) =>
  s.replace(/&(?!amp;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const r = (n) => Math.round(n * 10000) / 10000;

// Build one global timeline of [time, lineIndex, visibleChars] frames.
const frames = [];
let t = 0;
LINES.forEach((line, i) => {
  const n = [...line].length;
  for (let c = 0; c <= n; c++) {
    frames.push([t, i, c]);
    if (c < n) t += TYPE_PER_CHAR;
  }
  t += HOLD;
  for (let c = n - 1; c >= 0; c--) {
    t += DELETE_PER_CHAR;
    frames.push([t, i, c]);
  }
  t += GAP;
});
const CYCLE = t;

const keyTimes = frames.map(([ft]) => r(ft / CYCLE));
keyTimes[0] = 0;
const kt = [...keyTimes, 1].join(";");

const clipAnimations = LINES.map((_, i) => {
  const values = frames.map(([, li, c]) => (li === i ? r(c * CHAR_W) : 0));
  values.push(0);
  return `<clipPath id="c${i}"><rect x="${TEXT_X}" y="${BASELINE - 26}" height="36" width="0">
      <animate attributeName="width" dur="${r(CYCLE)}s" repeatCount="indefinite" calcMode="discrete" keyTimes="${kt}" values="${values.join(";")}"/>
    </rect></clipPath>`;
}).join("\n    ");

const cursorX = frames.map(([, , c]) => r(TEXT_X + c * CHAR_W + 2));
cursorX.push(TEXT_X + 2);

const lineEls = LINES.map((line, i) => {
  const n = [...line].length;
  return `<text x="${TEXT_X}" y="${BASELINE}" clip-path="url(#c${i})" textLength="${r(n * CHAR_W)}" lengthAdjust="spacing" class="mono" font-size="${FONT_SIZE}" fill="#E6EDF3">${esc(line)}</text>`;
}).join("\n  ");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" width="1200" height="340" role="img" aria-label="${NAME} — ${ROLE.replace("&amp;", "and")}">
  <title>${NAME}</title>
  <style>
    .sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
    .mono { font-family: ui-monospace, SFMono-Regular, "Cascadia Code", "JetBrains Mono", Menlo, Consolas, "Liberation Mono", monospace; }
  </style>
  <defs>
    <clipPath id="card"><rect width="1200" height="340" rx="24"/></clipPath>
    <radialGradient id="g1"><stop offset="0" stop-color="#7C3AED" stop-opacity=".55"/><stop offset="1" stop-color="#7C3AED" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2"><stop offset="0" stop-color="#06B6D4" stop-opacity=".45"/><stop offset="1" stop-color="#06B6D4" stop-opacity="0"/></radialGradient>
    <radialGradient id="g3"><stop offset="0" stop-color="#EC4899" stop-opacity=".35"/><stop offset="1" stop-color="#EC4899" stop-opacity="0"/></radialGradient>
    <linearGradient id="name" x1="0" y1="0" x2="1" y2="0" spreadMethod="reflect">
      <stop offset="0" stop-color="#A78BFA"/><stop offset=".5" stop-color="#22D3EE"/><stop offset="1" stop-color="#F472B6"/>
      <animateTransform attributeName="gradientTransform" type="translate" values="0 0;1 0;0 0" dur="9s" repeatCount="indefinite"/>
    </linearGradient>
    <linearGradient id="mono" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7C3AED"/><stop offset="1" stop-color="#06B6D4"/>
    </linearGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="#FFFFFF" stroke-opacity=".035"/>
    </pattern>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10"/></filter>
    ${clipAnimations}
  </defs>

  <g clip-path="url(#card)">
    <rect width="1200" height="340" fill="#0B0F17"/>
    <circle cx="200" cy="80" r="300" fill="url(#g1)">
      <animateTransform attributeName="transform" type="translate" values="0 0;60 30;0 0" dur="14s" repeatCount="indefinite"/>
    </circle>
    <circle cx="1060" cy="330" r="280" fill="url(#g2)">
      <animateTransform attributeName="transform" type="translate" values="0 0;-50 -30;0 0" dur="12s" repeatCount="indefinite"/>
    </circle>
    <circle cx="700" cy="-40" r="220" fill="url(#g3)">
      <animateTransform attributeName="transform" type="translate" values="0 0;-40 40;0 0" dur="16s" repeatCount="indefinite"/>
    </circle>
    <rect width="1200" height="340" fill="url(#grid)"/>

    <rect width="1200" height="40" fill="#FFFFFF" fill-opacity=".03"/>
    <path d="M0 40.5H1200" stroke="#FFFFFF" stroke-opacity=".06"/>
    <circle cx="30" cy="20" r="6" fill="#FF5F57"/>
    <circle cx="52" cy="20" r="6" fill="#FEBC2E"/>
    <circle cx="74" cy="20" r="6" fill="#28C840"/>
    <text x="600" y="25" text-anchor="middle" class="mono" font-size="13" fill="#6E7681">~/monafHorany — zsh</text>

    <text x="64" y="140" class="sans" font-size="58" font-weight="800" fill="#E6EDF3" letter-spacing="-1">Hi, I’m <tspan fill="url(#name)">${NAME}</tspan></text>
    <text x="66" y="184" class="sans" font-size="22" fill="#8B949E">${ROLE}</text>

    <text x="64" y="${BASELINE}" class="mono" font-size="${FONT_SIZE}" font-weight="700" fill="#22D3EE">❯</text>
    ${lineEls}
    <rect y="${BASELINE - 21}" width="12" height="26" rx="2" fill="#A78BFA">
      <animate attributeName="x" dur="${r(CYCLE)}s" repeatCount="indefinite" calcMode="discrete" keyTimes="${kt}" values="${cursorX.join(";")}"/>
      <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.5;.5;1" dur="1s" repeatCount="indefinite"/>
    </rect>

    <circle cx="72" cy="296" r="5" fill="#28C840"/>
    <circle cx="72" cy="296" r="5" fill="none" stroke="#28C840">
      <animate attributeName="r" values="5;13" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values=".8;0" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="88" y="301" class="mono" font-size="14" fill="#8B949E">${esc(STATUS)}</text>

    <g transform="translate(1000 190)">
      <circle r="130" fill="none" stroke="#A78BFA" stroke-opacity=".22" stroke-dasharray="2 9"/>
      <circle r="95" fill="none" stroke="#22D3EE" stroke-opacity=".22"/>
      <circle r="60" fill="none" stroke="#F472B6" stroke-opacity=".25" stroke-dasharray="4 6"/>
      <g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="36s" repeatCount="indefinite"/>
        <circle cx="130" r="7" fill="#A78BFA"/><circle cx="-130" r="4" fill="#A78BFA" fill-opacity=".6"/></g>
      <g><animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="22s" repeatCount="indefinite"/>
        <circle cy="-95" r="6" fill="#22D3EE"/><circle cx="82" cy="47" r="3.5" fill="#22D3EE" fill-opacity=".6"/></g>
      <g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite"/>
        <circle cx="60" r="5" fill="#F472B6"/></g>
      <circle r="40" fill="url(#mono)" filter="url(#glow)" opacity=".7"/>
      <circle r="38" fill="url(#mono)"/>
      <text y="10" text-anchor="middle" class="sans" font-size="28" font-weight="800" fill="#FFFFFF" letter-spacing="1">MH</text>
    </g>
  </g>
  <rect x=".5" y=".5" width="1199" height="339" rx="23.5" fill="none" stroke="#FFFFFF" stroke-opacity=".08"/>
</svg>
`;

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "assets", "header.svg");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, svg);
console.log(`wrote ${out} (${(svg.length / 1024).toFixed(1)} KB, ${r(CYCLE)}s loop)`);
