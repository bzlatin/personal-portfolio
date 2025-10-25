import type { Metadata } from "next";
import Link from "next/link";

const techStack = ["React", "TypeScript", "OpenAI API", "Vite", "Tailwind CSS"];

const features = [
  "Career quiz that captures interests, skills, and preferred work styles.",
  "OpenAI-powered feed that explains why each role fits and how to level up.",
  "Admin panel for our team to tweak question weights without redeploying.",
  "Sprint board + analytics so we could track adoption during campus demos.",
];

const challenges = [
  "Coordinating a six-person student team while juggling other coursework.",
  "Designing prompts that feel personal but stay affordable per quiz.",
  "Building feedback loops (thumbs up/down + qualitative notes) so we knew what to iterate.",
];

const learnings = [
  "Being Scrum Master forced me to over-communicate blockers and ship smaller slices.",
  "Good release notes earn you test users—people actually showed up to try the app.",
  "Logging prompt input/output is essential when non-engineers are tuning copy.",
];

export const metadata: Metadata = {
  title: "StarterHelpi — Project Details",
  description: "Behind the scenes of StarterHelpi, our AI-guided career quiz and personalized feed.",
};

export default function StarterHelpiPage() {
  return (
    <div className='relative min-h-screen overflow-hidden page-shell'>
      <div className='noise-overlay' aria-hidden />
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 pb-16 pt-14 sm:px-8'>
        <section className='glass-panel space-y-5 p-8'>
          <p className='section-eyebrow'>Project Deep Dive</p>
          <h1 className='text-4xl font-semibold text-white'>StarterHelpi</h1>
          <p className='section-subtitle'>
            A campus-built career quiz that pairs personality-style questions with AI-generated suggestions, built to help
            freshmen discover internships and communities faster.
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
              href='https://bzlatin.github.io/starter_helpi/#/home'
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
              Request presentation ↗
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
