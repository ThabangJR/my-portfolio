import { Reveal } from "./Reveal";
import { Star }   from "./Star";

interface Props { num: string; label: string; color: string; }

export function SectionDiv({ num, label, color }: Props) {
  return (
    <Reveal>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 48 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color, whiteSpace: "nowrap" }}>
          Chapter {num}
        </span>
        <div style={{ flex: 1, height: 1, background: "rgba(28,25,23,0.1)", minWidth: 20 }} />
        <Star size={14} color={color} />
      </div>
    </Reveal>
  );
}
