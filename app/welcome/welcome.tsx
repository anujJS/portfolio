import { useEffect, useState, useRef } from "react";

export function Welcome() {
  return (
    <main className="">
      <AnujPortfolio />
    </main>
  );
}


/* ─── Design tokens — all solid hex, no Tailwind opacity tricks ─────────────── */
const C = {
  bg: "#080810",
  surface: "#0f0f1a",
  card: "#13131f",
  cardHov: "#1a1a2e",
  border: "#1e1e30",
  borderHov: "#3a3a5c",
  text: "#e8e6ff",
  muted: "#6b688a",
  dim: "#9996b8",
  orange: "#ff6b35",
  violet: "#8b5cf6",
  emerald: "#10d9a0",
  yellow: "#fbbf24",
  orangeBg: "rgba(255,107,53,0.12)",
  violetBg: "rgba(139,92,246,0.12)",
  emeraldBg: "rgba(16,217,160,0.12)",
  yellowBg: "rgba(251,191,36,0.12)",
  pill: "#1c1c2e",
};

/* ─── Scroll-reveal ─────────────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function Reveal({ children, delay = 0, style = {}, ...rest }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ─── DATA ──────────────────────────────────────────────────────────────────── */
const experience = [
  {
    company: "PropVIVO India Pvt Ltd.",
    role: "React Native Developer",
    period: "Feb 2025 – Oct 2025",
    accent: C.orange,
    projects: [
      {
        name: "📱 Smart Waste Management App",
        bullets: [
          "Independently developed complete mobile applications using React Native CLI.",
          "Built 50+ screens with reusable components and modular architecture.",
          "Integrated camera, image editing, cropping, and annotations for field documentation.",
          "Implemented interactive maps with real-time location tracking.",
          "Optimized image loading and scrolling performance using FastImage.",
        ],
      },
      {
        name: "🖥️ Service Request, Admin Config & Banks",
        bullets: [
          "Developed role-based dashboards using Next.js and Tailwind CSS.",
          "Managed global state with Redux Toolkit and API calls via GraphQL (Apollo Client).",
          "Created reusable UI components and custom hooks.",
          "Collaborated with cross-functional teams to deliver business-driven solutions.",
        ],
      },
    ],
  },
  {
    company: "Credence Technologies Inc.",
    role: "Web Developer",
    period: "June 2023 – Feb 2025",
    accent: C.violet,
    projects: [
      {
        name: "🛍️ Technoraill – E-commerce Mobile App",
        bullets: [
          "Developed authentication flows with role-based access control.",
          "Built product listing, detail, cart, and order management modules.",
          "Implemented Add to Cart, proposal generation, reviews & ratings.",
          "Integrated REST APIs using Axios; managed state with Redux Toolkit.",
          "Styled responsive UI using NativeWind for a consistent mobile experience.",
        ],
      },
      {
        name: "⚡ Instantly Yours – React Web App",
        bullets: [
          "Built Login/Signup, About Us, Product Listing & Detail pages with React.js & Tailwind.",
          "Designed responsive, user-friendly UI focused on usability and performance.",
          "Integrated authentication flows with Redux global state management.",
          "Used Shopify as backend API for product and order data.",
          "Built reusable component architecture with custom hooks and shared UI components.",
        ],
      },
    ],
  },
];

