import { LIVE_SITE_URL, GITHUB_URL, LINKEDIN_URL } from "@/data";

export function Footer() {
  const terra = "#E8501A";
  const links = [
    [LIVE_SITE_URL, "Live Project"],
    [GITHUB_URL,    "GitHub"],
    [LINKEDIN_URL,  "LinkedIn"],
  ] as const;

  return (
    <footer style={{ background: "#111", padding: "20px clamp(20px,5vw,48px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.8rem", color: "rgba(255,255,255,0.28)" }}>
        &copy; 2026 Thabang Mohale
      </span>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {links.map(([href, label]) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = terra}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
