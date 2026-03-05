import { Reveal }     from "@/components/Reveal";
import { SkillPill }  from "@/components/SkillPill";
import { SectionDiv } from "@/components/SectionDiv";
import { SKILLS, LEARNING } from "@/data";
import type { Colors }        from "@/types";

interface Props { C: Colors; dark: boolean; }

export function Skills({ C, dark }: Props) {
  return (
    <section id="skills" className="pad" style={{ background: C.bg2 }}>
      <SectionDiv num="03" label="Skills" color={C.forest} />

      <Reveal>
        <h2 className="sec-h" style={{ color: C.ink, marginBottom: 14 }}>
          My <em style={{ color: C.forest }}>toolkit.</em>
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: C.muted, maxWidth: 440, marginBottom: 36 }}>
          Every technology listed is one I've used in a real project.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="pills">
          {SKILLS.map(s => <SkillPill key={s.name} s={s} dark={dark} />)}
        </div>
      </Reveal>

      {/* Currently Learning */}
      <Reveal delay={140}>
        <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 52, paddingTop: 44 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.terra, animation: "pulse-ring 2s infinite", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.terra }}>
              Currently Learning
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {LEARNING.map(s => (
              <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: C.bg, border: `2px dashed ${C.border}`, borderRadius: 6 }}>
                <img src={s.src} alt={s.name} width={24} height={24} style={{ objectFit: "contain", flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: C.ink }}>{s.name}</div>
                  <div style={{ fontSize: "0.7rem", color: C.muted, marginTop: 1 }}>{s.note}</div>
                </div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.65rem", color: C.terra, background: "rgba(232,80,26,0.09)", padding: "2px 8px", borderRadius: 100, whiteSpace: "nowrap" }}>
                  in progress
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="ghost" style={{ marginTop: 60 }}>FULL STACK</div>
    </section>
  );
}
