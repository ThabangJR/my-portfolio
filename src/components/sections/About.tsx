import { Reveal }     from "@/components/Reveal";
import { Stamp }      from "@/components/Stamp";
import { SectionDiv } from "@/components/SectionDiv";
import type { Colors }  from "@/types";

interface Props { C: Colors; }

const FACTS = [
  ["Based in",    "Midrand, Gauteng"],
  ["Status",      "Open to Work"],
  ["Qualification","Diploma, NQF 6"],
  ["Works as",    "Full-Stack / Frontend Dev"],
  ["Works from",  "On-site · Hybrid · Remote"],
  ["Speaks",      "English · Zulu · Sotho"],
];

export function About({ C }: Props) {
  return (
    <section id="about" className="pad" style={{ background: C.bg2 }}>
      <SectionDiv num="01" label="About" color={C.terra} />

      <div className="two-col-wide">
        <Reveal>
          <h2 className="sec-h" style={{ color: C.ink, marginBottom: 32 }}>
            The<br /><em style={{ color: C.terra }}>person</em><br />behind.
          </h2>
          <div>
            {FACTS.map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "13px 0", borderBottom: `1px solid ${C.border}`, gap: 16, flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>{k}</span>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: k === "Status" ? C.terra : C.ink, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(1.1rem,3vw,1.7rem)", fontWeight: 400, lineHeight: 1.55, color: C.ink, borderLeft: `3px solid ${C.terra}`, paddingLeft: 20, marginBottom: 28 }}>
            "I'm a developer from Midrand who believes the best software quietly solves the problem — and the best code is the code that ships."
          </blockquote>
          <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: C.muted, marginBottom: 20 }}>
            Diploma in Systems Development (NQF Level 6) from Boston City Campus — 364 credits across software engineering, database design, and web development.
          </p>
          <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: C.muted, marginBottom: 36 }}>
            One project didn't stay academic — <strong style={{ color: C.ink }}>MOHALE TechExperts</strong> is a live device-repair platform I designed, built, and deployed entirely solo.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <div style={{ animation: "wiggle 3s ease-in-out infinite" }}>
              <Stamp color={C.forest} rotate={-6} size={100}>DIPLOMA{"\n"}NQF 6{"\n"}GRAD</Stamp>
            </div>
            <div style={{ fontSize: "0.85rem", color: C.muted, lineHeight: 1.7 }}>
              <strong style={{ color: C.ink, display: "block", marginBottom: 4 }}>Boston City Campus</strong>
              Systems Development · 2023–2025<br />Kempton Park, Gauteng
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