const projects = [
  {
    icon: "♻️", title: "Smart Waste Management", company: "PropVIVO India Pvt Ltd.", accent: C.orange, accentBg: C.orangeBg,
    desc: "Full-featured field operations app with 50+ screens, real-time maps, camera annotations, and high-performance image handling.",
    tech: ["React Native CLI", "Maps", "FastImage", "Camera"]
  },
  {
    icon: "🏢", title: "Service Request & Admin Dashboard", company: "PropVIVO India Pvt Ltd.", accent: C.violet, accentBg: C.violetBg,
    desc: "Role-based admin web dashboard for service requests and bank configurations, built with Next.js and GraphQL.",
    tech: ["Next.js", "GraphQL", "Redux Toolkit", "Tailwind CSS"]
  },
  {
    icon: "🛒", title: "Technoraill", company: "Credence Technologies Inc.", accent: C.emerald, accentBg: C.emeraldBg,
    desc: "B2B e-commerce mobile app with complete shopping flow — listing, cart, orders, proposals, reviews, and auth.",
    tech: ["React Native", "NativeWind", "Redux Toolkit", "REST APIs"]
  },
  {
    icon: "⚡", title: "Instantly Yours", company: "Credence Technologies Inc.", accent: C.yellow, accentBg: C.yellowBg,
    desc: "Consumer-facing storefront powered by Shopify APIs with product discovery, authentication, and a reusable component library.",
    tech: ["React.js", "Shopify API", "Tailwind CSS", "Redux"]
  },
  {
    icon: "🎬", title: "Movie Recommendation App", company: "iNeuron Intelligence – Internship", accent: C.orange, accentBg: C.orangeBg,
    desc: "Movie recommendation application built during internship, applying JS fundamentals and REST API integration.",
    tech: ["JavaScript", "REST API", "HTML/CSS"]
  },
];

const skillGroups = [
  { label: "Mobile Development", accent: C.orange, accentBg: C.orangeBg, skills: ["React Native CLI", "Reanimated", "React Native Camera", "Maps Integration", "NativeWind", "FastImage"] },
  { label: "Web Development", accent: C.violet, accentBg: C.violetBg, skills: ["React.js", "Next.js", "HTML5", "CSS3 / SCSS", "Tailwind CSS"] },
  { label: "Languages & State", accent: C.emerald, accentBg: C.emeraldBg, skills: ["JavaScript (ES6+)", "TypeScript", "Redux", "Redux Toolkit", "RTK Query"] },
  { label: "APIs & Backend", accent: C.yellow, accentBg: C.yellowBg, skills: ["REST APIs", "GraphQL", "Apollo Client", "Axios", "Node.js", "Express.js"] },
];

const education = [
  { degree: "B.Sc. (Mathematics)", school: "Vinoba Bhave University, Jharkhand", meta: ["2019–2022", "6.9 CGPA"] },
  { degree: "JavaScript Web Dev Boot Camp", school: "iNeuron Intelligence Pvt. Ltd.", meta: ["Training", "Full Stack JS"] },
  { degree: "Software Developer Internship", school: "iNeuron Intelligence Pvt. Ltd.", meta: ["Internship", "Movie Rec App"] },
];

/* ─── ATOMS ─────────────────────────────────────────────────────────────────── */
function Divider() {
  return <div style={{ height: 1, background: C.border }} />;
}

function SectionLabel({ text, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, color, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
      <span style={{ width: 24, height: 2, background: color, borderRadius: 2, display: "block" }} />
      {text}
    </div>
  );
}

function Heading({ children }) {
  return (
    <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 8, lineHeight: 1.1 }}>
      {children}
    </h2>
  );
}

function Sub({ children }) {
  return <p style={{ color: C.muted, marginBottom: 44, maxWidth: 420, fontSize: 15 }}>{children}</p>;
}

