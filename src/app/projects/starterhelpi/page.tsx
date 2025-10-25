import type { Metadata } from "next";
import Link from "next/link";

const stack = ["React", "TypeScript", "OpenAI API", "Supabase", "Tailwind"];

const problem = [
  "Freshmen on campus needed direction on internships and clubs.",
  "Our team required a consistent sprint rhythm to keep momentum.",
];

const build = [
  "Quiz engine that captures interests and routes to AI-personalized feeds.",
  "Prompt templates plus logging so we could review outputs with mentors.",
  "Admin tools that let non-engineers tweak question weights without redeploys.",
];

const outcome = [
  "Six-person team shipped weekly; we demoed working features every Friday.",
  "Students received next-step suggestions with reason codes, not vague ideas.",
];

export const metadata: Metadata = {
  title: "StarterHelpi — Project Details",
  description: "How we built StarterHelpi, an AI-assisted career quiz for campus demos.",
};

export default function StarterHelpiPage() {
  return (
    <div className='detail-shell relative min-h-screen overflow-hidden'>
      <div className='noise-overlay' aria-hidden />
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6'>
        <header className='detail-panel space-y-6 p-8'>
          <p className='text-xs uppercase tracking-[0.45em] text-white/50'>Project</p>
          <h1 className='text-4xl font-semibold text-white'>StarterHelpi</h1>
          <p className='text-base text-white/75'>
            Campus career quiz that pairs quick personality questions with AI-generated suggestions.
          </p>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Role</p>
              <p className='text-sm text-white/80'>Full-stack + Scrum Master</p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Timeline</p>
              <p className='text-sm text-white/80'>2023</p>
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
              href='https://bzlatin.github.io/starter_helpi/#/home'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900'
            >
              Demo ↗
            </Link>
            <Link
              href='https://github.com/bzlatin/starter_helpi'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white'
            >
              GitHub ↗
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
