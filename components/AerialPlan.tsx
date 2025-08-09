"use client";
import React from "react";

export default function AerialPlan() {
  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
      <div className="text-sm uppercase tracking-widest text-slate-500 mb-2">
        Resort Vision (Teen-first)
      </div>
      <div className="relative w-full overflow-hidden rounded-lg">
        <svg
          viewBox="0 0 1200 800"
          role="img"
          aria-label="Aerial layout of a homeschool resort neighborhood showing stadium, auditorium, teen commons, homes, overflow parking and gated entry"
          className="w-full h-auto"
        >
          {/* Background */}
          <rect x="0" y="0" width="1200" height="800" fill="#f5f7fb" />

          {/* Gated Entry + Road */}
          <rect x="40" y="360" width="140" height="80" rx="12" fill="#e2e8f0" stroke="#cbd5e1" />
          <text x="110" y="405" textAnchor="middle" fontSize="20" fill="#334155">Gated Entry</text>
          <rect x="180" y="392" width="220" height="16" fill="#cbd5e1" />

          {/* Central Hub pad */}
          <rect x="430" y="210" width="420" height="380" rx="24" fill="#e6eef7" stroke="#cbd5e1" />

          {/* Auditorium */}
          <rect x="470" y="240" width="220" height="120" rx="12" fill="#ffffff" stroke="#94a3b8" />
          <text x="580" y="305" textAnchor="middle" fontSize="20" fill="#1f2937">Auditorium</text>

          {/* Teen Commons */}
          <rect x="470" y="380" width="220" height="150" rx="16" fill="#fdf2f8" stroke="#f0abfc" />
          <text x="580" y="460" textAnchor="middle" fontSize="20" fill="#831843">Teen Commons</text>

          {/* Baseball Stadium */}
          <g>
            <ellipse cx="830" cy="390" rx="210" ry="160" fill="#dcfce7" stroke="#86efac" />
            <path d="M 620 390 Q 830 230 1040 390 Q 830 550 620 390 Z" fill="#bbf7d0" opacity="0.9" />
            <text x="830" y="395" textAnchor="middle" fontSize="22" fill="#065f46">Baseball Stadium</text>
          </g>

          {/* Overflow Parking */}
          <rect x="890" y="560" width="250" height="160" rx="12" fill="#f1f5f9" stroke="#cbd5e1" />
          {[...Array(6)].map((_, i) => (
            <rect key={i} x={905 + i * 38} y={575} width="22" height="130" fill="#e2e8f0" />
          ))}
          <text x="1015" y="640" textAnchor="middle" fontSize="20" fill="#334155">Overflow Parking</text>

          {/* Home Clusters */}
          {[
            { x: 260, y: 160 }, { x: 200, y: 240 }, { x: 300, y: 260 },
            { x: 260, y: 540 }, { x: 200, y: 470 }, { x: 320, y: 480 },
            { x: 800, y: 150 }, { x: 900, y: 200 }, { x: 980, y: 160 },
          ].map((h, idx) => (
            <g key={idx}>
              <rect x={h.x} y={h.y} width="54" height="40" rx="6" fill="#fff" stroke="#cbd5e1" />
              <rect x={h.x + 10} y={h.y + 40} width="34" height="12" fill="#cbd5e1" />
            </g>
          ))}
          <text x="310" y="130" textAnchor="middle" fontSize="18" fill="#334155">Bookable Homes</text>

          {/* Paths */}
          <path d="M 600 330 L 600 380" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
          <path d="M 690 300 L 820 300" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
          <path d="M 690 450 L 820 450" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
          <path d="M 460 320 L 330 260" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
          <path d="M 460 460 L 330 490" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />

          {/* Legend */}
          <rect x="40" y="40" width="250" height="120" rx="12" fill="#ffffff" stroke="#e5e7eb" />
          <circle cx="60" cy="70" r="8" fill="#e6eef7" stroke="#cbd5e1" />
          <text x="80" y="75" fontSize="16" fill="#334155">Central Hub</text>
          <circle cx="60" cy="100" r="8" fill="#dcfce7" stroke="#86efac" />
          <text x="80" y="105" fontSize="16" fill="#334155">Stadium</text>
          <rect x="52" y="118" width="16" height="10" fill="#f1f5f9" stroke="#cbd5e1" />
          <text x="80" y="127" fontSize="16" fill="#334155">Overflow Parking</text>
        </svg>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
        Teen-first design: daily baseball league, instrument practice and performances in the
        auditorium, and a dedicated Teen Commons. Parent-led — no drop-offs — with clear overflow
        parking to keep streets calm.
      </p>
    </div>
  );
}
