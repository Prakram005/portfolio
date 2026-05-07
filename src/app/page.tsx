import AnimatedSection from "../components/AnimatedSection";
import AnimatedWords from "../components/AnimatedWords";
import ThreeHero from "../components/ThreeHero";

const profileLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Prakram005",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prakram-pundeer",
  },
  {
    label: "Resume",
    href: "https://github.com/Prakram005/Prakram-Resume.git",
  },
];

const projects = [
  {
    title: "Run Club App",
    type: "Full-stack app",
    liveHref: "https://run-club-app.vercel.app",
    codeHref: "https://github.com/Prakram005/run-club-app.git",
    description:
      "A live running club platform focused on clean member flows, responsive UI, and practical community features.",
  },
  {
    title: "Amazon Clone",
    type: "E-commerce UI",
    liveHref: "https://amazon-clone-rouge-iota.vercel.app",
    codeHref: "https://github.com/Prakram005/Amazon-clone.git",
    description:
      "A deployed commerce clone with product browsing patterns, storefront structure, and responsive shopping experience.",
  },
  {
    title: "Resume Repository",
    type: "Professional profile",
    liveHref: "https://github.com/Prakram005/Prakram-Resume.git",
    codeHref: "https://github.com/Prakram005/Prakram-Resume.git",
    description:
      "A dedicated source for resume updates and professional material, kept versioned and easy to share.",
  },
];

const stack = [
  "MongoDB",
  "Express.js",
  "Next.js",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Three.js",
  "Framer Motion",
  "Vercel",
];

const highlights = [
  {
    value: "Projects",
    label: "Selected full-stack builds",
    href: "#work",
  },
  {
    value: "Stack",
    label: "MERN, Next.js, TypeScript",
    href: "#stack",
  },
  {
    value: "Available",
    label: "Open to web projects",
    href: "#contact",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06080d] text-[#f4f7fb]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#06080d]/78 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a
            className="theme-transition text-sm font-semibold tracking-wide text-white hover:text-[#6ee7d8]"
            href="#top"
            aria-label="Home"
          >
            Prakram Pundeer
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/62 sm:flex">
            <a className="theme-transition hover:text-white" href="#work">
              Work
            </a>
            <a className="theme-transition hover:text-white" href="#stack">
              Stack
            </a>
            <a className="theme-transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"
      >
        <AnimatedSection className="relative z-10 max-w-3xl">
          <p className="mb-5 inline-flex rounded-md border border-[#6ee7d8]/25 bg-[#6ee7d8]/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.22em] text-[#6ee7d8]">
            Full-stack MERN developer / product builder
          </p>
          <h1 className="text-glow max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            <span className="font-display font-normal italic text-[#f8d28a]">
              <AnimatedWords text="Digital products" />
            </span>{" "}
            <AnimatedWords text="with motion, depth, and taste." />
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            I build complete web products across MongoDB, Express, React,
            Node.js, and Next.js, pairing clean backend structure with polished,
            responsive interfaces.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="theme-transition inline-flex min-h-12 items-center justify-center rounded-md bg-[#6ee7d8] px-5 text-sm font-bold text-[#061014] shadow-lg shadow-cyan-950/40 hover:-translate-y-0.5 hover:bg-[#9ff4eb]"
              href="#work"
            >
              Explore work
            </a>
            <a
              className="theme-transition inline-flex min-h-12 items-center justify-center rounded-md border border-white/16 bg-white/7 px-5 text-sm font-bold text-white hover:-translate-y-0.5 hover:border-[#f8d28a]/55 hover:bg-white/12"
              href="https://www.linkedin.com/in/prakram-pundeer"
              target="_blank"
              rel="noreferrer"
            >
              Connect live
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {profileLinks.map((link) => (
              <a
                className="theme-transition rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/64 hover:border-[#6ee7d8]/50 hover:text-[#6ee7d8]"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        <div className="relative">
          <ThreeHero />
        </div>
      </section>

      <AnimatedSection className="border-y border-white/10 bg-white/[0.035] px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <a
              className="theme-transition group rounded-lg border border-white/10 bg-[#0b111a]/78 px-5 py-5 hover:-translate-y-1 hover:border-[#6ee7d8]/35 hover:bg-[#101827]"
              href={item.href}
              key={item.label}
            >
              <p className="font-display text-4xl italic text-[#f8d28a]">
                {item.value}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/48">
                {item.label}
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[#6ee7d8] opacity-0 transition group-hover:opacity-100">
                View section
              </span>
            </a>
          ))}
        </div>
      </AnimatedSection>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <AnimatedSection className="mb-11 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#6ee7d8]">
              Selected work
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-6xl">
              Interfaces with presence.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/60 lg:justify-self-end">
            Each piece is shaped around clarity, speed, and a memorable visual
            system. These are live projects with source links, ready for review
            by recruiters, collaborators, or clients.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <AnimatedSection
              className="theme-transition group rounded-lg border border-white/10 bg-[#0b111a]/82 p-6 shadow-xl shadow-black/20 hover:-translate-y-2 hover:border-[#f8d28a]/45 hover:bg-[#111827]"
              key={project.title}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a45f]">
                {project.type}
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-4 min-h-28 text-base leading-7 text-white/58">
                {project.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="theme-transition inline-flex rounded-md bg-[#6ee7d8] px-4 py-3 text-sm font-bold text-[#061014] hover:-translate-y-0.5 hover:bg-[#9ff4eb]"
                  href={project.liveHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live
                </a>
                <a
                  className="theme-transition inline-flex rounded-md border border-white/12 px-4 py-3 text-sm font-bold text-white/80 hover:border-[#6ee7d8]/50 hover:text-[#6ee7d8]"
                  href={project.codeHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section
        id="stack"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"
      >
        <AnimatedSection>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#6ee7d8]">
            Stack
          </p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-6xl">
            MERN foundation, modern product layer.
          </h2>
        </AnimatedSection>
        <AnimatedSection className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stack.map((item) => (
            <div
              className="theme-transition rounded-md border border-white/10 bg-white/[0.055] px-4 py-4 text-sm font-semibold text-white/78 hover:-translate-y-1 hover:border-[#6ee7d8]/45 hover:text-white"
              key={item}
            >
              {item}
            </div>
          ))}
        </AnimatedSection>
      </section>

      <AnimatedSection
        id="contact"
        className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-10"
      >
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(110,231,216,0.14),rgba(248,210,138,0.08)_42%,rgba(255,255,255,0.04))] px-6 py-10 text-white shadow-2xl shadow-black/30 sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#f8d28a]">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-6xl">
              Build the next version.
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              className="theme-transition inline-flex min-h-12 items-center justify-center rounded-md bg-[#f8d28a] px-5 text-sm font-bold text-[#0b0f16] hover:-translate-y-0.5 hover:bg-[#ffe2a6]"
              href="mailto:prakrampundeer@gmail.com"
            >
              Email me
            </a>
            <a
              className="theme-transition inline-flex min-h-12 items-center justify-center rounded-md border border-white/14 bg-white/7 px-5 text-sm font-bold text-white hover:-translate-y-0.5 hover:border-[#6ee7d8]/50 hover:text-[#6ee7d8]"
              href="https://github.com/Prakram005"
              target="_blank"
              rel="noreferrer"
            >
              See code
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
