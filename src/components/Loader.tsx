import { useState, useEffect } from "react";

interface Props { onDone: () => void; }

export function Loader({ onDone }: Props) {
  const [phase, setPhase] = useState<"stamp" | "reveal" | "out">("stamp");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 700);
    const t2 = setTimeout(() => setPhase("out"),    1600);
    const t3 = setTimeout(() => onDone(),           2100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#1C1917", zIndex: 9999,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: 20,
      opacity: phase === "out" ? 0 : 1,
      transition: "opacity .5s ease",
      pointerEvents: "none",
    }}>
      <div style={{ position: "relative", width: 140, height: 140, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width={140} height={140} style={{ position: "absolute", animation: "spin-slow 3s linear infinite" }}>
          <circle cx={70} cy={70} r={60} fill="none" stroke="#E8501A" strokeWidth={1.5} strokeDasharray="8 6" opacity={0.4} />
        </svg>
        <div style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 900,
          fontSize: "3.5rem", color: "#F5F0E8", letterSpacing: "-0.05em", lineHeight: 1,
          transform: phase === "stamp" ? "scale(0.6) rotate(-12deg)" : "scale(1) rotate(0deg)",
          opacity:   phase === "stamp" ? 0 : 1,
          transition: "transform .5s cubic-bezier(.34,1.56,.64,1), opacity .3s ease",
        }}>
          TM<span style={{ color: "#E8501A" }}>.</span>
        </div>
      </div>
      <p style={{
        fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.7rem",
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "rgba(245,240,232,0.3)",
        opacity: phase === "reveal" ? 1 : 0,
        transition: "opacity .4s .2s",
      }}>
        Loading portfolio
      </p>
    </div>
  );
}
