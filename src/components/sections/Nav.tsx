import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_LINKS }    from "@/data";
import type { Colors }  from "@/types";

interface Props {
  dark:       boolean;
  toggleDark: () => void;
  navVis:     boolean;
  C:          Colors;
  onNav:      (id: string) => void;
  menuOpen:   boolean;
  setMenu:    (v: boolean) => void;
}

export function Nav({ dark, toggleDark, navVis, C, onNav, menuOpen, setMenu }: Props) {
  const navBg = navVis
    ? dark ? "rgba(21,18,16,0.95)" : "rgba(245,240,232,0.96)"
    : "transparent";

  return (
    <>
      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: C.bg, zIndex: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
          <button onClick={() => setMenu(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: C.ink }}>✕</button>
          {NAV_LINKS.map(([id, label]) => (
            <button key={id} onClick={() => onNav(id)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem", color: C.ink, letterSpacing: "-0.02em" }}>
              {label}
            </button>
          ))}
        </div>
      )}

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 clamp(20px,5vw,48px)", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: navBg,
        backdropFilter: navVis ? "blur(12px)" : "none",
        borderBottom: navVis ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all .35s",
      }}>
        {/* Logo */}
        <div
          onClick={() => onNav("hero")}
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "1.05rem", letterSpacing: "-0.03em", cursor: "pointer", color: C.ink }}
        >
          Thabang<span style={{ color: C.terra }}>.</span>
        </div>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          {NAV_LINKS.map(([id, label], i) => (
            <button key={id} onClick={() => onNav(id)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: C.muted, transition: "color .2s", display: "flex", alignItems: "center", gap: 4 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C.terra}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.muted}
            >
              <span style={{ fontSize: "0.6rem", opacity: 0.4 }}>{i + 1}</span>{label}
            </button>
          ))}
          <ThemeToggle dark={dark} toggle={toggleDark} />
          <button onClick={() => onNav("contact")}
            style={{ background: C.terra, color: "#fff", border: "none", cursor: "pointer", padding: "8px 20px", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: `3px 3px 0 ${C.ink}`, transition: "all .2s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translate(-2px,-2px)"; el.style.boxShadow = `5px 5px 0 ${C.ink}`; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = `3px 3px 0 ${C.ink}`; }}
          >
            Hire Me
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenu(true)} aria-label="Open menu">
          <span style={{ background: C.ink }} />
          <span style={{ background: C.ink }} />
          <span style={{ background: C.ink }} />
        </button>
      </nav>
    </>
  );
}
