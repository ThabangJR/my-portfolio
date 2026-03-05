import { useMagnet } from "@/hooks/useMagnet";

interface Props { dark: boolean; toggle: () => void; }

export function ThemeToggle({ dark, toggle }: Props) {
  const mag = useMagnet(0.35);

  return (
    <button
      ref={mag.ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={mag.onMouseMove as React.MouseEventHandler<HTMLButtonElement>}
      onMouseLeave={mag.onMouseLeave}
      onClick={toggle}
      aria-label="Toggle dark mode"
      style={{
        background: "none",
        border: `2px solid ${dark ? "#3a3530" : "rgba(28,25,23,0.15)"}`,
        borderRadius: 100, width: 52, height: 28,
        cursor: "pointer", position: "relative",
        transition: "all .3s",
        display: "flex", alignItems: "center",
        padding: "0 3px", flexShrink: 0,
      }}
    >
      <div style={{
        width: 20, height: 20, borderRadius: "50%",
        background: dark ? "#E8501A" : "#1C1917",
        transition: "transform .3s, background .3s",
        transform: dark ? "translateX(24px)" : "translateX(0)",
      }} />
    </button>
  );
}
