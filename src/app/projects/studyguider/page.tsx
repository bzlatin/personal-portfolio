import type { Metadata } from "next";
import Link from "next/link";

const stack = ["Next.js 14", "NestJS", "PostgreSQL + Prisma", "OpenAI API", "Tailwind"];

const problem = [
  "Students wrestle with 200-slide decks the night before exams.",
  "Sharing notes across group chats meant zero version control.",
];

const build = [
  "Uploads PDFs, chunks them, and streams summarized notes with references.",
  "Per-user libraries powered by Prisma/PostgreSQL so classmates can revisit packs.",
  "Usage dashboards that log token costs, latency, and retries for every request.",
];

const outcome = [
  "120+ study sessions logged this semester; average run completes in under 40 seconds.",
  "Students export Markdown to Notion, so our output stays portable.",
  "Still shipping—latency, cost, and eval dashboards stay open while we finish the workflow.",
];

export const metadata: Metadata = {
  title: "StudyGuider — Project Details",
  description: "How I built StudyGuider, a study helper that turns massive slide decks into notes.",
};

export default function StudyGuiderPage() {
  return (
    <div className='detail-shell relative min-h-screen overflow-hidden'>
      <div className='noise-overlay' aria-hidden />
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6'>
        <header className='detail-panel space-y-6 p-8'>
          <p className='text-xs uppercase tracking-[0.45em] text-white/50'>Project</p>
          <h1 className='text-4xl font-semibold text-white'>StudyGuider</h1>
          <p className='text-base text-white/75'>
            AI-powered study packs that turn PDFs and lecture slides into concise notes with citations.
          </p>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Role</p>
              <p className='text-sm text-white/80'>Full-stack lead</p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Timeline</p>
              <p className='text-sm text-white/80'>2025 — In progress</p>
            </div>
            <div className='sm:col-span-2'>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Stack</p>
              <div className='mt-2 flex flex-wrap gap-2 text-xs text-white/75'>
                {stack.map((item) => (
                  <span key={item} className='rounded-full border border-white/15 px-3 py-1'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className='detail-panel grid gap-6 p-8 md:grid-cols-2'>
          <article>
            <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Problem</p>
            <ul className='mt-3 space-y-2 text-sm text-white/75'>
              {problem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className='text-xs uppercase tracking-[0.35em] text-white/50'>What I built</p>
            <ul className='mt-3 space-y-2 text-sm text-white/75'>
              {build.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className='md:col-span-2'>
            <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Outcome</p>
            <ul className='mt-3 space-y-2 text-sm text-white/75'>
              {outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
        <section className='detail-panel space-y-4 p-8'>
          <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Links</p>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='https://study-guider-web-eta.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900'
            >
              Live demo ↗
            </Link>
            <a
              href='mailto:btzlatin@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white'
            >
              Request code ↗
            </a>
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
