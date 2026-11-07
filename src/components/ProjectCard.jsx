import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a
        className="project-preview"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.name} website`}
      >
        <img
          src={project.image}
          alt={project.alt}
          width="600"
          height="340"
          loading="lazy"
          decoding="async"
        />
        <span className="preview-action"><ArrowUpRight size={19} /></span>
      </a>

      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <time>{project.date}</time>
        </div>
        <p>{project.description}</p>
        <span className="project-stack">{project.stack}</span>
        <a className="project-url" href={project.url} target="_blank" rel="noreferrer">
          <ExternalLink size={14} /> {project.url}
        </a>
      </div>
    </article>
  );
}
