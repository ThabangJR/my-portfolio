import type { Colors } from "@/types";

export function useColors(dark: boolean): Colors {
  return {
    bg:     dark ? "#151210" : "#F5F0E8",
    bg2:    dark ? "#1C1917" : "#FBF7F2",
    ink:    dark ? "#F5F0E8" : "#1C1917",
    terra:  "#E8501A",
    forest: "#2D6A4F",
    muted:  dark ? "#7a6f68" : "#8A7F76",
    border: dark ? "rgba(245,240,232,0.08)" : "rgba(28,25,23,0.1)",
  };
}
