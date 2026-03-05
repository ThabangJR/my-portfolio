import { useState, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";

interface Props { target: number; suffix?: string; }

export function Counter({ target, suffix = "" }: Props) {
  const [val, setVal] = useState(0);
  const { ref, vis }  = useReveal();

  useEffect(() => {
    if (!vis) return;
    let current = 0;
    const step  = Math.ceil(target / 40);
    const id    = setInterval(() => {
      current += step;
      if (current >= target) { setVal(target); clearInterval(id); }
      else setVal(current);
    }, 30);
    return () => clearInterval(id);
  }, [vis, target]);

  return <div ref={ref}>{val}{suffix}</div>;
}
