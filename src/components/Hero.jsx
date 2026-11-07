import { ArrowRight, Code2, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-dots" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-greeting">Hi, I’m</p>
        <h1>RISHU <span>KUMAR</span></h1>
        <TypeAnimation
          sequence={profile.role.flatMap((role) => [role, 2000])}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />
        <div className="accent-line" />

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View My Projects <ArrowRight size={18} />
          </a>
          <a
            href="/Rishu-Kumar-CV.pdf"
            download="Rishu-Kumar-CV.pdf"
            className="button button-outline"
          >
            Download CV<Download size={17} />
          </a>
        </div>

        <div className="social-links" aria-label="Social links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-backdrop" />

        <img
          src="/profile.png"
          alt="Rishu Kumar - Frontend Developer"
          className="profile-image"
          width="600"
          height="600"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
