import type { Metadata } from "next";
import Link from "next/link";

const stack = ["React", "Express", "MongoDB", "JWT", "Yelp API"];

const problem = [
  "Picking a restaurant in a group chat took forever and no one wanted to decide.",
  "Votes needed to sync in real time without over-building infra.",
];

const build = [
  "Swipe interface where each friend votes yea/nay on nearby spots.",
  "JWT-secured sessions so only invited friends can join the round.",
  "Yelp API integration that normalizes menus, price tiers, and hours for each card.",
];

const outcome = [
  "Groups make a decision in under two minutes; we surface the top choice plus backups.",
  "50+ personalized recommendations per session with photos and links.",
];

export const metadata: Metadata = {
  title: "FoodHunt — Project Details",
  description:
    "How I built FoodHunt, a fast group decision app for picking restaurants.",
};

export default function FoodHuntPage() {
  return (
    <div className='detail-shell relative min-h-screen overflow-hidden'>
      <div className='noise-overlay' aria-hidden />
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6'>
        <header className='detail-panel space-y-6 p-8'>
          <p className='text-xs uppercase tracking-[0.45em] text-white/50'>
            Project
          </p>
          <h1 className='text-4xl font-semibold text-white'>FoodHunt</h1>
          <p className='text-base text-white/75'>
            Tinder-style restaurant picker for friend groups.
          </p>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
                Role
              </p>
              <p className='text-sm text-white/80'>Full-stack builder</p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>
                Timeline
              </p>
              <p className='text-sm text-white/80'>2023–2024</p>
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
            Links
          </p>
          <div className='flex flex-wrap gap-3'>
            <a
              href='mailto:btzlatin@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900'
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
