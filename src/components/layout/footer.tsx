import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <a href="#" className="font-bold text-xl tracking-tighter">
              <span className="text-foreground">{PERSONAL_INFO.nickname}</span>
              <span className="text-primary">{PERSONAL_INFO.domain}</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {PERSONAL_INFO.shortBio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-1.5">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Connect
            </h4>
            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-muted-foreground"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-muted-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-muted-foreground"
                aria-label="Twitter"
              >
                <Twitter size={17} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-muted-foreground"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <span className="w-7 h-7 rounded-full border border-border group-hover:border-primary flex items-center justify-center transition-colors">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
