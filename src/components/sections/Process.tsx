import { Reveal }     from "@/components/Reveal";
import { SectionDiv } from "@/components/SectionDiv";
import { PROCESS }    from "@/data";
import type { Colors }  from "@/types";

interface Props { C: Colors; }

export function Process({ C }: Props) {
  return (
    <section id="process" className="pad" style={{ background: C.bg }}>
      <SectionDiv num="02" label="Process" color={C.forest} />

      <Reveal>
        <h2 className="sec-h" style={{ color: C.ink, marginBottom: 14 }}>
          How I <em style={{ color: C.forest }}>work.</em>
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: C.muted, maxWidth: 480, marginBottom: 40 }}>
          Every project I take on follows the same four-step approach.
        </p>
      </Reveal>

      <div className="proc-grid">
        {PROCESS.map((p, i) => (
          <Reveal key={p.num} delay={i * 70}>
            <div className="proc-card" style={{ background: C.bg2, borderColor: C.border }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: C.forest, opacity: 0.2 }} />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, color: C.forest, opacity: 0.14, lineHeight: 1, marginBottom: 20, letterSpacing: "-0.05em" }}>
                {p.num}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: C.ink, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontSize: "0.86rem", lineHeight: 1.75, color: C.muted }}>{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
