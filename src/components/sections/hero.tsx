import { useState, useEffect } from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Download,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { useToast } from "@/providers/toast-provider";

function TypeWriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2400);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((r) => (r + 1) % PERSONAL_INFO.roles.length);
          }
        }
      },
      isDeleting ? 35 : 75,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className="text-primary font-medium">
      {PERSONAL_INFO.roles[roleIndex].slice(0, charIndex)}
      <span className="animate-pulse text-foreground/40 font-light">|</span>
    </span>
  );
}

export function Hero({ onOpenCommandPalette }: { onOpenCommandPalette?: () => void }) {
  const { success } = useToast();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = PERSONAL_INFO.resumeUrl;
    link.download = "Moha_Igal_Frontend_Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    success("Downloading resume PDF...");
  };

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative px-6 py-16"
    >
      {/* Subtle top ambient light - teal/navy */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Availability Badge & Command Palette Shortcut */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {PERSONAL_INFO.status}
          </div>

          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/80 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all shadow-sm"
            >
              <Terminal size={13} className="text-primary" />
              <span>Quick Navigation</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-secondary rounded border border-border">
                ⌘K
              </kbd>
            </button>
          )}
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <p className="text-sm sm:text-base font-mono text-muted-foreground tracking-wide">
            Hello, I am
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            {PERSONAL_INFO.name}
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground h-9 flex items-center justify-center">
            <TypeWriter />
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-sm hover:opacity-95 transition-all"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </a>

          <button
            onClick={handleDownloadCV}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-border bg-card hover:bg-secondary/70 transition-all font-semibold text-sm text-foreground shadow-sm"
          >
            <Download size={16} className="text-primary" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 hover:bg-secondary/70 transition-all font-semibold text-sm text-foreground shadow-sm"
          >
            <Mail size={16} className="text-primary" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Verified Social Channels */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-muted-foreground"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-muted-foreground"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={PERSONAL_INFO.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-muted-foreground"
            aria-label="Twitter / X Profile"
            title="Twitter"
          >
            <Twitter size={18} />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-muted-foreground"
            aria-label="Send direct email"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
