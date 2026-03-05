import { useReveal } from "@/hooks/useReveal";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export function Reveal({ children, delay = 0 }: Props) {
  const { ref, vis } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity:   vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .7s ${delay}ms ease, transform .7s ${delay}ms ease`,
      }}
    >
      {children}
    </div>
  );
}
