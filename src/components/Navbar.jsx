import { useState } from "react";
import { Code2, Menu, Send, X } from "lucide-react";

const links = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Rishu Kumar home">
        <Code2 aria-hidden="true" />
        <span>R <b>K</b></span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>
            {link}
          </a>
        ))}
        <a className="nav-contact" href="#send-message" onClick={closeMenu}>
          Let’s Talk <Send size={14} />
        </a>
      </nav>
    </header>
  );
}
