import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { Navigation } from "./navigation";
import { Arrow } from "./icons";
import { ProjectArt } from "./project-art";
export function ProjectDetail({ project }: { project: Project }) {
  const next =
    projects[
      (projects.findIndex((item) => item.slug === project.slug) + 1) %
        projects.length
    ];
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation detail />
      <main tabIndex={-1} id="main" className="detail-main container">
        <Link className="text-link back-link" href="/#projects">
          <span className="back-arrow">
            <Arrow />
          </span>
          All projects
        </Link>
        <header className="detail-header">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="detail-meta">
            <div>
              <h2>Role</h2>
              <p>{project.role}</p>
            </div>
            <div>
              <h2>Timeline</h2>
              <p>{project.timeline}</p>
            </div>
            <div>
              <h2>Technology</h2>
              <ul className="tech-list">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </header>
        <div className="detail-feature">
          {["pushpull", "ud-cis-bot", "studyguider"].includes(project.slug) ? (
            <ProjectArt project={project} />
          ) : (
            <div className="detail-statement">
              <strong>{project.metric}</strong>
              <span>{project.metricLabel}</span>
            </div>
          )}
          <div className="detail-links">
            {project.links.map((link) => (
              <a
                className="button-primary"
                key={link.href}
                href={link.href}
                target={link.href.startsWith("https") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("https")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
                <Arrow diagonal />
              </a>
            ))}
          </div>
        </div>
        <div className="case-sections">
          {[
            ["The problem", project.problem],
            ["What I built", project.build],
            ["The outcome", project.outcome],
          ].map(([title, items]) => (
            <section className="case-section" key={title as string}>
              <h2>{title}</h2>
              <ul>
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
          {project.status && (
            <section className="case-section">
              <h2>Current status</h2>
              <p>{project.status}</p>
            </section>
          )}
        </div>
        <Link className="next-project" href={`/projects/${next.slug}`}>
          <span>
            Next project<strong>{next.title}</strong>
          </span>
          <Arrow />
        </Link>
        <footer className="site-footer">
          <Link href="/">Ben Zlatin</Link>
          <a href="mailto:btzlatin@gmail.com">
            Let’s talk <Arrow diagonal />
          </a>
        </footer>
      </main>
    </>
  );
}
