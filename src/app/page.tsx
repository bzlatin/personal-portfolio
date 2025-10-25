"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

const navLinks = [
  { label: "Intro", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    role: "Software Engineer Intern",
    org: "SciTec · Missile Defense",
    period: "May 2025 — Aug 2025",
    bullets: [
      "Parallelized physics-based trajectory sims, cutting runtime 75% (40 min → 10).",
      "Analyzed 12 interceptor parameters across 7 scenarios; surfaced sensitivities that influenced architecture calls.",
      "Built Python tooling to visualize missile trajectories and share insights with senior engineers.",
    ],
  },
  {
    role: "UD Senior Design",
    org: "IBM + Enterprise Neurosystem (NLIP)",
    period: "Sep 2025 — Present",
    bullets: [
      "Co-leading a senior design team building NLIP-compliant AI agents for IBM via the open-source NLIP server.",
      "Owning the backend for agent APIs + NLIP orchestration while running agile sprints with a five-person team.",
      "Documenting findings with the Enterprise Neurosystem community; integrating feedback weekly.",
    ],
  },
  {
    role: "Software Developer",
    org: "University of Delaware CIS",
    period: "Feb 2025 — May 2025",
    bullets: [
      "Maintained the UD CIS Discord Bot used by 4K+ students/faculty with Google OAuth + MongoDB.",
      "Shipped a calendar feature ingesting official course data so students can access schedules inside Discord.",
    ],
  },
  {
    role: "Full Stack SWE Intern",
    org: "EmberQA (RingFlare)",
    period: "May 2022 — Aug 2023",
    bullets: [
      "Delivered React, Node.js, and Electron apps that keep 900+ facilities aligned.",
      "Rebuilt onboarding to reduce client training from 3 weeks to 5 hours.",
      "Crafted SQL utilities that boosted the accuracy of live call-center reports.",
    ],
  },
];

const projects = [
  {
    title: "StudyGuider",
    stack: ["Next.js", "NestJS", "Prisma", "OpenAI"],
    summary:
      "Uploads PDFs/slide decks and generates concise study notes with citations using an AI-powered summarization engine.",
    outcome: "Cut study prep from hours to minutes for students.",
    href: "/projects/studyguider",
  },
  {
    title: "StarterHelpi",
    stack: ["React", "OpenAI API", "TypeScript"],
    summary:
      "Career quiz experience with AI-personalized feeds; I acted as Scrum Master overseeing agile cadences and delivery.",
    outcome:
      "Kept a 6-person team shipping weekly while tailoring quiz outcomes.",
    href: "/projects/starterhelpi",
  },
  {
    title: "FoodHunt",
    stack: ["React", "Express", "MongoDB", "Yelp API"],
    summary:
      "Tinder-style restaurant picker for friend groups, backed by Yelp recommendations and JWT-secured group sessions.",
    outcome:
      "50+ personalized recs and real-time votes so no one argues about dinner.",
    href: "/projects/foodhunt",
  },
];

const coursework = [
  "Data Structures",
  "Algorithms",
  "Advanced Web Technologies",
  "Database Systems",
  "Secure Software Design",
  "Web Applications Security",
];

const skills = [
  "JavaScript / TypeScript",
  "Python (Pandas, NumPy)",
  "C++ & Java",
  "React / Next.js",
  "Node.js / Express / Nest.js",
  "Prisma / PostgreSQL / MongoDB",
  "OpenAI + AI Agents",
  "Git & Agile rituals",
];

const funNotes = [
  "Scarsdale, NY native · I’m either in Newark, DE for school or back home visiting family.",
  "Active Secret Clearance from SciTec work—comfortable around mission-critical reviews.",
  "Actively interviewing for Entry-Level SWE roles.",
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/bzlatin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/benjamin-zlatin/" },
  { label: "Resume", href: "/Benjamin-Zlatin-Resume.pdf" },
];

