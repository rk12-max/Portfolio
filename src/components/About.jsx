import { BriefcaseBusiness, Code2, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="about-section section-container" id="about">
      <div className="about-illustration" aria-hidden="true">
        <div className="illustration-screen"><Code2 size={65} /></div>
        <span className="illustration-plant">✦</span>
      </div>

      <div className="about-description">
        <SectionHeading index="01" eyebrow="Introduction" title="About Me" />
        <p>{profile.summary}</p>
      </div>

      <div className="about-facts">
        <div className="fact-item">
          <BriefcaseBusiness />
          <p><strong>{profile.experience}</strong><span>Experience</span></p>
        </div>
        <div className="fact-item">
          <MapPin />
          <p><strong>Remote</strong><span>Based in India</span></p>
        </div>
        <div className="fact-item">
          <Code2 />
          <p><strong>React · Next.js</strong><span>State Management · More</span></p>
        </div>
      </div>
    </section>
  );
}
