import type { Skill, LearningItem, Project, ProcessStep, TimelineItem, StatItem } from "@/types";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

export const SKILLS: Skill[] = [
  { name: "JavaScript",     src: `${D}/javascript/javascript-original.svg`, brand: "#F7DF1E" },
  { name: "TypeScript",     src: `${D}/typescript/typescript-original.svg`, brand: "#3178C6" },
  { name: "React.js",       src: `${D}/react/react-original.svg`,           brand: "#61DAFB" },
  { name: "Java",           src: `${D}/java/java-original.svg`,             brand: "#ED8B00" },
  { name: "PHP",            src: `${D}/php/php-original.svg`,               brand: "#8993BE" },
  { name: "MySQL",          src: `${D}/mysql/mysql-original.svg`,           brand: "#4479A1" },
  { name: "HTML5",          src: `${D}/html5/html5-original.svg`,           brand: "#E34F26" },
  { name: "CSS3",           src: `${D}/css3/css3-original.svg`,             brand: "#264DE4" },
  { name: "Node.js",        src: `${D}/nodejs/nodejs-original.svg`,         brand: "#6CC24A" },
  { name: "Git",            src: `${D}/git/git-original.svg`,               brand: "#F05032" },
  { name: "GitHub",         src: `${D}/github/github-original.svg`,         brand: "#24292E", invert: true },
  { name: "VS Code",        src: `${D}/vscode/vscode-original.svg`,         brand: "#007ACC" },
  { name: "Android Studio", src: `${D}/androidstudio/androidstudio-original.svg`, brand: "#3DDC84" },
];

export const LEARNING: LearningItem[] = [
  { name: "Next.js",  src: `${D}/nextjs/nextjs-original.svg`,          brand: "#000",    invert: true, note: "App Router & SSR" },
  { name: "Supabase", src: `${D}/supabase/supabase-original.svg`,       brand: "#3ECF8E",              note: "BaaS & Realtime DB" },
  { name: "Docker",   src: `${D}/docker/docker-original.svg`,           brand: "#2496ED",              note: "Containerisation" },
  { name: "Tailwind", src: `${D}/tailwindcss/tailwindcss-original.svg`, brand: "#06B6D4",              note: "Utility-first CSS" },
];

export const PROJECTS: Project[] = [
  {
    num: "01", title: "MOHALE TechExperts",
    role: "Founder & Full-Stack Developer", year: "2024",
    desc: "A complete device-repair web platform — automated invoicing, real-time admin dashboard with revenue analytics, role-based access, live repair status tracking. Built solo, deployed and serving real customers.",
    tags: ["PHP", "TypeScript", "React.js", "MySQL", "Vercel"],
    href: "https://mohaletechexperts.vercel.app",
    color: "#E8501A", bg: "#FFF5F1",
  },
  {
    num: "02", title: "Student Registration System",
    role: "Developer", year: "2023",
    desc: "Java desktop app managing 200+ student records. Normalised MySQL schema cut retrieval speed by ~60%. Full SDLC from requirements through deployment.",
    tags: ["Java", "Java Swing", "MySQL", "OOP"],
    href: "https://github.com/ThabangJR/Student-RegistrationSystem",
    color: "#2D6A4F", bg: "#F0F7F4",
  },
  {
    num: "03", title: "GitHub Portfolio",
    role: "Open Source & Experiments", year: "Ongoing",
    desc: "Ongoing experiments with Next.js, Supabase, and marketplace architectures. New commits regularly.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    href: "https://github.com/ThabangJR",
    color: "#7B5EA7", bg: "#F5F2FA",
  },
];

export const PROCESS: ProcessStep[] = [
  { num: "01", title: "Understand", desc: "I start by deeply understanding the problem — who it affects, why it matters, and what success looks like before a single line of code is written." },
  { num: "02", title: "Design",     desc: "Architecture and UI thinking happen together. I plan database schemas, user flows, and component structure so there are no expensive surprises mid-build." },
  { num: "03", title: "Build",      desc: "I write clean, maintainable code and ship iteratively. Real features, real testing, real deployment — not just local demos." },
  { num: "04", title: "Refine",     desc: "After launch I listen, measure, and improve. MOHALE TechExperts is a live example of software I continue to evolve." },
];

export const TIMELINE: TimelineItem[] = [
  { year: "2017", title: "Northern Academy Secondary School", desc: "Completed National Senior Certificate with Mathematics, Physical Science, Life Science and more.", side: "left" },
  { year: "2021", title: "Matric Graduate", desc: "Successfully passed NSC and developed a passion for computers, software, and how things work under the hood.", side: "right" },
  { year: "2023", title: "Boston City Campus", desc: "Enrolled in Diploma in Systems Development (NQF Level 6) — diving deep into OOP, DBMS, web dev and systems analysis.", side: "left" },
  { year: "2024", title: "Launched MOHALE TechExperts", desc: "Founded and shipped a full-stack device repair web platform from scratch — live, production, serving real customers.", side: "right" },
  { year: "2025", title: "Diploma Completed", desc: "Finished 364 credits. Now actively seeking a junior/full-stack developer role to bring everything I've built into a professional team.", side: "left" },
  { year: "Next", title: "Your Team?", desc: "Looking for a motivated, fast-learning developer who ships real products. Let's build something great together.", side: "right", highlight: true },
];

export const STATS: StatItem[] = [
  { num: 3,   suffix: "+", label: "Live Projects" },
  { num: 364, suffix: "",  label: "Credits Earned" },
  { num: 10,  suffix: "+", label: "Technologies" },
  { num: 2,   suffix: "+", label: "Years Building" },
];

export const NAV_LINKS: [string, string][] = [
  ["about",    "About"],
  ["skills",   "Skills"],
  ["projects", "Work"],
  ["timeline", "Journey"],
  ["resume",   "Resume"],
  ["contact",  "Contact"],
];

export const CONTACT_EMAIL = "mohalethabang77@gmail.com";
export const LINKEDIN_URL  = "https://www.linkedin.com/in/thabang-mohale-a7895b352";
export const GITHUB_URL    = "https://github.com/ThabangJR";
export const LIVE_SITE_URL = "https://mohaletechexperts.vercel.app";

/* Update this to match the filename you place in /public */
export const RESUME_FILE = "/Thabang_Mohale_Resume.pdf";