const codePreview = `const currentFocus = [
  "Scaling StudyGuider's AI summaries",
  "Full-stack LMS (TanStack + Cloudflare Workers)",
  "Building NLIP-compliant AI agents for IBM via the Enterprise Neurosystem group",
];`;

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  alwaysVisible?: boolean;
};

const AnimatedSection = ({
  id,
  className = "",
  children,
  alwaysVisible = false,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (alwaysVisible) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [alwaysVisible]);

  const combinedClass = ["reveal-section", className].filter(Boolean).join(" ");

  return (
    <section id={id} ref={ref} className={combinedClass}>
      {children}
    </section>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState(navLinks[0].href);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className='relative min-h-screen overflow-hidden page-shell'>
      <div className='noise-overlay' aria-hidden />
      <main className='relative mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 pb-32 pt-6 sm:px-8 lg:px-12'>
        <div className='grid-lines rounded-[40px]' aria-hidden />

        <header className='site-header initial-visible'>
          <div>
            <p className='text-sm uppercase tracking-[0.4em] text-white/60'>
              Benjamin Zlatin
            </p>
          </div>
          <nav className='nav-links'>
            {navLinks.map((link) => (
              <button
                key={link.href}
                type='button'
                onClick={() => handleNavClick(link.href)}
                className={activeSection === link.href ? "is-active" : ""}
                aria-current={activeSection === link.href ? "page" : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <a className='link-pill' href='/Benjamin-Zlatin-Resume.pdf' download>
            Resume ↗
          </a>
        </header>

        <AnimatedSection
          id='hero'
          className='glass-panel hero-panel relative overflow-hidden initial-visible'
          alwaysVisible
        >
          <div className='hero-orb hero-orb--left' aria-hidden />
          <div className='hero-orb hero-orb--right' aria-hidden />
          <div className='hero-orb hero-orb--center' aria-hidden />
          <div className='relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center'>
            <div className='space-y-7'>
              <span className='section-eyebrow'>
                CS @ University of Delaware · Seeking Summer 2026 SWE Roles
              </span>
              <h1 className='hero-title text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl'>
                Hi, I’m Ben—full-stack engineer who likes fast systems, clear
                UX, and proving ideas with code.
              </h1>
              <p className='section-subtitle'>
                I’ve shipped missile-defense analytics, student-facing tooling,
                and AI study apps. My favorite projects pair pragmatic
                engineering with polish so teammates trust the work.
              </p>
              <div className='flex flex-wrap gap-3'>
                <span className='link-pill'>Scarsdale ⇆ Newark, DE</span>
                <a className='link-pill' href='tel:+19142687038'>
                  914 • 268 • 7038
                </a>
                <a className='link-pill' href='mailto:btzlatin@gmail.com'>
                  btzlatin@gmail.com
                </a>
              </div>
              <div className='flex flex-wrap gap-3'>
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white'
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
              <div id='about' className='about-card space-y-4'>
                <div className='flex flex-wrap items-center gap-3'>
                  <p className='section-eyebrow mb-0'>About</p>
                  <span className='about-pill'>CS ’26 · UD</span>
                  <span className='about-pill'>Enterprise Neurosystem</span>
                </div>
                <p className='text-white/80'>
                  University of Delaware CS ’26. When I’m not coding I’m
                  producing music, lifting, hiking, snowboarding, or wake
                  surfing.
                </p>
                <div className='about-pills'>
                  {coursework.map((course) => (
                    <span key={course} className='about-pill'>
                      {course}
                    </span>
                  ))}
                </div>
                <div className='grid gap-2 sm:grid-cols-2'>
                  {funNotes.map((note) => (
                    <p key={note} className='about-note'>
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className='space-y-8'>
              <div className='avatar-ring mx-auto'>
                <div className='avatar-ring__inner overflow-hidden'>
                  <Image
                    src='/headshot.jpg'
                    alt='Benjamin Zlatin headshot'
                    width={220}
                    height={220}
                    className='avatar-photo'
                    priority
                  />
                </div>
              </div>
              <div className='code-panel p-4'>
                <p className='text-xs uppercase tracking-[0.3em] text-white/60'>
                  Current focus
                </p>
                <pre className='mt-3 text-sm leading-relaxed'>
                  {codePreview}
                </pre>
              </div>
              <div className='list-card text-white/80'>
                <p className='text-xs uppercase tracking-[0.3em] text-white/60'>
                  Contact
                </p>
                <p className='mt-3'>
                  Email:{" "}
                  <a href='mailto:btzlatin@gmail.com' className='text-white'>
                    btzlatin@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href='tel:+19142687038' className='text-white'>
                    (914) 268-7038
                  </a>
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id='experience' className='section-card p-8 space-y-8'>
          <div>
            <p className='section-eyebrow'>Experience</p>
            <h2 className='section-heading'>Internships & experiences.</h2>
            <p className='section-subtitle'>
              I gravitate toward problems where performance, reliability, and
              empathy for the end user matter equally.
            </p>
          </div>
          <div className='grid gap-6 md:grid-cols-2'>
            {experiences.map((exp) => (
              <article
                key={exp.role}
                className='rounded-2xl border border-white/12 bg-white/5 p-6'
              >
                <div className='flex flex-wrap items-center justify-between gap-2'>
                  <div>
                    <p className='text-lg font-semibold text-white'>
                      {exp.role}
                    </p>
                    <p className='text-sm text-white/70'>{exp.org}</p>
                  </div>
                  <p className='text-xs uppercase tracking-[0.3em] text-white/60'>
                    {exp.period}
                  </p>
                </div>
                <ul className='mt-4 space-y-2 text-sm text-white/80'>
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id='projects' className='section-card p-7 space-y-6'>
          <div>
            <p className='section-eyebrow'>Projects</p>
            <h2 className='section-heading'>Build Log.</h2>
            <p className='section-subtitle'>
              StudyGuider, StarterHelpi, and FoodHunt taught me to ship quickly,
              gather feedback in Discord, and keep the stack boring enough to
              maintain.
            </p>
          </div>
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => (
              <article
                key={project.title}
                className='project-card flex flex-col gap-3'
              >
                <div className='flex items-center justify-between'>
                  <h3 className='text-xl font-semibold text-white'>
                    {project.title}
                  </h3>
                  <span className='text-xs uppercase tracking-[0.3em] text-white/60'>
                    Build
                  </span>
                </div>
                <p className='text-sm text-white/75'>{project.summary}</p>
                <div className='flex flex-wrap gap-2 text-xs text-white/80'>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-full border border-white/15 px-3 py-1'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className='text-sm text-white/60'>{project.outcome}</p>
                {project.href && (
                  <Link
                    href={project.href}
                    className='inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white'
                  >
                    Learn More ↗
                  </Link>
                )}
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id='stats'
          className='section-card grid gap-8 p-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]'
        >
          <div>
            <p className='section-eyebrow'>Stats & toolbox</p>
            <h2 className='section-heading'>Most Used Technologies.</h2>
            <p className='section-subtitle'>
              Performance mindsets, thorough documentation, and the obsession to
              automate the boring parts.
            </p>
            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              {skills.map((skill) => (
                <div key={skill} className='outline-card text-sm text-white/85'>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className='space-y-4' />
        </AnimatedSection>

        <AnimatedSection
          id='contact'
          className='glass-panel overflow-hidden p-9 text-center sm:p-12'
        >
          <div className='relative mx-auto flex max-w-3xl flex-col gap-5'>
            <p className='section-eyebrow'>Let’s talk</p>
            <h2 className='section-heading'>
              Looking for teams shipping thoughtful software.
            </h2>
            <p className='section-subtitle text-center'>
              Reach out if you need someone who will write the PRD, ship the
              feature, and stay up late to debug the edge cases. I care about
              clear comms and stable releases.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a
                href='mailto:btzlatin@gmail.com'
                className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:opacity-90'
              >
                Email
              </a>
              <a
                href='https://www.linkedin.com/in/benjamin-zlatin/'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white'
              >
                LinkedIn
              </a>
              <a
                href='https://github.com/bzlatin'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white'
              >
                GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
