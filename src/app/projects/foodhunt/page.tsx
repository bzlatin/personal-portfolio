import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectDetail } from "@/components/project-detail";

const project = projects.find((project) => project.slug === "foodhunt")!;
export const metadata: Metadata = {
  title: `${project.title} — Ben Zlatin`,
  description: project.description,
};
export default function Page() {
  return <ProjectDetail project={project} />;
}
