import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Code2,
  Briefcase,
  Layers,
  Mail,
  Copy,
  Download,
  Moon,
  Sun,
  Github,
  Linkedin,
  CornerDownLeft,
} from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { useToast } from "@/providers/toast-provider";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Social";
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useTheme();
  const { success } = useToast();

  const navigateTo = (hash: string) => {
    onClose();
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = [
    {
      id: "nav-about",
      title: "Go to About",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-primary" />,
      action: () => navigateTo("about"),
    },
    {
      id: "nav-skills",
      title: "Go to Skills & Technologies",
      category: "Navigation",
      icon: <Code2 className="w-4 h-4 text-primary" />,
      action: () => navigateTo("skills"),
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      category: "Navigation",
      icon: <Layers className="w-4 h-4 text-primary" />,
      action: () => navigateTo("projects"),
    },
    {
      id: "nav-experience",
      title: "Go to Experience",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-primary" />,
      action: () => navigateTo("experience"),
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-primary" />,
      action: () => navigateTo("contact"),
    },
    {
      id: "act-copy-email",
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: "Actions",
      icon: <Copy className="w-4 h-4 text-emerald-500" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        success("Email copied to clipboard!");
        onClose();
      },
    },
    {
      id: "act-download-cv",
      title: "Download Resume / CV",
      category: "Actions",
      icon: <Download className="w-4 h-4 text-primary" />,
      action: () => {
        const link = document.createElement("a");
        link.href = PERSONAL_INFO.resumeUrl;
        link.download = "Moha_Igal_Frontend_Developer_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        success("Starting resume download...");
        onClose();
      },
    },
    {
      id: "act-toggle-theme",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      category: "Actions",
      icon:
        theme === "dark" ? (
          <Sun className="w-4 h-4 text-amber-500" />
        ) : (
          <Moon className="w-4 h-4 text-primary" />
        ),
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        onClose();
      },
    },
    {
      id: "soc-github",
      title: "Open GitHub Profile",
      category: "Social",
      icon: <Github className="w-4 h-4 text-foreground" />,
      action: () => {
        window.open(PERSONAL_INFO.socials.github, "_blank");
        onClose();
      },
    },
    {
      id: "soc-linkedin",
      title: "Open LinkedIn Profile",
      category: "Social",
      icon: <Linkedin className="w-4 h-4 text-blue-500" />,
      action: () => {
        window.open(PERSONAL_INFO.socials.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1,
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl rounded-xl border border-border bg-card shadow-xl overflow-hidden z-10"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm placeholder:text-muted-foreground outline-none text-foreground"
              />
              <kbd className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-secondary rounded border border-border">
                ESC
              </kbd>
            </div>

            <div className="max-h-72 overflow-y-auto p-1.5">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No matching commands.
                </div>
              ) : (
                filteredCommands.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm transition-all ${
                        isSelected
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-secondary/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-muted-foreground">
                          {item.category}
                        </span>
                        {isSelected && <CornerDownLeft className="w-3.5 h-3.5 text-primary" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            <div className="px-4 py-2 border-t border-border bg-secondary/30 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
              <span>↑↓ Navigate</span>
              <span>Enter to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
