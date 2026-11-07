import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-intro">
          <span className="eyebrow">06 / Have a project in mind?</span>
          <h2>Let’s Connect<span>.</span></h2>
          <p>Feel free to reach out for collaborations or opportunities.</p>
        </div>

        <div className="contact-list">
          <a href={`tel:${profile.phone}`}><Phone />{profile.phone}</a>
          <a href={`mailto:${profile.email}`}><Mail />{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin />linkedin.com/in/rishu99</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github />github.com/rk12-max</a>
        </div>

        <a
          className="button button-primary back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top <ArrowUp size={18} />
        </a>
      </div>
    </section>
  );
}
