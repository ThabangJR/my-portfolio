import { useState } from "react";
import type { Skill } from "@/types";

interface Props { s: Skill; dark: boolean; }

export function SkillPill({ s, dark }: Props) {
  const [hov, setHov] = useState(false);
  const [err, setErr]  = useState(false);

  const bg  = dark ? "#1C1917" : "#fff";
  const bdr = dark ? "#3a3530" : "#1C1917";
  const txt = dark ? "#F5F0E8" : "#1C1917";

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "9px 16px",
        background: hov ? s.brand : bg,
        border: `2px solid ${hov ? s.brand : bdr}`,
        borderRadius: 100,
        boxShadow: hov ? "3px 3px 0 #1C1917" : "2px 2px 0 rgba(28,25,23,0.25)",
        transition: "all .18s ease", cursor: "default",
      }}
    >
      {err ? (
        <div style={{
          width: 20, height: 20, borderRadius: "50%",
          background: s.brand, display: "flex", alignItems: "center",
          justifyContent: "center", flexShrink: 0,
          fontSize: "0.6rem", fontWeight: 800, color: "#fff",
        }}>
          {s.name[0]}
        </div>
      ) : (
        <img
          src={s.src} alt={s.name} width={20} height={20}
          style={{
            objectFit: "contain",
            filter: s.invert ? (hov ? "invert(1)" : "invert(0.7)") : "none",
            transition: "filter .2s", flexShrink: 0,
          }}
          onError={() => setErr(true)}
        />
      )}
      <span style={{
        fontFamily: "'Instrument Sans', sans-serif",
        fontSize: "0.8rem", fontWeight: 700,
        color: hov ? "#fff" : txt,
        transition: "color .18s", whiteSpace: "nowrap",
      }}>
        {s.name}
      </span>
    </div>
  );
}
