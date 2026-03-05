import { Reveal }     from "@/components/Reveal";
import { Stamp }      from "@/components/Stamp";
import { SectionDiv } from "@/components/SectionDiv";
import { RESUME_FILE, LINKEDIN_URL, GITHUB_URL } from "@/data";
import type { Colors }  from "@/types";

interface Props { C: Colors; }

export function Resume({ C }: Props) {
  return (
    <section id="resume" className="pad" style={{ background: C.bg, position: "relative", overflow: "hidden" }}>
    
      <div style={{ position: "absolute", bottom: -30, right: -10, fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(8rem,20vw,18rem)", color: "transparent", WebkitTextStroke: "1px rgba(28,25,23,0.05)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>CV</div>

      <SectionDiv num="06" label="Resume" color={C.terra} />

      <div className="two-col" style={{ position: "relative", zIndex: 1 }}>

       
        <Reveal>
          <h2 className="sec-h" style={{ color: C.ink, marginBottom: 20 }}>
            Take my <em style={{ color: C.terra }}>resume.</em>
          </h2>
          <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: C.muted, marginBottom: 12 }}>
            Covers projects, skills, education, and everything you need to make a hiring decision.
          </p>

     

          <p style={{ fontSize: "0.82rem", color: C.muted, fontStyle: "italic", marginBottom: 36, borderLeft: `2px solid ${C.terra}`, paddingLeft: 12 }}>
            PDF preferred — opens in-browser and is more universally readable than .docx.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            <a href={RESUME_FILE} download className="btn-dl">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2v11M5 8l5 6 5-6M3 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Resume
            </a>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
              <a href={GITHUB_URL}   target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub</a>
            </div>
          </div>
        </Reveal>

      
        <Reveal delay={120}>
          <div className="cv-preview">
        
            <div style={{ background: C.terra, margin: "-36px -32px 28px", padding: "18px 32px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "1.5rem", color: "#fff" }}>Thabang Mohale</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", marginTop: 3, letterSpacing: "0.08em", textTransform: "uppercase" }}>Software Developer</div>
            </div>
          
            {[100, 88, 92, 72, 96, 80, 64, 85].map((w, i) => (
              <div key={i} style={{ height: i === 0 ? 9 : 6, background: i === 0 ? "#1C191712" : "#1C191708", borderRadius: 2, marginBottom: i === 0 ? 16 : 9, width: `${w}%` }} />
            ))}
            <div style={{ height: 1, background: "#1C191715", margin: "18px 0" }} />
            {[90, 76, 82, 68, 60].map((w, i) => (
              <div key={i} style={{ height: 6, background: "#1C191708", borderRadius: 2, marginBottom: 9, width: `${w}%` }} />
            ))}
         
            <div style={{ position: "absolute", top: 14, right: 14, transform: "rotate(14deg)" }}>
              <Stamp color={C.terra} rotate={14} size={90}>ATS{"\n"}READY{"\n"}2025</Stamp>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
