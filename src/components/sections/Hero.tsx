import { Stamp }   from "@/components/Stamp";
import { Star }    from "@/components/Star";
import { Counter } from "@/components/Counter";
import { useMagnet } from "@/hooks/useMagnet";
import { STATS }   from "@/data";
import type { Colors } from "@/types";

interface Props { C: Colors; onNav: (id: string) => void; }

export function Hero({ C, onNav }: Props) {
  const mag1 = useMagnet(0.4);
  const mag2 = useMagnet(0.4);

  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", padding: "clamp(90px,12vw,140px) clamp(20px,5vw,80px) 80px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", background: C.bg }}
    >
      {/* Ruled lines */}
      {[...Array(14)].map((_, i) => (
        <div key={i} style={{ position: "absolute", left: 0, right: 0, top: `${(i + 1) * 6.5}%`, height: 1, background: "rgba(28,25,23,0.05)" }} />
      ))}

      {/* Decorative ring */}
      <div style={{ position: "absolute", right: "-8%", top: "50%", transform: "translateY(-50%)", width: "min(50vw,480px)", height: "min(50vw,480px)", borderRadius: "50%", border: `2px solid ${C.border}`, pointerEvents: "none" }} />

      {/* Floating stamp */}
      <div className="hero-stamp">
        <Stamp color={C.terra} rotate={12} size={108}>AVAILABLE{"\n"}FOR HIRE{"\n"}</Stamp>
      </div>

      {/* Spinning star */}
      <div style={{ position: "absolute", bottom: 120, right: "20%", animation: "spin-slow 12s linear infinite" }}>
        <Star size={36} color={C.forest} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.forest, animation: "pulse-ring 2s infinite", flexShrink: 0 }} />
          <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "clamp(0.65rem,2vw,0.78rem)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.forest }}>
            Software Developer — Ivory Park, South Africa
          </span>
        </div>

        {/* Name */}
        <h1 className="hero-name" style={{ marginBottom: 20, color: C.ink }}>
          THABANG<br />
          <span style={{ color: "transparent", WebkitTextStroke: `clamp(1.5px,.3vw,3px) ${C.ink}`, opacity: 0.2 }}>MOHALE</span>
        </h1>

        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(1rem,3vw,1.8rem)", fontWeight: 400, color: C.terra, marginBottom: 20 }}>
          — Full-Stack Builder
        </p>

        <p style={{ fontSize: "clamp(.9rem,2vw,1.05rem)", lineHeight: 1.8, color: C.muted, maxWidth: 480, marginBottom: 36, borderLeft: `3px solid ${C.terra}`, paddingLeft: 16 }}>
          I build web things that actually work — complete systems, not just pretty screens. From device-repair platforms to desktop apps, I ship real products to real users.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <button
            ref={mag1.ref as React.RefObject<HTMLButtonElement>}
            onMouseMove={mag1.onMouseMove as React.MouseEventHandler<HTMLButtonElement>}
            onMouseLeave={mag1.onMouseLeave}
            className="btn-ink"
            onClick={() => onNav("projects")}
          >
            See My Work
          </button>
          <button
            ref={mag2.ref as React.RefObject<HTMLButtonElement>}
            onMouseMove={mag2.onMouseMove as React.MouseEventHandler<HTMLButtonElement>}
            onMouseLeave={mag2.onMouseLeave}
            className="btn-terra"
            onClick={() => onNav("resume")}
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="stats-bar" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        {STATS.map(s => (
          <div key={s.label} className="stat-item">
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 900, color: C.terra, letterSpacing: "-0.04em" }}>
              <Counter target={s.num} suffix={s.suffix} />
            </span>
            <span style={{ fontSize: "clamp(.65rem,1.5vw,.75rem)", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: C.muted }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
