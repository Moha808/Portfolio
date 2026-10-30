import { Suspense, lazy, useState, useEffect } from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { CommandPalette } from "@/components/ui/command-palette";
import { Loader2 } from "lucide-react";

// Lazy load sections below the fold
const About = lazy(() =>
  import("@/components/sections/about").then((module) => ({
    default: module.About,
  })),
);
const Skills = lazy(() =>
  import("@/components/sections/skills").then((module) => ({
    default: module.Skills,
  })),
);
const Projects = lazy(() =>
  import("@/components/sections/projects").then((module) => ({
    default: module.Projects,
  })),
);
const Experience = lazy(() =>
  import("@/components/sections/experience").then((module) => ({
    default: module.Experience,
  })),
);
const Contact = lazy(() =>
  import("@/components/sections/contact").then((module) => ({
    default: module.Contact,
  })),
);

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ToastProvider>
        <Layout onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}>
          <Hero onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
          <Suspense fallback={<SectionLoader />}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
        </Layout>
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
