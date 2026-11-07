import SectionHeading from "./SectionHeading";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {

  return (
    <section className="contact-form-section section-container" id="send-message">
      <SectionHeading index="05" eyebrow="GET IN TOUCH" title="Let's Talk" />
      <div className="contact-form-container">

        {/* Left side */}
        <div className="contact-form-visual">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=75"
            alt="People collaborating and communicating"
            className="contact-form-image"
            loading="lazy"
          />

          <div className="contact-image-overlay">
            <h2>
              Have a project in mind?
            </h2>

            <p>
              Have a question or an opportunity? Send me a message.
              I'd love to hear from you and discuss how we can work together.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="contact-form-content">
          <h2>Send Me a Message</h2>
          <p className="contact-form-subtitle">
            Fill out the form below and I'll get back to you.
          </p>

          <form action="https://formspree.io/f/moeezkwg" method="POST" className="contact-form">

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="Mobile Number"
                placeholder="Enter your Mobile number"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button type="submit" className="contact-submit-button">
              Submit
              <ArrowRight size={18} />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
