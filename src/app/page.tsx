import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { experiences, skillGroups } from "@/data/home";
import { Navigation } from "@/components/navigation";
import { SignalField } from "@/components/signal-field";
import { Arrow } from "@/components/icons";
import { ProjectArt } from "@/components/project-art";
import { CopyEmail } from "@/components/copy-email";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main tabIndex={-1} id="main">
        <section id="hero" className="hero container">
          <div className="hero-intro">
            <span className="status-dot" />
            Software Engineer at Innovative Defense Technologies (IDT)
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                I build fast, reliable
                <br />
                <span>software for real users.</span>
              </h1>
              <p>
                I’m Ben Zlatin, a software engineer at IDT. My background is in
                full-stack development, systems performance, and AI tooling.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#projects">
                  See my work <Arrow />
                </a>
                <a className="text-link" href="mailto:btzlatin@gmail.com">
                  Get in touch <Arrow diagonal />
                </a>
              </div>
            </div>
            <SignalField />
          </div>
        </section>
        <section id="projects" className="work-section container section-space">
          <div className="section-heading">
            <h2>Projects with shipped impact.</h2>
          </div>
          <div className="featured-projects">
            {projects.slice(0, 3).map((project, i) => (
              <article className={`project project-${i}`} key={project.slug}>
                <Link
                  className="project-visual-link"
                  href={`/projects/${project.slug}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <ProjectArt project={project} />
                </Link>
                <div className="project-info">
                  <div className="project-title-row">
                    <h3>
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                        <Arrow diagonal />
                      </Link>
                    </h3>
                    {i !== 2 && (
                      <span className="project-status">
                        {i === 0
                          ? "Live on the App Store"
                          : "University of Delaware"}
                      </span>
                    )}
                  </div>
                  <p>
                    {i === 0
                      ? "A mobile fitness app I built for custom workouts, progress tracking, and training with friends. Built with React Native for iOS and Android."
                      : i === 1
                        ? "A Discord bot for UD CIS students to access class schedules, calendars, and alerts."
                        : project.description}
                  </p>
                  {i !== 2 && (
                    <div className="project-proof">
                      <strong>{project.metric}</strong>
                      <span>{project.metricLabel}</span>
                    </div>
                  )}
                  <ul className="tech-list" aria-label="Technologies">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="more-projects">
            <h3>Other projects</h3>
            {projects.slice(3).map((project) => (
              <Link
                className="project-row"
                href={`/projects/${project.slug}`}
                key={project.slug}
              >
                <span className="row-project-name">{project.title}</span>
                <span className="row-description">
                  {project.slug === "starterhelpi"
                    ? "An AI career quiz built with a six-person team."
                    : "A restaurant picker for friend groups, with 50+ recommendations per session."}
                </span>
                <span className="row-tech">
                  {project.stack.slice(0, 3).join(" / ")}
                </span>
                <Arrow diagonal />
              </Link>
            ))}
          </div>
        </section>
        <section id="experience" className="experience-section section-space">
          <div className="container section-split">
            <div className="section-aside">
              <h2>Roles and responsibility.</h2>
              <a
                className="text-link"
                href="mailto:btzlatin@gmail.com?subject=Resume%20request"
              >
                Request my résumé <Arrow diagonal />
              </a>
            </div>
            <div className="experience-list">
              <article className="experience current">
                <div className="experience-top">
                  <span>Aug 2026 — Present</span>
                  <span className="current-label">
                    <span className="status-dot" />
                    Current
                  </span>
                </div>
                <h3>Software Engineer</h3>
                <p className="organization">
                  Innovative Defense Technologies <span>(IDT)</span>
                </p>
              </article>
              {experiences.map((experience) => (
                <article className="experience" key={experience.org}>
                  <div className="experience-top">
                    <span>{experience.period}</span>
                  </div>
                  <h3>{experience.role}</h3>
                  <p className="organization">{experience.org}</p>
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="about-section container section-space">
          <div className="about-grid">
            <div className="portrait-wrap">
              <Image
                src="/headshot.jpg"
                alt="Ben Zlatin"
                width={460}
                height={520}
                sizes="(max-width: 600px) 85vw, 340px"
                className="portrait"
              />
            </div>
            <div className="about-copy">
              <h2>About me</h2>
              <p>
                I studied computer science at the University of Delaware. While
                I was at school, I built apps for fitness, studying, and campus
                life.
              </p>
              <p>
                I’ve worked on missile-defense simulations at SciTec, maintained
                the UD CIS Discord bot, and built full-stack tools at EmberQA.
              </p>
              <div className="education">
                <h3>University of Delaware</h3>
                <p>Computer Science · Class of 2026</p>
              </div>
            </div>
          </div>
          <div id="skills" className="skills">
            <div className="section-heading">
              <h3>Stacks I work in daily.</h3>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h4>{group.label}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-top">
              <a className="text-link" href="#hero">
                Back to top{" "}
                <span className="up-arrow">
                  <Arrow />
                </span>
              </a>
            </div>
            <h2>Let’s talk.</h2>
            <div className="contact-bottom">
              <div>
                <a className="email-link" href="mailto:btzlatin@gmail.com">
                  btzlatin@gmail.com <Arrow diagonal />
                </a>
                <CopyEmail />
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/bzlatin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <Arrow diagonal />
                </a>
                <a
                  href="https://www.linkedin.com/in/benjamin-zlatin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <Arrow diagonal />
                </a>
              </div>
            </div>
            <footer className="site-footer">
              <span>© {new Date().getFullYear()} Ben Zlatin</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
