import type { Project } from "@/data/projects";
export function ProjectArt({ project }: { project: Project }) {
  return (
    <div className={`project-art art-${project.slug}`} aria-hidden="true">
      {project.slug === "pushpull" ? (
        <div className="pushpull-art">
          <span>PUSH</span>
          <svg viewBox="0 0 300 60">
            <path d="M5 30h285m-35-25 35 25-35 25" />
          </svg>
          <svg viewBox="0 0 300 60">
            <path d="M295 30H10M35 5 10 30l25 25" />
          </svg>
          <span>PULL</span>
        </div>
      ) : project.slug === "ud-cis-bot" ? (
        <div className="network-art">
          <svg viewBox="0 0 400 220">
            <g>
              {[
                [50, 45],
                [200, 20],
                [350, 45],
                [30, 170],
                [200, 205],
                [370, 170],
              ].map(([x, y], i) => (
                <g key={i}>
                  <path d={`M200 110L${x} ${y}`} />
                  <circle cx={x} cy={y} r="7" />
                </g>
              ))}
            </g>
            <circle cx="200" cy="110" r="42" />
            <text x="200" y="118" textAnchor="middle">
              CIS
            </text>
          </svg>
        </div>
      ) : (
        <div className="study-art">
          <div className="study-pages">
            <i />
            <i />
            <i />
            <i />
          </div>
          <span className="study-transform">200 → 1</span>
        </div>
      )}
    </div>
  );
}
