import {
  Atom, Braces, Code2, Database, GitBranch, Gauge, Globe2, Layers,
  MonitorSmartphone, Palette, Server, TestTube2, Wind
} from "lucide-react";
import { skills } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const skillIcons = {
  "React.js": Atom,
  "Next.js": Globe2,
  "JavaScript (ES6+)": Braces,
  "TypeScript": Code2,
  "Redux Toolkit": Layers,
  "Tailwind CSS": Wind,
  "Bootstrap": Palette,
  "Material UI": MonitorSmartphone,
  "Git & GitHub": GitBranch,
  "REST APIs": Server,
  "Drupal": Database,
  "React Testing Library": TestTube2,
  "CI/CD": Gauge,
  "Responsive Design": MonitorSmartphone,
  "Performance Optimization": Gauge
};

export default function Skills() {
  return (
    <section className="skills-section section-container" id="skills">
      <SectionHeading index="03" eyebrow="What I work with" title="Technical Skills" />
      <div className="skills-list">
        {skills.map((skill) => {
          const Icon = skillIcons[skill] || Code2;
          return <span className="skill-chip" key={skill}><Icon size={17} />{skill}</span>;
        })}
      </div>
    </section>
  );
}
