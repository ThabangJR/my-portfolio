import { Reveal }     from "@/components/Reveal";
import { SectionDiv } from "@/components/SectionDiv";
import { TIMELINE }   from "@/data";
import type { Colors }  from "@/types";

interface Props { C: Colors; }

export function Timeline({ C }: Props) {
  return (
    <section id="timeline" className="pad" style={{ background: C.bg2 }}>
      <SectionDiv num="05" label="Journey" color={C.forest} />

      <Reveal>
        <h2 className="sec-h" style={{ color: C.ink, marginBottom: 14 }}>
          My <em style={{ color: C.forest }}>story.</em>
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: C.muted, maxWidth: 440, marginBottom: 60 }}>
          From secondary school to shipping real products — here's how I got here.
        </p>
      </Reveal>

      <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
       
        <div className="tl-line" />

        {TIMELINE.map((item, i) => (
          <Reveal key={item.year} delay={i * 80}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 28px 1fr", marginBottom: 40, position: "relative" }}>

              {/* Left slot */}
              <div style={{ paddingRight: 32, paddingTop: 16 }}>
                {item.side === "left" && (
                  <div className="tl-card" style={{ borderColor: item.highlight ? C.terra : C.border, background: C.bg }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "0.75rem", color: C.terra, letterSpacing: "0.15em", marginBottom: 6 }}>{item.year}</div>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", color: item.highlight ? C.terra : C.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>{item.title}</h4>
                    <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: C.muted }}>{item.desc}</p>
                  </div>
                )}
              </div>

              {/* Dot */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: item.highlight ? C.terra : C.forest, border: `3px solid ${C.bg2}`, marginTop: 22, zIndex: 1, flexShrink: 0, boxShadow: item.highlight ? "0 0 0 4px rgba(232,80,26,0.2)" : "none" }} />
              </div>

              {/* Right slot */}
              <div style={{ paddingLeft: 32, paddingTop: 16 }}>
                {item.side === "right" && (
                  <div className="tl-card" style={{ borderColor: item.highlight ? C.terra : C.border, background: C.bg }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "0.75rem", color: C.terra, letterSpacing: "0.15em", marginBottom: 6 }}>{item.year}</div>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", color: item.highlight ? C.terra : C.ink, marginBottom: 8, letterSpacing: "-0.02em" }}>{item.title}</h4>
                    <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: C.muted }}>{item.desc}</p>
                  </div>
                )}
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
