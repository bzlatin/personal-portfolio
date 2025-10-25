"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const navLinks = [
  { label: "Intro", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const heroContacts = [
  { label: "GitHub", href: "https://github.com/bzlatin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/benjamin-zlatin/" },
  { label: "Email", href: "mailto:btzlatin@gmail.com" },
];

const projects = [
  {
    title: "UD CIS Discord Bot",
    impact:
      "4,000+ students pull class schedules, calendars, and alerts inside Discord.",
    stack: ["Node.js", "MongoDB", "Discord.js", "Google OAuth"],
    href: "/projects/ud-cis-bot",
  },
  {
    title: "StudyGuider",
    impact:
      "Turns 200-slide decks into notes, flashcards, and quizzes for faster studying.",
    stack: ["Next.js", "NestJS", "Prisma", "OpenAI"],
    href: "/projects/studyguider",
    meta: "2025 · In progress", // StudyGuider tag surfaces that this build is still underway.
  },
  {
    title: "StarterHelpi",
    impact:
      "Scrum Master of AI career quiz shipped in weekly increments by a 6-person team.",
    stack: ["React", "TypeScript", "OpenAI API"],
    href: "/projects/starterhelpi",
  },
  {
    title: "FoodHunt",
    impact:
      "Friend groups agree on dinner in under 2 minutes with 50+ recs per session.",
    stack: ["React", "Express", "MongoDB", "Yelp API"],
    href: "/projects/foodhunt",
  },
];

const experiences = [
  {
    role: "Software Engineer Intern",
    org: "SciTec · Missile Defense",
    period: "May–Aug 2025",
    bullets: [
      "Parallelized intercept simulations and dropped runtime from 40 to 10 minutes.",
      "Shipped quick-look plots so analysts could review data right after a run.",
    ],
  },
  {
    role: "Senior Design — IBM + Enterprise Neurosystem",
    org: "University of Delaware",
    period: "Sep 2025 – Present",
    bullets: [
      "Building NLIP-compliant agent APIs and evaluation hooks for IBM research mentors.",
      "Bi-weekly sprints for a five-person team.",
    ],
  },
  {
    role: "Software Developer",
    org: "UD CIS Department",
    period: "Feb–May 2025",
    bullets: [
      "Maintained the CIS Discord bot serving 4,000+ students with Google OAuth and MongoDB.",
      "Launched course calendars and reminders so students don’t miss schedule changes.",
    ],
  },
  {
    role: "Full Stack SWE Intern",
    org: "EmberQA (RingFlare)",
    period: "May 2022 – Aug 2023",
    bullets: [
      "Delivered React/Electron tools used by 900+ facilities for audits and reporting.",
      "Rebuilt onboarding to cut client training from 3 weeks to 5 hours.",
    ],
  },
];

const skillGroups = [
  {
    label: "Core stack",
    items: [
      "TypeScript",
      "React / Next.js",
      "Node.js / NestJS",
      "Postgres / Prisma",
    ],
  },
  {
    label: "Systems & performance",
    items: ["Python", "C++", "Threading", "Profiling"],
  },
  {
    label: "AI & automation",
    items: [
      "OpenAI API",
      "Agent workflows",
      "Prompt tooling",
      "Eval dashboards",
    ],
  },
  {
    label: "Infra & delivery",
    items: ["Docker", "Vercel", "Render", "Supabase / Auth"],
  },
];

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: premiumEase },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.6,
      ease: premiumEase,
    },
  }),
};

type SceneSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

