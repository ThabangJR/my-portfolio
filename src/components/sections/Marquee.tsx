const ITEMS = [
  "Software Developer","Full-Stack Builder","Frontend Engineer",
  "React + Java + PHP","Midrand SA","Open to Work",
  "MOHALE TechExperts","Always Shipping",
];

export function Marquee() {
  return (
    <div style={{ background: "#E8501A", padding: "13px 0", overflow: "hidden", transform: "rotate(-1.2deg) scaleX(1.04)", margin: "8px -16px" }}>
      <div style={{ display: "flex", animation: "marquee 22s linear infinite", width: "max-content" }}>
        {[...Array(4)].flatMap((_, bi) =>
          ITEMS.map((t, i) => (
            <span key={`${bi}-${i}`} style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.95rem", color: "#fff", padding: "0 24px", whiteSpace: "nowrap", opacity: 0.92 }}>
              {t} <span style={{ opacity: 0.45 }}>♥</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
