import { useState, useEffect, useCallback } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Loader }        from "@/components/Loader";
import { Toast }         from "@/components/Toast";
import { KeyboardHint }  from "@/components/KeyboardHint";

import { Nav }      from "@/components/sections/Nav";
import { Hero }     from "@/components/sections/Hero";
import { Marquee }  from "@/components/sections/Marquee";
import { About }    from "@/components/sections/About";
import { Process }  from "@/components/sections/Process";
import { Skills }   from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { Resume }   from "@/components/sections/Resume";
import { Contact }  from "@/components/sections/Contact";
import { Footer }   from "@/components/sections/Footer";

import { useColors } from "@/hooks/useTheme";
import { NAV_LINKS } from "@/data";

export default function App() {
  const [loaded,   setLoaded]   = useState(false);
  const [dark,     setDark]     = useState(false);
  const [navVis,   setNavVis]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [keyHint,  setKeyHint]  = useState(false);
  const [toast,    setToast]    = useState({ msg: "", visible: false });

  const C = useColors(dark);

  /* Nav scroll detection */
  useEffect(() => {
    const fn = () => setNavVis(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Keyboard navigation — press 1–6 to jump sections, ? for hint */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const idx = parseInt(e.key) - 1;
      if (idx >= 0 && idx < NAV_LINKS.length) {
        document.getElementById(NAV_LINKS[idx][0])?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.key === "?") setKeyHint(v => !v);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  /* Body background syncs with theme */
  useEffect(() => {
    document.body.style.background = C.bg;
    document.body.style.color      = C.ink;
    document.body.style.transition = "background .4s, color .4s";
  }, [C.bg, C.ink]);

  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast({ msg, visible: true });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 2400);
  }, []);

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Toast msg={toast.msg} visible={toast.visible} />
      <KeyboardHint visible={keyHint} />

      {/* ? key hint toggle */}
      <div
        onClick={() => setKeyHint(v => !v)}
        style={{ position: "fixed", right: 20, bottom: 40, zIndex: 499, background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 4, padding: "5px 10px", fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: C.muted, cursor: "pointer", letterSpacing: "0.08em", transition: "color .2s", userSelect: "none" }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C.terra}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.muted}
      >
        ? keys
      </div>

      <Nav dark={dark} toggleDark={() => setDark(d => !d)} navVis={navVis} C={C} onNav={go} menuOpen={menuOpen} setMenu={setMenuOpen} />

      <main>
        <Hero     C={C} onNav={go} />
        <Marquee />
        <About    C={C} />
        <Process  C={C} />
        <Skills   C={C} dark={dark} />
        <Projects C={C} />
        <Timeline C={C} />
        <Resume   C={C} />
        <Contact  C={C} showToast={showToast} />
      </main>

      <Footer />
    </>
  );
}
