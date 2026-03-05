import { NAV_LINKS } from "@/data";

interface Props { visible: boolean; }

export function KeyboardHint({ visible }: Props) {
  return (
    <div style={{
      position: "fixed", right: 20, bottom: 80, zIndex: 500,
      opacity: visible ? 1 : 0, transition: "opacity .4s",
      pointerEvents: "none",
    }}>
      <div style={{
        background: "rgba(28,25,23,0.9)", backdropFilter: "blur(8px)",
        borderRadius: 6, padding: "12px 14px",
        display: "flex", flexDirection: "column", gap: 6,
      }}>
        {NAV_LINKS.map(([, label], i) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.68rem", color: "rgba(245,240,232,0.5)" }}>
            <span style={{
              background: "rgba(245,240,232,0.12)",
              border: "1px solid rgba(245,240,232,0.15)",
              borderRadius: 3, padding: "1px 6px",
              color: "rgba(245,240,232,0.8)", fontWeight: 700,
            }}>{i + 1}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
