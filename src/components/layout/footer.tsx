import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: <Github size={18} />,
    href: "https://github.com/Moha808",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/in/igal-mohadapwa",
    label: "LinkedIn",
  },
  {
    icon: <Twitter size={18} />,
    href: "https://twitter.com/M_o_h_a_808",
    label: "Twitter",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:igalmoha0@gmail.com",
    label: "Email",
  },
];

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
    <footer className="relative bg-card/50 border-t border-border/50">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="font-bold text-2xl tracking-tighter">
              Moha<span className="gradient-text">.dev</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Frontend developer crafting beautiful, performant web experiences
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
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
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {new Date().getFullYear()} Moha Igal. Built with
            <Heart size={14} className="text-primary fill-primary" />
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-border group-hover:border-primary/50 flex items-center justify-center transition-colors">
              <ArrowUp size={14} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
