interface Props {
  children: string;
  color?: string;
  rotate?: number;
  size?: number;
}

export function Stamp({ children, color = "#E8501A", rotate = -8, size = 108 }: Props) {
  return (
    <div
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        border: `3px solid ${color}`, borderRadius: "50%",
        width: size, height: size,
        transform: `rotate(${rotate}deg)`,
        color,
        fontFamily: "'Playfair Display', serif",
        fontSize: "0.56rem", fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase",
        textAlign: "center", lineHeight: 1.45,
        padding: 10, userSelect: "none", flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}
