import { CalendarDays, MapPin } from "lucide-react";
import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function ExperienceItem({ job }) {
  return (
    <article className="experience-item">
      <span className="timeline-marker" aria-hidden="true" />
      <div className="company-logo" aria-hidden="true">{job.logo}</div>

      <div className="experience-copy">
        <h3>{job.company}</h3>
        <h4>{job.role}</h4>
        <ul>
          {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>

      <div className="experience-meta">
        <span><CalendarDays size={14} />{job.date}</span>
        <span><MapPin size={14} />{job.location}</span>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="experience-section section-container section-tinted" id="experience">
      <SectionHeading index="02" eyebrow="Career path" title="Experience" />
      <div className="experience-timeline">
        {experience.map((job) => <ExperienceItem key={job.company} job={job} />)}
      </div>
    </section>
  );
}
