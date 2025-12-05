import type { Metadata } from "next";
import Link from "next/link";

const stack = [
  "React Native",
  "Express.js",
  "PostgreSQL",
  "OAuth",
  "iOS & Android",
];

const problem = [
  "Fitness apps lacked intuitive workout creation and real-time progress tracking.",
  "Users needed a platform to coordinate group training with friends.",
];

const build = [
  "Engineered fullstack mobile application from scratch for iOS and Android.",
  "Built backend infrastructure with Express.js and PostgreSQL for scalable data management.",
  "Implemented JWT-based OAuth authentication system for secure user management.",
  "Designed dynamic workout generation logic enabling custom exercise routines.",
  "Architected real-time progress tracking with persistent data synchronization.",
  "Developing social features for group training coordination and friend connectivity.",
];

const outcome = [
  "Currently in private beta testing with active user feedback incorporation.",
  "Built complete tech stack independently, demonstrating fullstack mobile expertise.",
  "Designed scalable architecture supporting cross-platform deployment.",
];

export const metadata: Metadata = {
  title: "Push / Pull — Project Details",
  description:
    "Fullstack React Native fitness app built from the ground up with backend, auth, and social features.",
};

export default function PushPullPage() {
  return (
    <div className='detail-shell relative min-h-screen overflow-hidden'>
      <div className='noise-overlay' aria-hidden />
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6'>
        <header className='detail-panel space-y-6 p-8'>
          <p className='text-xs uppercase tracking-[0.45em] text-white/50'>
            Project
          </p>
          <h1 className='text-4xl font-semibold text-white'>Push / Pull</h1>
          <p className='text-base text-white/75'>
            Fullstack mobile fitness platform where users create workouts, track
            progress, and connect with friends for group training sessions.
          </p>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
                Role
              </p>
              <p className='text-sm text-white/80'>
                Founder & Lead Developer
              </p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
                Timeline
              </p>
              <p className='text-sm text-white/80'>
                October 2024 – Present
              </p>
            </div>
            <div className='sm:col-span-2'>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
                Stack
              </p>
              <div className='mt-2 flex flex-wrap gap-2 text-xs text-white/75'>
                {stack.map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-white/15 px-3 py-1'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className='detail-panel grid gap-6 p-8 md:grid-cols-2'>
          <article>
            <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
              Problem
            </p>
            <ul className='mt-3 space-y-2 text-sm text-white/75'>
              {problem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
              What I built
            </p>
            <ul className='mt-3 space-y-2 text-sm text-white/75'>
              {build.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className='md:col-span-2'>
            <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
              Outcome
            </p>
            <ul className='mt-3 space-y-2 text-sm text-white/75'>
              {outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className='detail-panel space-y-4 p-8'>
          <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
            Status
          </p>
          <p className='text-sm text-white/75'>
            Currently in private beta testing. Public release coming soon.
          </p>
        </section>
        <section className='detail-panel space-y-4 p-8'>
          <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
            Links
          </p>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='https://push-pull.app'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900'
            >
              Visit push-pull.app ↗
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
