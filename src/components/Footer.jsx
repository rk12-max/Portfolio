import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Rishu Kumar. All rights reserved.</span>
      <span>Built with <Heart size={13} fill="currentColor" /> using React</span>
    </footer>
  );
}
