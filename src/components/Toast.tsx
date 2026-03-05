interface Props { msg: string; visible: boolean; }

export function Toast({ msg, visible }: Props) {
  return (
    <div style={{
      position: "fixed", bottom: 32, left: "50%",
      transform: visible ? "translate(-50%,0)" : "translate(-50%,20px)",
      opacity: visible ? 1 : 0,
      transition: "all .3s ease", zIndex: 8000,
      background: "#1C1917", color: "#F5F0E8",
      padding: "12px 24px", borderRadius: 2,
      fontFamily: "'Instrument Sans', sans-serif",
      fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em",
      boxShadow: "4px 4px 0 #E8501A",
      display: "flex", alignItems: "center", gap: 10,
      pointerEvents: "none",
    }}>
      <span style={{ color: "#E8501A" }}>✓</span> {msg}
    </div>
  );
}
