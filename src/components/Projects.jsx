import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="projects-section section-container" id="projects">
      <SectionHeading index="04" eyebrow="Selected work" title="My Projects" />
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </section>
  );
}