const SceneSection = ({ id, children, className = "" }: SceneSectionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const hidden = prefersReducedMotion ? { opacity: 0 } : sectionVariants.hidden;
  const visible = prefersReducedMotion
    ? { opacity: 1, transition: { duration: 0.3 } }
    : sectionVariants.visible;

  return (
    <motion.section
      id={id}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      variants={{ hidden, visible }}
      className={[
        "scene-section relative isolate flex scroll-mt-32 flex-col gap-5 rounded-[2.5rem] border border-white/10 bg-[rgba(5,6,22,0.92)] px-4 py-8 shadow-[0_40px_110px_rgba(2,3,12,0.7)] backdrop-blur-3xl sm:px-6 sm:py-9 lg:px-10 lg:py-11",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </motion.section>
  );
};

const ParallaxHeading = ({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [32, -32]
  );

  return (
    <div ref={ref} className='space-y-3'>
      <motion.p
        style={{ y }}
        className='text-xs uppercase tracking-[0.45em] text-white/50'
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        style={{ y }}
        className='glossy-title text-3xl font-semibold text-white sm:text-4xl'
      >
        {title}
      </motion.h2>
      <motion.p
        style={{ y }}
        className='max-w-2xl text-base text-white/75 sm:text-lg'
      >
        {copy}
      </motion.p>
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointer = (event: MouseEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 4;
    node.style.setProperty("--tilt-x", `${y}deg`);
    node.style.setProperty("--tilt-y", `${x}deg`);
  };

  return (
    <motion.article
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.4 }}
      onMouseMove={handlePointer}
      onMouseLeave={() => {
        if (cardRef.current) {
          cardRef.current.style.removeProperty("--tilt-x");
          cardRef.current.style.removeProperty("--tilt-y");
        }
      }}
      className='project-card flex h-full flex-col gap-4 rounded-3xl border border-white/15 p-5 sm:p-6'
    >
      {/* Glass effect is handled via .project-card styles for the translucent blur. */}
      <div className='space-y-1.5'>
        <div className='flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50'>
          <span>{project.meta ?? "Shipped"}</span>
          <span>Project</span>
        </div>
        <h3 className='text-2xl font-semibold text-white'>{project.title}</h3>
        <p className='text-sm text-white/75'>{project.impact}</p>
      </div>
      <div className='flex flex-wrap gap-2 text-xs text-white/70'>
        {project.stack.map((tech) => (
          <span
            key={tech}
            className='rounded-full border border-white/15 px-3 py-1 tracking-wide'
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='mt-auto pt-4'>
        <Link
          href={project.href}
          className='glass-action inline-flex w-full items-center justify-between rounded-2xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/35'
        >
          <span>Learn more</span>
          <span aria-hidden className='text-lg'>
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
};

const ExperienceItem = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) => (
  <motion.li
    className='relative pl-10'
    custom={index}
    variants={cardVariants}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.4 }}
  >
    <span className='timeline-dot absolute left-0 top-2' aria-hidden />
    <div className='rounded-2xl border border-white/10 bg-white/5 p-6'>
      <div className='flex flex-wrap items-center justify-between gap-3'>
        <div>
          <h3 className='text-lg font-semibold text-white'>
            {experience.role}
          </h3>
          <p className='text-sm text-white/65'>{experience.org}</p>
        </div>
        <p className='text-xs uppercase tracking-[0.3em] text-white/45'>
          {experience.period}
        </p>
      </div>
      <ul className='mt-4 space-y-2 text-sm text-white/75'>
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  </motion.li>
);

const SkillGroupCard = ({
  group,
  index,
}: {
  group: (typeof skillGroups)[number];
  index: number;
}) => (
  <motion.article
    custom={index}
    variants={cardVariants}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.4 }}
    className='skill-group-card rounded-2xl border border-white/10 p-3 text-white sm:p-4'
  >
    {/* Skills section is grouped so recruiters can skim the actual tools I use. */}
    <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
      {group.label}
    </p>
    <div className='mt-2 flex flex-wrap gap-1.5 text-sm text-white/80'>
      {group.items.map((item) => (
        <span
          key={item}
          className='rounded-full border border-white/15 px-3 py-1 text-xs'
        >
          {item}
        </span>
      ))}
    </div>
  </motion.article>
);

