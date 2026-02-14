import { Suspense, lazy } from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
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
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
