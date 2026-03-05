import { useState } from "react";
import type { Project } from "@/types";

interface Props { p: Project; }

export function ProjectCard({ p }: Props) {
  const [hov, setHov] = useState(false);

  return (
    <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: p.bg, border: "2px solid #1C1917", borderRadius: 6, overflow: "hidden",
          boxShadow: hov ? `8px 8px 0 ${p.color}` : "5px 5px 0 #1C1917",
          transition: "all .25s ease", cursor: "pointer",
          transform: hov ? "translateY(-4px)" : "none",
        }}
      >
        {/* Top bar */}
        <div style={{ background: p.color, padding: "10px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.7rem", color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.role}</span>
          <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.75)" }}>{p.year}</span>
        </div>

        {/* Body */}
        <div style={{ padding: "28px 24px 24px" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: p.color, marginBottom: 8 }}>{p.num}</div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.2, color: "#1C1917", marginBottom: 12, letterSpacing: "-0.02em" }}>{p.title}</h3>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.85rem", lineHeight: 1.7, color: "#5C534A", marginBottom: 20 }}>{p.desc}</p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {p.tags.map(t => (
              <span key={t} style={{
                fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "3px 9px", border: `1.5px solid ${p.color}`, borderRadius: 2, color: p.color,
              }}>{t}</span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: p.color }}>
            Open Project
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
              style={{ transform: hov ? "translate(3px,-3px)" : "none", transition: "transform .2s" }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
