import type { Metadata } from "next";
import Link from "next/link";

const stack = ["Node.js", "MongoDB", "Discord.js", "Google OAuth", "Render"];

const problem = [
  "Department announcements lived in email threads no one opened.",
  "Students wanted schedules and reminders in the place they already chat.",
];

const build = [
  "Discord bot with Google OAuth so only CIS students/faculty can use commands.",
  "Cron jobs that sync official course data and drop it into channel feeds.",
  "Calendar export plus on-demand reminders for exams, labs, and advising.",
];

const outcome = [
  "4,000+ students and faculty rely on the bot daily.",
  "New calendar feature cut follow-up questions in the department Slack by half.",
];

export const metadata: Metadata = {
  title: "UD CIS Discord Bot — Project Details",
  description: "Keeping 4,000+ UD CIS students informed directly inside Discord.",
};

export default function UdCisBotPage() {
  return (
    <div className='detail-shell relative min-h-screen overflow-hidden'>
      <div className='noise-overlay' aria-hidden />
      <main className='mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6'>
        <header className='detail-panel space-y-6 p-8'>
          <p className='text-xs uppercase tracking-[0.45em] text-white/50'>Project</p>
          <h1 className='text-4xl font-semibold text-white'>UD CIS Discord Bot</h1>
          <p className='text-base text-white/75'>
            Department-operated bot that sends class schedules, reminders, and quick actions to 4,000+ students.
          </p>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Role</p>
              <p className='text-sm text-white/80'>Maintainer</p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.35em] text-white/50'>Timeline</p>
              <p className='text-sm text-white/80'>2025</p>
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
              href='https://github.com/CISC375/SageTeamX'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900'
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
