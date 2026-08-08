import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Github,
  Mail,
  Menu,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { PROJECTS_DATA, SERVICES_DATA, SKILLS_DATA, MILESTONES_DATA } from "./data/portfolioData";
import { soundManager } from "./audio";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(soundManager.enabled);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleSound = () => {
    const enabled = soundManager.toggleMute();
    setSoundOn(enabled);
    if (enabled) soundManager.playClick();
  };

  const hover = () => soundManager.playHover();
  const click = () => soundManager.playClick();

  const scrollTo = (id: string) => {
    click();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white bg-noise">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button onClick={() => scrollTo("home")} className="font-display text-sm font-bold tracking-[0.25em]">
            INAM<span className="text-zinc-500">.</span>
          </button>

          <nav className="hidden items-center gap-7 text-xs font-medium tracking-[0.18em] text-zinc-400 md:flex">
            {[
              ["work", "WORK"],
              ["about", "ABOUT"],
              ["services", "SERVICES"],
              ["contact", "CONTACT"],
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} onMouseEnter={hover} className="transition hover:text-white">
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              onMouseEnter={hover}
              aria-label="Toggle sound"
              className="rounded-full border border-white/10 p-2.5 text-zinc-400 transition hover:border-white/30 hover:text-white"
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-white/10 p-2.5 md:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#070707] p-6 md:hidden">
            {["work", "about", "services", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full border-b border-white/10 py-4 text-left text-sm tracking-[0.2em] text-zinc-300"
              >
                {id.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 md:px-8">
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />
          <div className="mx-auto w-full max-w-7xl">
            <p className="mb-6 font-mono text-xs tracking-[0.28em] text-zinc-500">
              KASHMIR · INDIA · 2026
            </p>
            <h1 className="max-w-5xl font-display text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.82] tracking-[-0.06em]">
              INAM
              <br />
              <span className="text-gradient">UL HAQ.</span>
            </h1>
            <div className="mt-10 flex max-w-2xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-lg leading-8 text-zinc-400 md:text-xl">
                Developer, designer & builder creating modern websites, e-commerce experiences and interactive digital products.
              </p>
              <button
                onClick={() => scrollTo("work")}
                onMouseEnter={hover}
                className="group flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white hover:text-black"
              >
                Explore work <ArrowDown size={16} className="transition group-hover:translate-y-1" />
              </button>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-white/10 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="01 / SELECTED WORK" title="Things I've built." />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {PROJECTS_DATA.map((project) => (
                <article
                  key={project.id}
                  onMouseEnter={hover}
                  className="glass-card group overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-70 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] tracking-[0.2em]">
                      {project.number} / {project.category}
                    </span>
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">{project.subtitle}</p>
                      </div>
                      <button
                        onClick={() => {
                          click();
                          setActiveProject(project.id);
                        }}
                        className="rounded-full border border-white/10 p-3 transition hover:bg-white hover:text-black"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight size={17} />
                      </button>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/[0.05] px-3 py-1 text-[10px] text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionHeading eyebrow="02 / ABOUT" title="Building from Kashmir for the world." />
            </div>
            <div>
              <p className="text-2xl leading-relaxed text-zinc-300 md:text-4xl">
                I combine engineering, visual design and motion to turn ideas into polished digital experiences.
              </p>
              <p className="mt-7 max-w-2xl leading-8 text-zinc-500">
                My work spans React applications, commerce systems, creative WebGL experiences and AI-powered interfaces. The goal is simple: make the web feel more human, memorable and fast.
              </p>
              <div className="mt-12 space-y-5">
                {MILESTONES_DATA.map((m) => (
                  <div key={m.year} className="grid grid-cols-[70px_1fr] gap-5 border-t border-white/10 pt-5">
                    <span className="font-mono text-xs text-zinc-500">{m.year}</span>
                    <div>
                      <h3 className="font-display font-bold">{m.title}</h3>
                      <p className="mt-1 text-sm text-zinc-500">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-white/10 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="03 / SERVICES" title="What I can build." />
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES_DATA.map((service) => (
                <div key={service.number} className="bg-[#070707] p-7 transition hover:bg-[#0d0d0d]">
                  <span className="font-mono text-xs text-zinc-600">{service.number}</span>
                  <h3 className="mt-10 font-display text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2 text-xs text-zinc-400">
                        <Check size={14} className="mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="04 / SKILLS" title="Tools of the craft." />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {SKILLS_DATA.map((group) => (
                <div key={group.category} className="glass-card rounded-2xl p-7">
                  <h3 className="font-display text-xl font-bold">{group.category}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{group.description}</p>
                  <div className="mt-6 space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="flex items-start justify-between gap-4 border-t border-white/10 pt-4">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="max-w-[65%] text-right text-xs leading-5 text-zinc-500">{skill.highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 px-5 py-28 md:px-8 md:py-40">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs tracking-[0.25em] text-zinc-500">05 / CONTACT</p>
            <h2 className="mt-6 max-w-5xl font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.05em]">
              HAVE AN IDEA?
              <br />
              <span className="text-gradient">LET'S BUILD IT.</span>
            </h2>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="mailto:inamu3174@gmail.com"
                onMouseEnter={hover}
                onClick={click}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                <Mail size={16} /> Email me
              </a>
              <a
                href="https://github.com/inamu3174-droid"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={hover}
                onClick={click}
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-7 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-zinc-600 md:flex-row">
          <span>© 2026 Inam Ul Haq</span>
          <span>Built with React · Vite · Tailwind</span>
        </div>
      </footer>

      {activeProject && (
        <ProjectModal
          project={PROJECTS_DATA.find((p) => p.id === activeProject)!}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.25em] text-zinc-500">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] md:text-6xl">{title}</h2>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: (typeof PROJECTS_DATA)[number]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 p-4 backdrop-blur-xl md:p-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#080808] shadow-2xl">
        <div className="relative aspect-video">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <button onClick={onClose} className="absolute right-5 top-5 rounded-full bg-black/70 p-3">
            <X size={18} />
          </button>
        </div>
        <div className="p-7 md:p-10">
          <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">{project.year} · {project.category}</p>
          <h2 className="mt-3 font-display text-4xl font-bold">{project.title}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">{project.description}</p>
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            <Info title="IDEA" text={project.idea} />
            <Info title="APPROACH" text={project.approach} />
            <Info title="EXPERIENCE" text={project.experience} />
            <Info title="RESULT" text={project.result} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.build.map((item) => (
              <span key={item} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-400">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white hover:text-black">
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
                Live project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">{title}</p>
      <p className="mt-2 text-sm leading-7 text-zinc-400">{text}</p>
    </div>
  );
}

export default App;
