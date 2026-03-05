import { Reveal }      from "@/components/Reveal";
import { SectionDiv }  from "@/components/SectionDiv";
import { ProjectCard } from "@/components/ProjectCard";
import { Star }        from "@/components/Star";
import { PROJECTS, GITHUB_URL } from "@/data";
import type { Colors }   from "@/types";

interface Props { C: Colors; }

export function Projects({ C }: Props) {
  return (
    <section id="projects" className="pad" style={{ background: C.bg }}>
      <SectionDiv num="04" label="Work" color={C.terra} />

      <Reveal>
        <h2 className="sec-h" style={{ color: C.ink, marginBottom: 14 }}>
          Things I've <em style={{ color: C.terra }}>shipped.</em>
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: C.muted, maxWidth: 440, marginBottom: 40 }}>
          Click any card to open the live project or GitHub repo.
        </p>
      </Reveal>

      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.num} delay={i * 80}>
            <ProjectCard p={p} />
          </Reveal>
        ))}

       
        <Reveal delay={240}>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 32, border: `2px dashed ${C.border}`, borderRadius: 6, minHeight: 200, transition: "border-color .2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = C.terra}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = C.border}
          >
            <Star size={36} color={C.terra} style={{ animation: "spin-slow 10s linear infinite" }} />
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", textAlign: "center", color: C.muted }}>More on GitHub</p>
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: C.terra, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: `2px solid ${C.terra}`, paddingBottom: 2 }}>
              Browse All
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
