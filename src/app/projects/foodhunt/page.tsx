import type { Metadata } from "next";
import Link from "next/link";

const techStack = ["React", "Express", "MongoDB", "JWT", "Yelp Fusion API", "Tailwind CSS"];

const features = [
  "Swipe-based interface that lets friend groups vote on nearby restaurants.",
  "Group sessions secured with JWT so only invited friends can vote.",
  "Yelp API integration delivering 50+ personalized recs per session with live photos/menus.",
  "Auto-locks once consensus is reached and drops directions into the group chat.",
];

const challenges = [
  "Normalizing Yelp data (categories, pricing, hours) so it’s easy to compare.",
  "Handling simultaneous votes and tie-breakers without race conditions.",
  "Encouraging decisions in under 2 minutes—UI copy mattered more than expected.",
];

const learnings = [
  "JWT session tokens + short TTLs keep casual apps lightweight without sacrificing security.",
  "People love motion—micro-animations made the Tinder-style swipes feel legit.",
  "Always provide a backup plan: we surface three runners-up if the group can’t agree.",
];

export const metadata: Metadata = {
  title: "FoodHunt — Project Details",
  description: "How I built FoodHunt, a group restaurant picker using React, Express, MongoDB, and Yelp APIs.",
};

export default function FoodHuntPage() {
  return (
    <div className='relative min-h-screen overflow-hidden page-shell'>
      <div className='noise-overlay' aria-hidden />
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 pb-16 pt-14 sm:px-8'>
        <section className='glass-panel space-y-5 p-8'>
          <p className='section-eyebrow'>Project Deep Dive</p>
          <h1 className='text-4xl font-semibold text-white'>FoodHunt</h1>
          <p className='section-subtitle'>
            Built in 2023–2024 to solve the &ldquo;where should we eat&rdquo; debate. FoodHunt lets small friend
            groups swipe like Tinder until everyone agrees on dinner.
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
              href='mailto:btzlatin@gmail.com'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900'
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