const MagneticLink = ({
  children,
  onClick,
  prefersReducedMotion,
}: {
  children: ReactNode;
  onClick: () => void;
  prefersReducedMotion: boolean;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    const node = event.currentTarget.getBoundingClientRect();
    const moveX = event.clientX - (node.left + node.width / 2);
    const moveY = event.clientY - (node.top + node.height / 2);
    x.set(moveX * 0.15);
    y.set(moveY * 0.15);
  };

  return (
    <motion.button
      type='button'
      style={prefersReducedMotion ? undefined : { x, y }}
      onMouseMove={prefersReducedMotion ? undefined : handleMove}
      onMouseLeave={prefersReducedMotion ? undefined : reset}
      onClick={onClick}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: premiumEase }}
      className='cta-button inline-flex items-center gap-3 rounded-full border border-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white'
    >
      {children}
      <span className='cta-arrow text-lg'>↓</span>
    </motion.button>
  );
};

const useScrollToId = () =>
  useCallback((href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

const HeroSection = ({
  scrollToSection,
  prefersReducedMotion,
}: {
  scrollToSection: (href: string) => void;
  prefersReducedMotion: boolean;
}) => (
  <section
    id='hero'
    className='relative grid min-h-[82vh] grid-cols-1 items-center gap-10 rounded-[3rem] border border-white/10 bg-[rgba(3,4,16,0.9)] px-4 py-10 shadow-[0_50px_150px_rgba(1,2,10,0.85)] backdrop-blur-3xl sm:min-h-[86vh] sm:px-8 sm:py-12 lg:min-h-[90vh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-12 lg:py-16'
  >
    <div className='flex flex-col justify-center space-y-5'>
      <motion.p
        className='inline-flex gap-2 text-sm uppercase tracking-[0.45em] text-white/70'
        initial={prefersReducedMotion ? undefined : { opacity: 0.2 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span className='hero-name-shimmer'>Ben Zlatin</span>
      </motion.p>
      <h1 className='text-5xl font-semibold text-white sm:text-6xl'>
        I build fast, reliable software for real users.
      </h1>
      <p className='text-base text-white/75 sm:text-lg'>
        Full-stack / systems / AI-adjacent. Senior CS @ University of Delaware.
      </p>
      <p className='text-sm text-white/60'>
        Shipped work at SciTec, UD CIS, and campus projects that classmates use
        daily.
      </p>
      <div className='flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/65'>
        {heroContacts.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className='glow-chip rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:border-white hover:text-white'
          >
            {link.label}
          </a>
        ))}
      </div>
      <MagneticLink
        onClick={() => scrollToSection("#projects")}
        prefersReducedMotion={prefersReducedMotion}
      >
        See my work
      </MagneticLink>
    </div>
    <div className='relative flex h-full items-center justify-center'>
      {/* Hero portrait block highlighting the face as the focal visual. */}
      <div className='hero-portrait relative flex h-[360px] w-full max-w-sm items-center justify-center self-center sm:h-[420px] sm:max-w-md lg:h-[520px] lg:max-w-full'>
        <div className='hero-portrait__ambient' aria-hidden />
        <div className='hero-portrait__ring'>
          <Image
            src='/headshot.jpg'
            alt='Ben Zlatin portrait'
            width={460}
            height={520}
            className='hero-portrait__img'
            priority
          />
        </div>
      </div>
      <div
        className='hero-glow pointer-events-none absolute inset-0 rounded-[2.75rem]'
        aria-hidden
      />
      <div className='absolute bottom-10 flex flex-col items-center text-xs uppercase tracking-[0.4em] text-white/40'>
        <div className='scroll-indicator' />
        <span className='mt-3'>scroll</span>
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <SceneSection
    id='projects'
    className='section-accent section-accent--projects'
  >
    <ParallaxHeading
      eyebrow='Selected work'
      title='Projects with shipped impact.'
      copy='Each build listed here solved a problem for classmates, teams, or paying users.'
    />
    <div className='grid gap-6 md:grid-cols-2'>
      {projects.map((project, idx) => (
        <ProjectCard key={project.title} project={project} index={idx} />
      ))}
    </div>
  </SceneSection>
);

const ExperienceSection = () => (
  <SceneSection
    id='experience'
    className='section-accent section-accent--experience'
  >
    <ParallaxHeading
      eyebrow='Experience'
      title='Roles and responsibility.'
      copy='Short summaries that recruiters can scan quickly.'
    />
    <ol className='relative border-l border-white/15 pl-6'>
      {experiences.map((experience, idx) => (
        <ExperienceItem
          key={experience.role}
          experience={experience}
          index={idx}
        />
      ))}
    </ol>
  </SceneSection>
);

const SkillsSection = () => (
  <SceneSection id='skills'>
    <ParallaxHeading
      eyebrow='Tools'
      title='Stacks I work in daily.'
      copy='Grouped so you can see languages, frameworks, and platforms at a glance.'
    />
    <div className='grid gap-6 md:grid-cols-2'>
      {skillGroups.map((group, idx) => (
        <SkillGroupCard key={group.label} group={group} index={idx} />
      ))}
    </div>
  </SceneSection>
);

const ContactSection = () => (
  <SceneSection id='contact' className='items-center gap-4 text-center'>
    <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
      Next role
    </p>
    <h2 className='text-3xl font-semibold text-white sm:text-4xl'>
      Let’s talk.
    </h2>
    <p className='max-w-2xl text-sm text-white/75 sm:text-base'>
      I care about clear code reviews, quick turnarounds, and shipping software
      that holds up in production.
    </p>
    <div className='flex flex-wrap justify-center gap-4'>
      <a
        href='mailto:btzlatin@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
        className='glow-chip inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 transition hover:bg-white/90'
      >
        Email
      </a>
      <a
        href='https://www.linkedin.com/in/benjamin-zlatin/'
        target='_blank'
        rel='noopener noreferrer'
        className='glow-chip inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white'
      >
        LinkedIn
      </a>
      <a
        href='https://github.com/bzlatin'
        target='_blank'
        rel='noopener noreferrer'
        className='glow-chip inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white'
      >
        GitHub
      </a>
    </div>
  </SceneSection>
);

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const scrollToSection = useScrollToId();
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setNavOpen(false);
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-[#010209] text-white'>
      <div className='noise-overlay' aria-hidden />
      <header className='fixed left-1/2 top-4 z-40 w-[min(1180px,94vw)] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/65 px-4 py-3 shadow-[0_25px_70px_rgba(2,4,16,0.65)] backdrop-blur-2xl sm:px-6 sm:py-4'>
        {/* Responsive nav scales typography on desktop and collapses cleanly on mobile. */}
        <div className='flex items-center justify-between gap-3 text-[0.75rem] uppercase tracking-[0.3em] text-white/65'>
          <p>Ben Zlatin</p>
          <nav className='hidden items-center gap-2 lg:flex'>
            {navLinks.map((link) => (
              <button
                key={link.href}
                type='button'
                onClick={() => handleNavClick(link.href)}
                className='rounded-full border border-transparent px-4 py-2 transition hover:border-white/30 hover:text-white'
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className='flex items-center gap-2 lg:gap-3'>
            <a
              href='/Benjamin-Zlatin-Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white lg:inline-flex'
            >
              Resume
            </a>
            <button
              type='button'
              onClick={() => setNavOpen((prev) => !prev)}
              aria-label='Toggle navigation'
              aria-expanded={navOpen}
              className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white lg:hidden'
            >
              <span className='sr-only'>Toggle navigation</span>
              <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true'>
                <path
                  d='M4 7h16M4 12h16M4 17h16'
                  stroke='currentColor'
                  strokeWidth={1.5}
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={[
            "flex-col gap-3 pt-4 text-xs uppercase tracking-[0.3em] text-white/70 transition-opacity lg:hidden",
            navOpen ? "flex opacity-100" : "hidden opacity-0",
          ].join(" ")}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              type='button'
              onClick={() => handleNavClick(link.href)}
              className='rounded-full border border-white/20 px-4 py-2 text-left'
            >
              {link.label}
            </button>
          ))}
          <a
            href='/Benjamin-Zlatin-Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full border border-white/20 px-4 py-2 text-left'
          >
            Resume
          </a>
        </div>
      </header>

      <main className='relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pb-28 pt-24 sm:px-6 sm:pb-32 sm:pt-28 lg:px-4'>
        <HeroSection
          scrollToSection={scrollToSection}
          prefersReducedMotion={!!prefersReducedMotion}
        />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
