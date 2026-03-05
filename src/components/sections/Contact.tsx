import { useState } from "react";
import { Reveal }   from "@/components/Reveal";
import { Star }     from "@/components/Star";
import { CONTACT_EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/data";
import type { Colors } from "@/types";

interface Props { C: Colors; showToast: (msg: string) => void; }

const LINKS = [
  { label: "Email",    val: CONTACT_EMAIL,              href: `mailto:${CONTACT_EMAIL}` },
  { label: "Phone",    val: "068 452 0360",              href: "tel:0684520360" },
  { label: "LinkedIn", val: "thabang-mohale-a7895b352",  href: LINKEDIN_URL },
  { label: "GitHub",   val: "github.com/ThabangJR",      href: GITHUB_URL },
];

export function Contact({ C, showToast }: Props) {
  const [form, setForm] = useState({ name: "", email: "", message: "", sent: false, sending: false });

  const submit = () => {
    if (!form.name || !form.email || !form.message) { showToast("Please fill in all fields"); return; }
    setForm(s => ({ ...s, sending: true }));
    setTimeout(() => { setForm(s => ({ ...s, sending: false, sent: true })); showToast("Message sent!"); }, 1400);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => showToast("Email copied to clipboard!"));
  };

  return (
    <section id="contact" className="pad" style={{ background: "#1C1917", position: "relative", overflow: "hidden" }}>
      {/* Ghost watermark */}
      <div style={{ position: "absolute", bottom: -30, right: -10, fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(8rem,20vw,18rem)", color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>HI</div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.terra }}>Chapter 07</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)", minWidth: 20 }} />
            <Star size={14} color={C.terra} />
          </div>
        </Reveal>

        <div className="two-col">
          {/* Left — links */}
          <div>
            <Reveal>
              <h2 className="sec-h" style={{ color: "#F5F0E8", marginBottom: 24 }}>
                Let's <em style={{ color: C.terra }}>talk.</em>
              </h2>
              <p style={{ fontSize: "0.96rem", lineHeight: 1.85, color: "rgba(245,240,232,0.5)", marginBottom: 44, maxWidth: 380 }}>
                Actively looking for my next opportunity — junior role, freelance, or long-term build. Ready to contribute from day one.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div>
                {LINKS.map(({ label, val, href }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-row">
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)" }}>{label}</span>
                    <span style={{ fontSize: "0.86rem", fontWeight: 600, color: "rgba(245,240,232,0.65)", fontFamily: "'Instrument Sans', sans-serif" }}>{val}</span>
                  </a>
                ))}
                {/* Copy email */}
                <div style={{ marginTop: 24 }}>
                  <button onClick={copyEmail}
                    style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(245,240,232,0.5)", padding: "10px 18px", borderRadius: 2, cursor: "pointer", fontFamily: "'Instrument Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", transition: "all .2s" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.terra; el.style.color = C.terra; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.15)"; el.style.color = "rgba(245,240,232,0.5)"; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M3 11V3h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    Copy Email Address
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={160}>
            {form.sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 300, gap: 20, textAlign: "center" }}>
                <Star size={52} color={C.terra} style={{ animation: "spin-slow 6s linear infinite" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#F5F0E8" }}>Message received!</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.5)", lineHeight: 1.7 }}>I'll get back to you soon.</p>
              </div>
            ) : (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "clamp(24px,5vw,40px)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#F5F0E8", marginBottom: 32 }}>Send a message</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { key: "name",  label: "Your Name",     type: "text",  ph: "e.g. Sarah from Acme" },
                    { key: "email", label: "Email Address", type: "email", ph: "sarah@acme.co.za" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)", display: "block", marginBottom: 6 }}>{f.label}</label>
                      <input className="form-field" type={f.type} placeholder={f.ph} value={(form as any)[f.key]} onChange={e => setForm(s => ({ ...s, [f.key]: e.target.value }))} />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)", display: "block", marginBottom: 6 }}>Message</label>
                    <textarea className="form-field" rows={4} placeholder="Tell me about the role or project..." value={form.message} onChange={e => setForm(s => ({ ...s, message: e.target.value }))} />
                  </div>
                  <button onClick={submit}
                    style={{ background: C.terra, color: "#fff", border: "none", cursor: "pointer", padding: "15px 28px", fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.06em", textTransform: "uppercase", boxShadow: "4px 4px 0 rgba(255,255,255,0.1)", transition: "all .2s", alignSelf: "flex-start" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translate(-2px,-2px)"; el.style.boxShadow = "6px 6px 0 rgba(255,255,255,0.1)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "4px 4px 0 rgba(255,255,255,0.1)"; }}
                  >
                    {form.sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
