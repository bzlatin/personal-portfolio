import type { Metadata } from "next";
import Link from "next/link";

const techStack = [
  "Next.js 14",
  "NestJS",
  "PostgreSQL + Prisma",
  "OpenAI APIs",
  "Tailwind CSS",
];

const features = [
  "Uploads PDFs or slide decks, chunks the content, and returns bullet-ready notes with references.",
  "Highlights definitions, equations, and callouts so students can skim what matters.",
  "Secure accounts with Supabase Auth plus per-user libraries for saving study packs.",
  "Export to Markdown/Notion so classmates can collaborate outside the app.",
];

const challenges = [
  "Keeping summaries accurate when students upload 200+ slide decks or scanned PDFs.",
  "Building a streaming UI so people see progress instead of staring at a spinner.",
  "Managing OpenAI usage costs per course while staying FERPA-safe with our storage choices.",
];

const learnings = [
  "Prompt evaluation is a product problem—you need real students rating outputs to trust the model.",
  "Instrumentation around the AI pipeline (timings, token counts, retries) saves hours of guesswork.",
  "Students prefer concise notes but still want links back to the source context—include both.",
];

export const metadata: Metadata = {
  title: "StudyGuider — Project Details",
  description:
    "Deep dive into StudyGuider, my AI-powered study tool built with Next.js, NestJS, PostgreSQL, and OpenAI.",
};

export default function StudyGuiderPage() {
  return (
    <div className='relative min-h-screen overflow-hidden page-shell'>
      <div className='noise-overlay' aria-hidden />
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 pb-16 pt-14 sm:px-8'>
        <section className='glass-panel space-y-5 p-8'>
          <p className='section-eyebrow'>Project Deep Dive</p>
          <h1 className='text-4xl font-semibold text-white'>StudyGuider</h1>
          <p className='section-subtitle'>
            A full-stack study companion that turns PDFs and slide decks into trustworthy notes for engineering cohorts.
            Built to help classmates prepare faster without scrolling through 200 slides at 2 a.m.
          </p>
          <div className='flex flex-wrap gap-3 text-sm text-white/80'>
            {techStack.map((item) => (
              <span key={item} className='rounded-full border border-white/20 px-3 py-1'>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className='section-card space-y-4 p-7'>
          <h2 className='section-heading text-2xl'>Features</h2>
          <ul className='space-y-3 text-white/80'>
            {features.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className='section-card space-y-4 p-7'>
          <h2 className='section-heading text-2xl'>Challenges</h2>
          <ul className='space-y-3 text-white/80'>
            {challenges.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className='section-card space-y-4 p-7'>
          <h2 className='section-heading text-2xl'>Learnings</h2>
          <ul className='space-y-3 text-white/80'>
            {learnings.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className='section-card space-y-4 p-7'>
          <h2 className='section-heading text-2xl'>Links</h2>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='https://study-guider-web-eta.vercel.app'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900'
            >
              Live Demo ↗
            </Link>
            <Link
              href='mailto:btzlatin@gmail.com'
              className='inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white'
            >
              Request code ↗
            </Link>
          </div>
        </section>

        <Link
          href='/#projects'
          className='inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/70'
        >
          ← Back to projects
        </Link>
      </main>
    </div>
  );
}