/* ─── CARDS ─────────────────────────────────────────────────────────────────── */
function ExpCard({ exp, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? C.cardHov : C.card,
          border: `1px solid ${hov ? C.borderHov : C.border}`,
          borderRadius: 20, padding: "2rem 2.2rem",
          position: "relative", overflow: "hidden",
          transform: hov ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${C.orange}, ${C.violet}, ${C.emerald})` }} />
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 4 }}>
          <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.2rem", color: exp.accent }}>{exp.company}</span>
          <span style={{ fontSize: 12, color: C.muted, background: C.pill, border: `1px solid ${C.border}`, padding: "4px 14px", borderRadius: 100 }}>{exp.period}</span>
        </div>
        <p style={{ color: C.muted, fontSize: 13, marginBottom: "1.4rem" }}>{exp.role}</p>

        {exp.projects.map((proj) => (
          <div key={proj.name} style={{ marginBottom: "1.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", background: C.pill, borderLeft: `3px solid ${C.yellow}`, paddingLeft: 12, paddingRight: 14, paddingTop: 5, paddingBottom: 5, borderRadius: "0 8px 8px 0", marginBottom: 10, fontWeight: 700, fontSize: 13.5, color: C.text }}>
              {proj.name}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
              {proj.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 10, color: C.dim, fontSize: 13.5, lineHeight: 1.65 }}>
                  <span style={{ color: C.emerald, fontSize: 11, marginTop: 3, flexShrink: 0 }}>▸</span>{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function ProjCard({ proj, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? C.cardHov : C.card,
          border: `1px solid ${hov ? proj.accent + "66" : C.border}`,
          borderRadius: 20, padding: "1.8rem",
          position: "relative", overflow: "hidden",
          transform: hov ? "translateY(-5px)" : "translateY(0)",
          transition: "all 0.3s ease",
          display: "flex", flexDirection: "column", height: "100%",
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 0, width: 110, height: 110, borderRadius: "0 20px 0 110px", background: proj.accent, opacity: 0.09 }} />
        <div style={{ width: 48, height: 48, borderRadius: 14, background: proj.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1rem", border: `1px solid ${proj.accent}44`, flexShrink: 0 }}>
          {proj.icon}
        </div>
        <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.05rem", color: C.text, marginBottom: 4 }}>{proj.title}</div>
        <div style={{ fontSize: 12, color: C.muted, marginBottom: 10, letterSpacing: "0.03em" }}>{proj.company}</div>
        <p style={{ color: C.dim, fontSize: 13.5, lineHeight: 1.65, flex: 1, marginBottom: "1rem" }}>{proj.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {proj.tech.map((t) => (
            <span key={t} style={{ fontSize: 11.5, fontWeight: 600, padding: "4px 10px", borderRadius: 7, background: proj.accentBg, color: proj.accent, border: `1px solid ${proj.accent}33` }}>{t}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function SkillCard({ group, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? C.cardHov : C.card,
          border: `1px solid ${hov ? group.accent + "55" : C.border}`,
          borderRadius: 18, padding: "1.6rem",
          transform: hov ? "translateY(-3px)" : "translateY(0)",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: group.accent, marginBottom: 14 }}>{group.label}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {group.skills.map((s) => (
            <span key={s} style={{ fontSize: 13, color: C.text, background: C.pill, border: `1px solid ${C.border}`, padding: "6px 13px", borderRadius: 9, fontWeight: 500 }}>{s}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function EduCard({ edu, delay }) {
  return (
    <Reveal delay={delay}>
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "1.6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${C.violet}, ${C.emerald})` }} />
        <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: C.text, marginBottom: 5 }}>{edu.degree}</div>
        <div style={{ color: C.muted, fontSize: 13, marginBottom: 14 }}>{edu.school}</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {edu.meta.map((m) => (
            <span key={m} style={{ fontSize: 12, fontWeight: 500, color: C.dim, background: C.pill, padding: "4px 11px", borderRadius: 7, border: `1px solid ${C.border}` }}>{m}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Buttons ───────────────────────────────────────────────────────────────── */
function PrimaryBtn({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", borderRadius: 13, fontWeight: 700, fontSize: 14, textDecoration: "none", color: "#fff", background: `linear-gradient(135deg, ${C.orange}, ${C.violet})`, boxShadow: hov ? `0 14px 40px rgba(255,107,53,0.45)` : `0 6px 24px rgba(255,107,53,0.25)`, transform: hov ? "translateY(-2px)" : "none", transition: "all 0.22s ease" }}>
      {children}
    </a>
  );
}

function OutlineBtn({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", borderRadius: 13, fontWeight: 700, fontSize: 14, textDecoration: "none", background: "transparent", border: `1px solid ${hov ? C.emerald : C.border}`, color: hov ? C.emerald : C.text, transform: hov ? "translateY(-2px)" : "none", transition: "all 0.22s ease" }}>
      {children}
    </a>
  );
}

function ContactBtn({ href, icon, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: 10, background: hov ? C.cardHov : C.card, border: `1px solid ${hov ? C.orange + "99" : C.border}`, color: hov ? C.orange : C.text, padding: "11px 20px", borderRadius: 14, textDecoration: "none", fontSize: 13.5, fontWeight: 500, transform: hov ? "translateY(-2px)" : "none", boxShadow: hov ? `0 8px 24px rgba(255,107,53,0.15)` : "none", transition: "all 0.22s ease" }}>
      {icon}{children}
    </a>
  );
}

/* ─── MAIN ──────────────────────────────────────────────────────────────────── */
export default function AnujPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(link);
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Plus Jakarta Sans',sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        @keyframes b1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(28px,-38px) scale(1.08)}}
        @keyframes b2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-22px,30px) scale(1.06)}}
        @keyframes b3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(18px,-18px) scale(1.1)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}
        @keyframes sbar{0%,100%{opacity:0.35}50%{opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        .h1{animation:fadeUp 0.7s 0.00s ease both}
        .h2{animation:fadeUp 0.7s 0.11s ease both}
        .h3{animation:fadeUp 0.7s 0.21s ease both}
        .h4{animation:fadeUp 0.7s 0.31s ease both}
        .h5{animation:fadeUp 0.7s 0.43s ease both}
        .pdot{animation:pulse 1.6s ease-in-out infinite}
        .sb{animation:sbar 2s ease-in-out infinite}
      `}</style>

      {/* blobs */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: C.violet, opacity: 0.14, filter: "blur(130px)", top: -200, left: -120, animation: "b1 14s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: C.orange, opacity: 0.11, filter: "blur(120px)", bottom: 0, right: -120, animation: "b2 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: C.emerald, opacity: 0.08, filter: "blur(100px)", top: "50%", left: "42%", animation: "b3 16s ease-in-out infinite" }} />
      </div>

      {/* nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 4rem", background: scrolled ? "rgba(8,8,16,0.88)" : "transparent", backdropFilter: scrolled ? "blur(22px)" : "none", borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent", transition: "all 0.3s ease" }}>
        <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.4rem", background: `linear-gradient(135deg,${C.orange},${C.violet})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AK</span>
        <div style={{ display: "flex", gap: 36 }}>
          {[["#experience", "Experience"], ["#projects", "Projects"], ["#skills", "Skills"], ["#contact", "Contact"]].map(([href, label]) => (
            <NavA key={href} href={href}>{label}</NavA>
          ))}
        </div>
      </nav>

      <div style={{ position: "relative", zIndex: 10 }}>

        {/* HERO */}
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "8rem 4rem 4rem", position: "relative" }}>
          <div style={{ maxWidth: 900 }}>
            <div className="h1" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.orangeBg, border: `1px solid ${C.orange}55`, color: C.orange, padding: "6px 16px", borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 22 }}>
              <span className="pdot" style={{ fontSize: 8 }}>●</span> Available for opportunities
            </div>
            <h1 className="h2" style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, lineHeight: 1.0, marginBottom: 22, fontSize: "clamp(3rem,8vw,6.5rem)" }}>
              <span style={{ display: "block", background: `linear-gradient(135deg,${C.text} 30%,${C.yellow})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Anuj Kumar</span>
              <span style={{ display: "block", fontSize: "0.6em", background: `linear-gradient(135deg,${C.orange},${C.violet})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>React Developer</span>
            </h1>
            <p className="h3" style={{ color: C.dim, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 520, marginBottom: 30 }}>
              <strong style={{ color: C.text }}>2.5+ years</strong> building scalable mobile and web apps with React Native, React.js, Next.js, Redux Toolkit & TypeScript. Based in <strong style={{ color: C.text }}>Jaipur, India</strong>.
            </p>
            <div className="h4" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 52 }}>
              <PrimaryBtn href="mailto:anuj26122000@gmail.com">
                <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,12 2,6" /></svg>
                Get in Touch
              </PrimaryBtn>
              <OutlineBtn href="#projects">View Projects ↓</OutlineBtn>
            </div>
            <div className="h5" style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              {[["2.5+", "Years Experience"], ["50+", "Screens Built"], ["4", "Production Apps"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "2.5rem", lineHeight: 1, background: `linear-gradient(135deg,${C.emerald},${C.yellow})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 4 }}>{n}</div>
                  <div style={{ fontSize: 11, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: C.muted, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            <span>Scroll</span>
            <div className="sb" style={{ width: 1, height: 48, background: `linear-gradient(to bottom,${C.orange},transparent)` }} />
          </div>
        </section>

        <Divider />

        {/* EXPERIENCE */}
        <section id="experience" style={{ padding: "6rem 4rem" }}>
          <SectionLabel text="Career" color={C.orange} />
          <Heading>Work Experience</Heading>
          <Sub>Two impactful roles building real-world products from the ground up.</Sub>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {experience.map((exp, i) => <ExpCard key={exp.company} exp={exp} delay={i * 100} />)}
          </div>
        </section>

        <Divider />

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "6rem 4rem", background: C.surface }}>
          <SectionLabel text="Portfolio" color={C.violet} />
          <Heading>Featured Projects</Heading>
          <Sub>Production-ready apps built end-to-end across mobile and web.</Sub>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 20 }}>
            {projects.map((p, i) => <ProjCard key={p.title} proj={p} delay={i * 80} />)}
          </div>
        </section>

        <Divider />

        {/* SKILLS */}
        <section id="skills" style={{ padding: "6rem 4rem" }}>
          <SectionLabel text="Expertise" color={C.emerald} />
          <Heading>Technical Skills</Heading>
          <Sub>A versatile stack spanning mobile, web, and backend development.</Sub>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 18 }}>
            {skillGroups.map((g, i) => <SkillCard key={g.label} group={g} delay={i * 80} />)}
          </div>
        </section>

        <Divider />

        {/* EDUCATION */}
        <section style={{ padding: "6rem 4rem", background: C.surface }}>
          <SectionLabel text="Background" color={C.yellow} />
          <Heading>Education & Training</Heading>
          <Sub>Solid academic foundation complemented by professional training.</Sub>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 18 }}>
            {education.map((e, i) => <EduCard key={e.degree} edu={e} delay={i * 100} />)}
          </div>
        </section>

        <Divider />

        {/* CONTACT */}
        <section id="contact" style={{ padding: "6rem 4rem", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <SectionLabel text="Let's Connect" color={C.emerald} />
            <Heading>Get In Touch</Heading>
            <p style={{ color: C.muted, marginBottom: 36, fontSize: 15 }}>Open to new opportunities, freelance projects, or a friendly chat about React and mobile development.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <ContactBtn href="mailto:anuj26122000@gmail.com" icon={<svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,12 2,6" /></svg>}>
                anuj26122000@gmail.com
              </ContactBtn>
              <ContactBtn href="tel:+917700841071" icon={<svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.97a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>}>
                +91 7700841071
              </ContactBtn>
              <ContactBtn href="https://linkedin.com" icon={<svg width={16} height={16} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}>
                LinkedIn
              </ContactBtn>
            </div>
          </div>
        </section>

      </div>

      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "1.5rem", textAlign: "center", color: C.muted, fontSize: 12, position: "relative", zIndex: 10 }}>
        Designed & Built with ❤️ · Anuj Kumar © 2025 · Jaipur, India
      </footer>
    </div>
  );
}

function NavA({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ color: hov ? C.text : C.muted, textDecoration: "none", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}>
      {children}
    </a>
  );
}
const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
